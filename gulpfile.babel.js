const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');

const conf = require('./build/evilyn/config/gulp.conf.js');

const $ = gulpLoadPlugins();

var env = ($.util.env.env || conf.env.LOCAL).toLowerCase();

$.loadSubtasks(conf.path.tasks('*.js'), $, conf, env)

gulp.task('build',
  gulp.series(
    'fontello',
    gulp.parallel(
      'systemjs:header',
      'systemjs:footer',
      'systemjs:html:header',
      'systemjs:html:footer',
      'images',
      'extras',
      'styles',
      'properties'
    ),
    'build',
    skippable(env === conf.env.LOCAL, 'deploy')
  )
);

gulp.task('default',
  gulp.series(
    'clean',
    'build',
    'notify'
  ));

gulp.task('watch', (done) => {
  gulp.watch(conf.path.src('**/*.html')).on('change', browserSync.reload);
  gulp.watch(conf.path.src(conf.path.styles('**/*.{scss,sass,css}')), gulp.series('styles'));
  gulp.watch(conf.path.src('**/*.js'), gulp.series('scripts'));
  gulp.watch(conf.path.mockups('**/*.html')).on('change', browserSync.reload);
  gulp.watch(conf.path.mockups(conf.path.styles('**/*.css')), gulp.series('styles'));
  gulp.watch(conf.path.mockups(conf.path.scripts('**/*.js')), gulp.series('scripts'));
  done();
});

gulp.task('serve', gulp.series('watch', 'browsersync'));

gulp.task('serve:dist', gulp.series('browsersync:dist'));

gulp.task('publish', gulp.series('check:dependencies', 'publish'));

function skippable(condition, task) {
  if (!condition) {
    return task;
  }
  function skipped(cb) {
    cb();
  }

  skipped.displayName = (task.name || task.displayName || task) + ' (skipped)';
  return skipped;
}
