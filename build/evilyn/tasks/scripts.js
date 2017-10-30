module.exports = function (gulp, $, conf) {

  gulp.task('scripts', () => {

    const browserSync = require('browser-sync');

    return gulp.src(conf.path.src('**/*.js'))
      .pipe($.eslint())
      .pipe($.eslint.format())
      .pipe(browserSync.stream());
  });
}
