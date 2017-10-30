module.exports = function (gulp, $, conf, env) {

  gulp.task('properties', () => {
    return gulp.src(['bower_components/**/build/public/properties/*.json', '!bower_components/agile-player/build/public/properties/*.json', 'build/evilyn/properties/properties.json', 'build/evilyn/properties/' + env + '/properties.json'])
      .pipe($.mergeJson({
        fileName: 'properties.json'
      }))
      .pipe(gulp.dest(conf.paths.tmp))
  });
}
