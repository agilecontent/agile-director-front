module.exports = function (gulp) {

  gulp.task('check:dependencies', () => {

    const checkDependencies = require('../libs/gulp-check-dependencies');

    return gulp.src(['package.json', 'bower.json'])
      .pipe(checkDependencies())
  });
}
