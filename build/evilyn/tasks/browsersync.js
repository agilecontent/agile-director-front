const browserSync = require('browser-sync');
const browserSyncConf = require('../config/browsersync.conf');
const browserSyncDistConf = require('../config/browsersync-dist.conf');

module.exports = function (gulp, $, conf) {

  gulp.task('browsersync', (done) => {
    browserSync.init(browserSyncConf(conf));
    done();
  });

  gulp.task('browsersync:dist', (done) => {
    browserSync.init(browserSyncDistConf(conf));
    done();
  });
}
