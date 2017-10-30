const Builder = require('jspm').Builder;

module.exports = function (gulp, $, conf, env) {

  gulp.task('systemjs:header', (done) => {
    const builder = new Builder('./', 'jspm.config.js');
    builder.config({
      paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*",
        "vendor:*": "src/js/vendor/*"
      },
      packageConfigPaths: [
        'npm:@*/*.json',
        'npm:*.json',
        'github:*/*.json'
      ]
    });
    builder.buildStatic(
      conf.path.src('js/header.js'),
      conf.path.tmp('js/header.js'),
      {
        production: true,
        browser: true,
        minify: env !== conf.env.LOCAL && env !== conf.env.DEV
      }
    ).then(() => {
      done();
    }, done);
  });

  gulp.task('systemjs:footer', (done) => {
    const builder = new Builder('./', 'jspm.config.js');
    builder.config({
      paths: {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*",
        "vendor:*": "src/js/vendor/*"
      },
      packageConfigPaths: [
        'npm:@*/*.json',
        'npm:*.json',
        'github:*/*.json'
      ]
    });
    builder.buildStatic(
      conf.path.src('js/footer.js'),
      conf.path.tmp('js/footer.js'),
      {
        production: true,
        browser: true,
        minify: env !== conf.env.LOCAL && env !== conf.env.DEV
      }
    ).then(() => {
      done();
    }, done);
  });

  gulp.task('systemjs:html:header', () => {
    return gulp.src(conf.path.src('**/commons/head/*.inc'))
      .pipe($.replace(
        /<script src="jspm_packages\/system.js">[\s\S]*System.import.*\n\s*<\/script>/,
        `<script src="js/header.js" async></script>`
      ))
      .pipe(gulp.dest(conf.paths.tmp));
  });

  gulp.task('systemjs:html:footer', () => {
    return gulp.src(conf.path.src('**/commons/footer/*.inc'))
      .pipe($.replace(
        /<script>[\s\S]*System.import.*\n\s*<\/script>/,
        `<script src="js/footer.js" async></script>`
      ))
      .pipe(gulp.dest(conf.paths.tmp));
  });
}
