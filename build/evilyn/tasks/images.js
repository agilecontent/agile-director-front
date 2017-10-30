module.exports = function (gulp, $, conf) {

  gulp.task('images', () => {
    return gulp.src(conf.path.src(conf.path.images('**/*')))
      .pipe($.cache($.imagemin(conf.imagemin)))
      .pipe(gulp.dest(conf.path.dist(conf.path.channel(conf.paths.images))))
  });
}
