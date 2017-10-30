module.exports = function (gulp, $, conf) {

  gulp.task('fontello', (done) => {

    const os = require('os');
    const fs = require('fs');

    fs.stat(conf.path.src(conf.path.fonts('fontello.json')), function (err) {
      if (err == null) {

        const f = $.filter(['fonts/*', 'css/fontello-codes.css']);

        gulp.src(conf.path.src(conf.path.fonts('fontello.json')))
          .pipe($.fontello({
            font: conf.paths.fonts,
            css: conf.paths.styles,
            assetsOnly: true,
            cache: $.fontello.simpleFsCache(os.tmpdir())
          }))
          .pipe(f)
          .pipe(gulp.dest(conf.paths.src))
      }
      else {
        $.util.log($.util.colors.red('Fontello not properly configured.'));
      }
      done();
    });
  });
}
