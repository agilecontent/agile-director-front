module.exports = function (conf) {
  const connectESI = require('../libs/gulp-connect-includes');
  var baseDir = [
    conf.path.dist(conf.paths.channel)
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
      }
    },
    open: false
  };
};
