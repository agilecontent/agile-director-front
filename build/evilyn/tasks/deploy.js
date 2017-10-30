module.exports = function (gulp, $, conf, env) {

  gulp.task('deploy', (done) => {

    if (env === 'local') {
      $.util.log(`${$.util.colors.red('Error:')} deploy task only for ${$.util.colors.magenta('DEV|PRE|PRO')} environments`);
      done();
    }
    else {
      const pkg = require('../../../package.json');
      const path = require('path');
      const zipFile = `${pkg.name}-webstatic-${env}-${pkg.version}.zip`;

      let deploy = $.util.env.deploy;

      var deployConf = {};
      deployConf.host = '';

      if (deploy !== undefined) {
        var deployConf = require(path.join(process.cwd(), conf.paths.tmp, 'properties.json')).deploy;
        deployConf = deployConf || {};
        deployConf = deployConf[deploy] || {};

        deployConf.auth = env;
        deployConf.host = deployConf.host || '';
        deployConf.remotePath = deployConf.remotePath || '';

        if (deployConf.host === '') {
          $.util.log(`${$.util.colors.yellow('WARN:')} deploy.${deploy}.${$.util.colors.magenta('host')} undefined in properties.json`);
        }
        if (deployConf.remotePath === '') {
          $.util.log(`${$.util.colors.yellow('WARN:')} deploy.${deploy}.${$.util.colors.magenta('remotePath')} undefined in properties.json`);
        }
      }

      var src = [
        path.join(conf.path.dist('/**/*')),
        path.join(`!${conf.paths.dist}`, zipFile)
      ];

      return gulp.src(src, {nodir: true})
        .pipe($.zip(zipFile))
        .pipe($.debug())
        .pipe(gulp.dest(conf.paths.dist))
        .pipe($.if($.util.env.deploy === 'sftp' && deployConf.host !== '', $.sftp(deployConf))).on('error', done)
      // define others deploy types...
    }
  });
}
