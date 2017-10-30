const del = require('del');

module.exports = function (gulp, $, conf) {

  gulp.task('clean', () =>
    del([conf.paths.tmp, conf.paths.dist]));
}
