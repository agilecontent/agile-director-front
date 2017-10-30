module.exports = function (gulp, $, conf, env) {

  gulp.task('build', () => {

    const lazypipe = require('lazypipe');
    const htmlFilter = $.filter(conf.path.tmp('*.html'), {restore: true});
    const jsFilter = $.filter(conf.path.tmp('**/*.js'), {restore: true});
    const cssFilter = $.filter(conf.path.tmp('**/*.css'), {restore: true});
    const modFilter = $.filter(conf.path.tmp('**/commons/{head,footer}/*.inc'), {restore: true});

    return gulp.src(conf.path.tmp('**/commons/{head,footer}/*.inc'))
      .pipe($.useref({searchPath: ['.tmp', 'app', '.']}, lazypipe().pipe($.sourcemaps.init, {loadMaps: true})))
      .pipe(jsFilter)
      .pipe($.tokenReplace(conf.tokenReplace()))
      .pipe($.replace('in:96', '"in":96')) // TODO: try to configure uglify to fix this (again) Picturefill exploits inside EDL.
      .pipe($.if(env !== conf.env.LOCAL && env !== conf.env.DEV, $.uglify(conf.uglify))).on('error', conf.errorHandler('Uglify'))
      .pipe($.rev())
      .pipe(jsFilter.restore)
      .pipe(cssFilter)
      .pipe($.debug())
      .pipe($.if(env !== conf.env.LOCAL && env !== conf.env.DEV, $.cssnano(conf.cssnano)))
      .pipe($.rev())
      .pipe(cssFilter.restore)
      .pipe($.revReplace({
        replaceInExtensions: ['.inc', '.html', '.css', '.js']
      }))
      .pipe($.if(env === conf.env.LOCAL || env === conf.env.DEV, $.sourcemaps.write('maps')))
      .pipe(htmlFilter)
      .pipe($.if(env !== conf.env.LOCAL && env !== conf.env.DEV, $.htmlmin(conf.htmlmin)))
      .pipe(htmlFilter.restore)
      .pipe(modFilter)
      .pipe($.if(env !== conf.env.LOCAL, $.cdnify(conf.cdnify(env))))
      .pipe(modFilter.restore)
      .pipe(gulp.dest(conf.path.dist(conf.paths.channel)))
  });
}
