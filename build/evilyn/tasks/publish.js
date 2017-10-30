import assign from 'object-assign';

module.exports = function (gulp, $) {

  gulp.task('publish', () => {

    const svnIgnore = require('../libs/gulp-svn-exclude-svnignore');
    const svnStatus = require('../libs/gulp-svn-status');
    const svnPublish = require('../libs/gulp-svn-publish');

    let options = assign({}, $.util.env);

    return gulp.src('**/*', {read: false})
      /*.pipe(svnIgnore())
      .pipe(svnStatus())*/
      .pipe(svnPublish(options));
  });
}
