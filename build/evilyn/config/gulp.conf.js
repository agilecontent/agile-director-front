/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

import path from 'path';
import gutil from 'gulp-util';

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  dist: 'assets',
  tmp: '.tmp',
  test: 'test',
  tasks: 'build/evilyn/tasks',
  fonts: 'fonts',
  images: 'img',
  styles: 'css',
  scripts: 'js',
  mockups: 'mockups',
  channel: '',
  templates: 'templates',
  server: 'server'
};

exports.path = {};
for (const pathName in exports.paths) {
  if (exports.paths.hasOwnProperty(pathName)) {
    exports.path[pathName] = function pathJoin() {
      const pathValue = exports.paths[pathName];
      const funcArgs = Array.prototype.slice.call(arguments);
      const joinArgs = [pathValue].concat(funcArgs);
      return path.join.apply(this, joinArgs);
    };
  }
}

exports.env = {
  LOCAL: 'local',
  DEV: 'dev',
  PRE: 'pre',
  PRO: 'pro'
}

exports.mockups = [
  exports.path.mockups('base')
];

exports.svn = {
  synced: true
};

/**
 * used on gulp dist
 */
exports.htmlmin = {
  ignoreCustomFragments: [/{{.*?}}/]
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
  return function (err) {
    gutil.log(gutil.colors.red(`[${title}]`), err.toString());
    this.emit('end');
  };
};

/**
 *  Minify PNG, JPEG, GIF and SVG images
 *  https://github.com/sindresorhus/gulp-imagemin
 */
exports.imagemin = {
  optimizationLevel: 3,
  progressive: true,
  interlaced: true
};

/**
 *  converts local URLs to CDN ones
 *  https://github.com/kaiqigong/gulp-cdnify
 */
exports.cdnify = function () {
  let properties = require(path.join(process.cwd(), exports.paths.tmp, 'properties.json'));
  properties = properties || {};
  let url = properties.cdnWebstatic || '';
  if (url !== '' && url.substr(-1) != '/') {
    url = url + '/';
  }
  return {
    base: url
  }
};

exports.htmlmin = {
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: {compress: {drop_console: true}},
  processConditionalComments: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true
}

exports.cssnano = {
  safe: true,
  autoprefixer: false,
  discardComments: true
}

exports.uglify = {
  compress: {
    drop_console: true
  },
  keep_quoted_props: true
}

exports.tokenReplace = function () {
  return {
    prefix: '${',
    suffix: '}',
    preserveUnknownTokens: true,
    tokens: require(path.join(process.cwd(), exports.paths.tmp, 'properties.json'))
  }
}
