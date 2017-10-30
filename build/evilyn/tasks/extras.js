module.exports = function (gulp, $, conf, env) {

  gulp.task('extras', () => {

    const path = require('path');

    var src = [
      path.join(conf.paths.src, '/**/*'),
      path.join(`!${conf.paths.src}`, `${conf.paths.styles}`, '**'),
      path.join(`!${conf.paths.src}`, `${conf.paths.scripts}`, '**'),
      path.join(`!${conf.paths.src}`, `${conf.paths.images}`, '**'),
      path.join(`!${conf.paths.src}`, `${conf.paths.fonts}`, 'fontello.json'),
      path.join(`!${conf.paths.src}`, `${conf.paths.fonts}`, '**/*.{html,css}'),
      path.join(`!${conf.paths.src}`, `${conf.paths.server}`),
      path.join(`!${conf.paths.src}`, `${conf.paths.server}`, '**'),
      path.join(`!${conf.paths.src}`, 'commons/{head,footer}/*.inc')
    ];
    if (env === conf.env.DEV) {
      $.util.log(`Copying ${$.util.colors.magenta(conf.mockups)}`);
      conf.mockups.reverse().forEach((mockup) => {
        src.push(path.join(mockup, '**'))
      });
    }

    return gulp.src(src)
      .pipe(gulp.dest(conf.path.dist(conf.paths.channel)));
  });
}
