'use strict';

import fs from 'fs';
import path from 'path';
import gulpIgnore from 'gulp-ignore';
import gutil from 'gulp-util';

const appendStars = function (dirname, str) {
    var prefix = '';
    if (dirname) {
        prefix = dirname + '/';
    }
    return [
        prefix + str + '**',
        prefix + str + '/**'
    ];
};

module.exports = function (svnignorePath) {
    svnignorePath = path.resolve(svnignorePath || '.svnignore');
    var dirname = path.dirname(path.relative(process.cwd(), svnignorePath));
    if (dirname === '.') {
        dirname = '';
    }

    gutil.log(`Reading ignore file ${gutil.colors.magenta(svnignorePath)}`);
    var contents = fs.readFileSync(svnignorePath, 'utf8');
    var ignoredFiles = contents.split('\n')
        .map(function (str) {
            return str.trim();
        })
        .filter(Boolean) // ignore empty lines
        .map(appendStars.bind(null, dirname))
        .reduce(function (m, paths) {
            return m.concat(paths);
        }, []);

    return gulpIgnore.exclude(ignoredFiles, {dot: true});
};