module.exports = function (gulp, $, conf, env) {

  gulp.task('notify', (done) => {
    $.util.log(`Build ${$.util.colors.yellow(env.toUpperCase())} completed.`);
    done();
  });
  
}
