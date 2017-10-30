import through from 'through2';
import assign from 'object-assign';
import async from 'async';
import gutil from 'gulp-util';
import gulp from 'gulp';
import semver from 'semver';
import fs from 'fs';
import svn from 'node-svn-ultimate';
import bump from 'gulp-bump';
import svnBump from '../gulp-svn-bump';
var Enquirer = require('enquirer');

const PLUGIN_NAME = 'gulp-svn-publish';

const DEFAULT_OPTIONS = {
  'non-interactive': false,
  'switch': false,
  comment: 'first commit'
}

module.exports = function (options) {
  options = assign(DEFAULT_OPTIONS, options);

  return through.obj(function (file, enc, cb) {
    cb(null, file);
  }, function (done) {
    async.waterfall([
      (cb) => {
        gutil.log('Getting svn info');
        svn.commands.info('.', [], function (err, info) {
          if (err !== null) {
            return cb(err);
          }
          return cb(null, svn.util.parseUrl(info.entry.url));
        });
      },
      (svnInfo, cb) => {
        let version;
        // Trunk -> Branch (SNAPSHOTS)
        // branches are related to PRE deployments
        if (svnInfo.type === 'trunk') {
          gutil.log(`Getting next ${gutil.colors.yellow('branch')} version`);
          svn.util.getBranches(svnInfo.branchesUrl, [], function (err, branchArray) {
            if (err !== null) {
              return cb(err);
            }
            if (Array.isArray(branchArray) && branchArray.length > 0) {
              branchArray.sort(function (a, b) {
                try {
                  return semver.rcompare(a.name, b.name);
                }
                catch (err2) {
                  return -1;
                }
              });
              version = {
                minor: semver.inc(branchArray[0].name, 'preminor', 'x').replace(/\.0$/, ''),
                major: semver.inc(branchArray[0].name, 'premajor', 'x').replace(/\.0$/, '')
              }
            }
            version = version || {minor: '0.0.0-x'};
            return cb(null, svnInfo, version);
          });
        }
        // Branch -> Tag
        // Tag are related to PRO deployments
        else if (svnInfo.type === 'branches') {
          gutil.log(`Getting next ${gutil.colors.yellow('tag')} version`);
          let currentVersion = JSON.parse(fs.readFileSync('package.json', 'utf8')).version
          if (!/^\d+\.\d+\.\d+-\d+$/.test(currentVersion)) {
            return cb('snapshotVersionFail');
          }
          version = `${semver.major(currentVersion)}.${semver.minor(currentVersion)}.${currentVersion.replace(/\d+\.\d+\.\d+-(\d+)/, '$1')}`;
          return cb(null, svnInfo, version);
        }
        else {
          return cb('publishTagFail');
        }
      },
      (svnInfo, version, cb) => {
        gutil.log('Getting user options');

        var enquirer = new Enquirer();
        enquirer.register('confirm', require('prompt-confirm'));

        if (svnInfo.type === 'trunk') {
          if (!version.major) {
            enquirer.question('version', `Publish first version ${gutil.colors.magenta(version.minor)}:`, {default: version.minor});
          } else {
            enquirer.question('version', `Publish next minor version ${gutil.colors.magenta(version.minor)} or next Major version ${gutil.colors.magenta(version.major)}:`, {default: version.minor});
          }
        }
        else if (svnInfo.type === 'branches') {
          enquirer.question('version', `Publish next version ${gutil.colors.magenta(version)}`, {default: version});
        }

        enquirer.question('comment', 'Please, add a comment:', {default: options.comment});
        enquirer.question('switch', 'Switch working copy?', {type: 'confirm', default: options.switch});
        enquirer.question('confirm', 'Confirm?', {type: 'confirm'});

        let questions = [];
        questions.push('version');
        questions.push('comment');
        if (options.switch) {
          questions.push('switch');
        }
        questions.push('confirm');

        if (!'options.non-interactive') {
          enquirer.ask(questions).then(function (answers) {
            if (!answers.confirm) {
              return cb('cancel');
            }
            options.version = answers.version;
            options.comment = answers.comment;
            options.switch = answers.switch;
            return cb(null, svnInfo);
          });
        }
        else {
          options.version = options.version || version;
          gutil.log(`Entering non-interactive mode [version:${gutil.colors.cyan(options.version)} comment:${gutil.colors.cyan(options.comment)} switch:${gutil.colors.cyan(options.switch)}]`);
          return cb(null, svnInfo);
        }
      },
      (svnInfo, cb) => {
        let src, dest;
        if (svnInfo.type === 'trunk') {
          src = svnInfo.trunkUrl;
          dest = svnInfo.branchesUrl + '/' + options.version;
        }
        else if (svnInfo.type === 'branches') {
          src = svnInfo.branchesUrl + '/' + svnInfo.typeName;
          dest = svnInfo.tagsUrl + '/' + options.version;
        }

        gutil.log(`Creating ${gutil.colors.magenta(src)} -> ${gutil.colors.magenta(dest)}`);
        svn.commands.copy(src, dest, {
          params: [`-m "${options.comment}"`]
        }, function (err, info) {
          if (err !== null) {
            return cb(err);
          }
          gutil.log(gutil.colors.magenta(info.trim()));
          return cb(null, dest);
        });
      },
      (dest, cb) => {
        var stream = gulp.src(['./bower.json', './package.json'])
          .pipe(bump({version: options.version.split("-").pop() === 'x' ? options.version.replace(/.$/, '0') : options.version}))
          .pipe(gulp.dest('.tmp'))
          .pipe(svnBump(dest))
        stream.on('error', function (err) {
          return cb(err);
        });
        stream.on('finish', function () {
          return cb(null, dest);
        });
      },
      (dest, cb) => {
        if (options.switch) {
          gutil.log(`Switching working copy to ${gutil.colors.magenta(dest)}`);
          svn.commands.switch(dest, '.', [], function (err, info) {
            if (err !== null) {
              return cb(err);
            }
            return cb(null, dest);
          });
        }
        return cb(null, dest);
      }
    ], function (err) {
      if (err) {
        switch (err) {
          case 'publishTagFail':
            gutil.log(gutil.colors.red('publish over tags is not supported'));
            break;
          case 'snapshotVersionFail':
            gutil.log(gutil.colors.red('version in package.json must be a SNAPSHOT x.x.x-x, skipping'));
            break;
          case 'cancel':
            break;
          default:
            done(new gutil.PluginError(PLUGIN_NAME, err));
        }
      }
      done(null);
    });
  });
}
