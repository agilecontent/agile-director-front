module.exports = function (gulp, $, conf, env) {

  gulp.task('styles', () => {

    const browserSync = require('browser-sync');
    const postcssConf = require('../config/postcss.conf');

    return gulp.src(conf.path.src(conf.path.styles('*.scss')))
      .pipe($.if(env === conf.env.DEV || env === conf.env.LOCAL, $.sourcemaps.init()))
      .pipe($.postcss(postcssConf.processors)).on('error', conf.errorHandler('postcss'))
      .pipe($.rename({
        extname: ".css"
      }))
      .pipe($.if(env === conf.env.DEV || env === conf.env.LOCAL, $.sourcemaps.write()))
      .pipe(gulp.dest(conf.path.tmp(conf.paths.styles)))
      .pipe(browserSync.stream());
  });
}
