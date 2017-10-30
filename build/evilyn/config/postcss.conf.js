import asImport from 'postcss-import';
import precss from 'precss';
import discardComments from 'postcss-discard-comments';
import mqpacker from 'css-mqpacker';
import autoprefixer from 'autoprefixer';
import {paths} from './gulp.conf';
import {mockups} from './gulp.conf';
import path from 'path';

exports.processors = [
  asImport({
    path: [
      paths.tmp
    ].concat(mockups).map(function (i) {
      return path.join(i, 'css');
    })
  }),
  precss,
  discardComments({
    removeAll: true
  }),
  mqpacker({sort: true}),
  autoprefixer({browsers: ['> 0%']})
];
