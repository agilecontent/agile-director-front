import through from 'through2';
import svn from 'node-svn-ultimate';
import path from 'path';
import fs from 'fs';
import gutil from 'gulp-util';
import del from 'del';

const PLUGIN_NAME = 'gulp-svn-bump';

module.exports = function (svnPath) {

    const bump = function (file, enc, cb) {
        const stream = this;
        file = file.path;
        fs.stat(file, function (err) {
            if (err == null) {
                let dist = svnPath + '/' + path.basename(file);
                svn.commands.del(dist, {params: ['-m "remove old version"']}, function (err) {
                    if (err !== null) {
                        this.emit('error', new PluginError(PLUGIN_NAME, err));
                        return cb();
                    }
                    svn.commands.import(file, dist, {params: ['-m "updated version"']}, function (err) {
                        if (err !== null) {
                            this.emit('error', new PluginError(PLUGIN_NAME, err));
                            return cb();
                        }
                        gutil.log(`Bumped ${gutil.colors.magenta(dist)}`);
                        del(file);
                        return cb();
                    });
                });
            }
        });
        return stream;
    }

    return through.obj(bump, (cb) => {
        return cb();
    });
};