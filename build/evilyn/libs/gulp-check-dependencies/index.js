'use strict';

import through from 'through2';
import gutil from 'gulp-util';

const PLUGIN_NAME = 'gulp-check-dependencies';

const DEFAULT_OPTIONS = {
  checkPrerelease: true,
  whitelist: ['jspm']
};

module.exports = function (options = DEFAULT_OPTIONS) {

  const checkDep = function (file) {

    return new Promise((resolve, reject) => {

      var json = JSON.parse(file.contents.toString());

      var status = [],
        isPrerelease = function (version) {
          return !(!/[\d]+\.[\d]+\.[\d]+(?:-(?:rc\.|beta\.|alpha\.|)?[\dx]+)/mg.test(version));
        },
        addStatus = function (depName, type) {
          if (options.checkPrerelease === true) {
            status.push({
              depName: depName, type: type
            });
          }
        },
        onWhitelist = function (depname) {
          return options.whitelist.includes(depname);
        },
        checkDependencies = function (dependencies) {
          if (dependencies !== undefined) {
            Object.keys(dependencies).forEach(function (depName) {
              if (isPrerelease(dependencies[depName]) && !onWhitelist(depName)) {
                addStatus(depName, 'pre-release')
              }
            });
          }
        }

      checkDependencies(json.devDependencies);
      checkDependencies(json.dependencies);
      checkDependencies(json.peerDependencies);

      resolve(status);
    })
  };

  const checkDependencies = function (file, enc, cb) {
    const stream = this;

    gutil.log(`Checking dependencies ${gutil.colors.magenta(file.path)}`);

    checkDep(file).then((status) => {
      if (status.length > 0) {
        status.forEach(function (status) {
          gutil.log(status.depName, gutil.colors.red(status.type));
        });
        return cb(new gutil.PluginError(PLUGIN_NAME, 'Dependency problems'));
      }
      stream.push(file);
      return cb();
    }).catch((err) => {
      stream.emit('error', err);
      return cb();
    });

    return stream;
  };

  return through.obj(checkDependencies, (cb) => {
    return cb();
  });
}
