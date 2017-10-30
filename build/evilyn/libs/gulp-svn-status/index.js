'use strict';

import through from 'through2';
import gutil from 'gulp-util';
import {exec} from 'child_process';

const PLUGIN_NAME = 'gulp-svn-status';

const STATUS_TYPES = ['!', 'A', 'D', 'M', 'R', 'C', 'X', '?'];
const DEFAULT_OPTIONS = {
    errorStatus: ['A', 'D', 'M', 'R', 'C', 'X', '?'] // '!' fails
};

module.exports = function (options = DEFAULT_OPTIONS) {

    gutil.log(`Checking svn status. Error codes: ${gutil.colors.magenta(options.errorStatus)}`);

    options.errorStatus.forEach(function (status) {
        if (!STATUS_TYPES.includes(status)) {
            throw new gutil.PluginError(PLUGIN_NAME, `svn status ${status} not supported`);
        }
    });

    const getStatus = function (filePath) {
        return new Promise((resolve, reject) => {
            exec(`svn status ${filePath}`, (err, stdout, stderr) => {
                if (err || stderr) {
                    reject();
                } else {
                    resolve(stdout.substring(0, 1));
                }
            });
        });
    };

    const svnFileStatus = function (file, enc, cb) {
        const stream = this;

        getStatus(file.path).then((status) => {
            if (options.errorStatus.includes(status)) {
                gutil.log(gutil.colors.red(`${status} ${file.path}`));
                errors.push(file);
            }
            stream.push(file);
            return cb();
        }).catch((err) => {
            stream.emit('error', new gutil.PluginError(PLUGIN_NAME, err));
            return cb();
        });

        return stream;
    }

    var errors = [];

    return through.obj(svnFileStatus, (cb) => {
        if (errors.length > 0) {
            return cb(new gutil.PluginError(PLUGIN_NAME, 'Synchronize working copy with the svn repository'));
        }
        return cb();
    });
};