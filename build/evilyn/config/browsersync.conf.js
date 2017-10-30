module.exports = function (conf) {
  const connectESI = require('../libs/gulp-connect-includes');
  var baseDir = [
    conf.paths.src,
    conf.paths.tmp
  ];
  baseDir = baseDir.concat(conf.mockups);

  return {
    middleware: [
      connectESI({
        baseDir: baseDir,
        ext: '.html',
        method: 'readOnLineIfNotExist'  // readOnLine|readLocal|readOnLineIfNotExist|downloadIfNotExist
      })
    ],
    server: {
      baseDir: baseDir,
      routes: {
        '/.tmp/properties.json': '.tmp/properties.json',
        '/jspm_packages': 'jspm_packages',
        '/jspm.config.js': 'jspm.config.js',
        '/jspm.browser.js': 'jspm.browser.js'
      }
    },
    open: false
  };
};
