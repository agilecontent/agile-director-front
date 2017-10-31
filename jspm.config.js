SystemJS.config({
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21'
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    },
    'npm:chokidar@1.7.0': {
      'map': {
        'glob-parent': 'npm:glob-parent@2.0.0',
        'anymatch': 'npm:anymatch@1.3.2',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'async-each': 'npm:async-each@1.0.1',
        'is-binary-path': 'npm:is-binary-path@1.0.1',
        'is-glob': 'npm:is-glob@2.0.1',
        'readdirp': 'npm:readdirp@2.1.0',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:glob-parent@2.0.0': {
      'map': {
        'is-glob': 'npm:is-glob@2.0.1'
      }
    },
    'npm:is-glob@2.0.1': {
      'map': {
        'is-extglob': 'npm:is-extglob@1.0.0'
      }
    },
    'npm:is-binary-path@1.0.1': {
      'map': {
        'binary-extensions': 'npm:binary-extensions@1.10.0'
      }
    },
    'npm:readdirp@2.1.0': {
      'map': {
        'set-immediate-shim': 'npm:set-immediate-shim@1.0.1',
        'minimatch': 'npm:minimatch@3.0.4',
        'graceful-fs': 'npm:graceful-fs@4.1.11',
        'readable-stream': 'npm:readable-stream@2.3.3'
      }
    },
    'npm:anymatch@1.3.2': {
      'map': {
        'normalize-path': 'npm:normalize-path@2.1.1',
        'micromatch': 'npm:micromatch@2.3.11'
      }
    },
    'npm:fsevents@1.1.2': {
      'map': {
        'nan': 'npm:nan@2.6.2',
        'node-pre-gyp': 'npm:node-pre-gyp@0.6.36'
      }
    },
    'npm:normalize-path@2.1.1': {
      'map': {
        'remove-trailing-separator': 'npm:remove-trailing-separator@1.0.2'
      }
    },
    'npm:node-pre-gyp@0.6.36': {
      'map': {
        'rc': 'npm:rc@1.2.1',
        'tar-pack': 'npm:tar-pack@3.4.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'semver': 'npm:semver@5.4.1',
        'tar': 'npm:tar@2.2.1',
        'rimraf': 'npm:rimraf@2.6.1',
        'nopt': 'npm:nopt@4.0.1',
        'npmlog': 'npm:npmlog@4.1.2',
        'request': 'npm:request@2.81.0'
      }
    },
    'npm:tar-pack@3.4.0': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.3',
        'tar': 'npm:tar@2.2.1',
        'rimraf': 'npm:rimraf@2.6.1',
        'uid-number': 'npm:uid-number@0.0.6',
        'once': 'npm:once@1.4.0',
        'fstream-ignore': 'npm:fstream-ignore@1.0.5',
        'fstream': 'npm:fstream@1.0.11',
        'debug': 'npm:debug@2.6.8'
      }
    },
    'npm:tar@2.2.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'fstream': 'npm:fstream@1.0.11',
        'block-stream': 'npm:block-stream@0.0.9'
      }
    },
    'npm:rc@1.2.1': {
      'map': {
        'ini': 'npm:ini@1.3.4',
        'strip-json-comments': 'npm:strip-json-comments@2.0.1',
        'deep-extend': 'npm:deep-extend@0.4.2',
        'minimist': 'npm:minimist@1.2.0'
      }
    },
    'npm:string-width@1.0.2': {
      'map': {
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'is-fullwidth-code-point': 'npm:is-fullwidth-code-point@1.0.0',
        'code-point-at': 'npm:code-point-at@1.1.0'
      }
    },
    'npm:fstream-ignore@1.0.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimatch': 'npm:minimatch@3.0.4',
        'fstream': 'npm:fstream@1.0.11'
      }
    },
    'npm:fstream@1.0.11': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'graceful-fs': 'npm:graceful-fs@4.1.11',
        'rimraf': 'npm:rimraf@2.6.1'
      }
    },
    'npm:block-stream@0.0.9': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:micromatch@2.3.11': {
      'map': {
        'is-extglob': 'npm:is-extglob@1.0.0',
        'is-glob': 'npm:is-glob@2.0.1',
        'normalize-path': 'npm:normalize-path@2.1.1',
        'filename-regex': 'npm:filename-regex@2.0.1',
        'array-unique': 'npm:array-unique@0.2.1',
        'object.omit': 'npm:object.omit@2.0.1',
        'arr-diff': 'npm:arr-diff@2.0.0',
        'parse-glob': 'npm:parse-glob@3.0.4',
        'regex-cache': 'npm:regex-cache@0.4.3',
        'extglob': 'npm:extglob@0.3.2',
        'expand-brackets': 'npm:expand-brackets@0.1.5',
        'braces': 'npm:braces@1.8.5',
        'kind-of': 'npm:kind-of@3.2.2'
      }
    },
    'npm:once@1.4.0': {
      'map': {
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:nopt@4.0.1': {
      'map': {
        'osenv': 'npm:osenv@0.1.4',
        'abbrev': 'npm:abbrev@1.1.0'
      }
    },
    'npm:rimraf@2.6.1': {
      'map': {
        'glob': 'npm:glob@7.1.2'
      }
    },
    'npm:npmlog@4.1.2': {
      'map': {
        'set-blocking': 'npm:set-blocking@2.0.0',
        'console-control-strings': 'npm:console-control-strings@1.1.0',
        'are-we-there-yet': 'npm:are-we-there-yet@1.1.4',
        'gauge': 'npm:gauge@2.7.4'
      }
    },
    'npm:request@2.81.0': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'tunnel-agent': 'npm:tunnel-agent@0.6.0',
        'stringstream': 'npm:stringstream@0.0.5',
        'forever-agent': 'npm:forever-agent@0.6.1',
        'aws-sign2': 'npm:aws-sign2@0.6.0',
        'is-typedarray': 'npm:is-typedarray@1.0.0',
        'caseless': 'npm:caseless@0.12.0',
        'performance-now': 'npm:performance-now@0.2.0',
        'http-signature': 'npm:http-signature@1.1.1',
        'tough-cookie': 'npm:tough-cookie@2.3.2',
        'form-data': 'npm:form-data@2.1.4',
        'aws4': 'npm:aws4@1.6.0',
        'mime-types': 'npm:mime-types@2.1.16',
        'har-validator': 'npm:har-validator@4.2.1',
        'qs': 'npm:qs@6.4.0',
        'hawk': 'npm:hawk@3.1.3',
        'json-stringify-safe': 'npm:json-stringify-safe@5.0.1',
        'isstream': 'npm:isstream@0.1.2',
        'oauth-sign': 'npm:oauth-sign@0.8.2',
        'combined-stream': 'npm:combined-stream@1.0.5',
        'uuid': 'npm:uuid@3.1.0',
        'extend': 'npm:extend@3.0.1'
      }
    },
    'npm:glob@7.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimatch': 'npm:minimatch@3.0.4',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'once': 'npm:once@1.4.0',
        'inflight': 'npm:inflight@1.0.6',
        'fs.realpath': 'npm:fs.realpath@1.0.0'
      }
    },
    'npm:is-fullwidth-code-point@1.0.0': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.1'
      }
    },
    'npm:are-we-there-yet@1.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.3',
        'delegates': 'npm:delegates@1.0.0'
      }
    },
    'npm:osenv@0.1.4': {
      'map': {
        'os-homedir': 'npm:os-homedir@1.0.2',
        'os-tmpdir': 'npm:os-tmpdir@1.0.2'
      }
    },
    'npm:parse-glob@3.0.4': {
      'map': {
        'is-extglob': 'npm:is-extglob@1.0.0',
        'is-glob': 'npm:is-glob@2.0.1',
        'glob-base': 'npm:glob-base@0.3.0',
        'is-dotfile': 'npm:is-dotfile@1.0.3'
      }
    },
    'npm:extglob@0.3.2': {
      'map': {
        'is-extglob': 'npm:is-extglob@1.0.0'
      }
    },
    'npm:tunnel-agent@0.6.0': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:inflight@1.0.6': {
      'map': {
        'once': 'npm:once@1.4.0',
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:form-data@2.1.4': {
      'map': {
        'mime-types': 'npm:mime-types@2.1.16',
        'combined-stream': 'npm:combined-stream@1.0.5',
        'asynckit': 'npm:asynckit@0.4.0'
      }
    },
    'npm:regex-cache@0.4.3': {
      'map': {
        'is-primitive': 'npm:is-primitive@2.0.0',
        'is-equal-shallow': 'npm:is-equal-shallow@0.1.3'
      }
    },
    'npm:object.omit@2.0.1': {
      'map': {
        'for-own': 'npm:for-own@0.1.5',
        'is-extendable': 'npm:is-extendable@0.1.1'
      }
    },
    'npm:arr-diff@2.0.0': {
      'map': {
        'arr-flatten': 'npm:arr-flatten@1.1.0'
      }
    },
    'npm:expand-brackets@0.1.5': {
      'map': {
        'is-posix-bracket': 'npm:is-posix-bracket@0.1.1'
      }
    },
    'npm:braces@1.8.5': {
      'map': {
        'repeat-element': 'npm:repeat-element@1.1.2',
        'preserve': 'npm:preserve@0.2.0',
        'expand-range': 'npm:expand-range@1.8.2'
      }
    },
    'npm:glob-base@0.3.0': {
      'map': {
        'glob-parent': 'npm:glob-parent@2.0.0',
        'is-glob': 'npm:is-glob@2.0.1'
      }
    },
    'npm:gauge@2.7.4': {
      'map': {
        'string-width': 'npm:string-width@1.0.2',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'console-control-strings': 'npm:console-control-strings@1.1.0',
        'object-assign': 'npm:object-assign@4.1.1',
        'aproba': 'npm:aproba@1.1.2',
        'has-unicode': 'npm:has-unicode@2.0.1',
        'wide-align': 'npm:wide-align@1.1.2',
        'signal-exit': 'npm:signal-exit@3.0.2'
      }
    },
    'npm:is-equal-shallow@0.1.3': {
      'map': {
        'is-primitive': 'npm:is-primitive@2.0.0'
      }
    },
    'npm:for-own@0.1.5': {
      'map': {
        'for-in': 'npm:for-in@1.0.2'
      }
    },
    'npm:http-signature@1.1.1': {
      'map': {
        'jsprim': 'npm:jsprim@1.4.1',
        'sshpk': 'npm:sshpk@1.13.1',
        'assert-plus': 'npm:assert-plus@0.2.0'
      }
    },
    'npm:har-validator@4.2.1': {
      'map': {
        'har-schema': 'npm:har-schema@1.0.5',
        'ajv': 'npm:ajv@4.11.8'
      }
    },
    'npm:tough-cookie@2.3.2': {
      'map': {
        'punycode': 'npm:punycode@1.4.1'
      }
    },
    'npm:wide-align@1.1.2': {
      'map': {
        'string-width': 'npm:string-width@1.0.2'
      }
    },
    'npm:mime-types@2.1.16': {
      'map': {
        'mime-db': 'npm:mime-db@1.29.0'
      }
    },
    'npm:hawk@3.1.3': {
      'map': {
        'sntp': 'npm:sntp@1.0.9',
        'cryptiles': 'npm:cryptiles@2.0.5',
        'boom': 'npm:boom@2.10.1',
        'hoek': 'npm:hoek@2.16.3'
      }
    },
    'npm:expand-range@1.8.2': {
      'map': {
        'fill-range': 'npm:fill-range@2.2.3'
      }
    },
    'npm:sntp@1.0.9': {
      'map': {
        'hoek': 'npm:hoek@2.16.3'
      }
    },
    'npm:cryptiles@2.0.5': {
      'map': {
        'boom': 'npm:boom@2.10.1'
      }
    },
    'npm:jsprim@1.4.1': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0',
        'extsprintf': 'npm:extsprintf@1.3.0',
        'json-schema': 'npm:json-schema@0.2.3',
        'verror': 'npm:verror@1.10.0'
      }
    },
    'npm:sshpk@1.13.1': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0',
        'getpass': 'npm:getpass@0.1.7',
        'asn1': 'npm:asn1@0.2.3',
        'dashdash': 'npm:dashdash@1.14.1'
      }
    },
    'npm:fill-range@2.2.3': {
      'map': {
        'repeat-element': 'npm:repeat-element@1.1.2',
        'is-number': 'npm:is-number@2.1.0',
        'isobject': 'npm:isobject@2.1.0',
        'repeat-string': 'npm:repeat-string@1.6.1',
        'randomatic': 'npm:randomatic@1.1.7'
      }
    },
    'npm:boom@2.10.1': {
      'map': {
        'hoek': 'npm:hoek@2.16.3'
      }
    },
    'npm:combined-stream@1.0.5': {
      'map': {
        'delayed-stream': 'npm:delayed-stream@1.0.0'
      }
    },
    'npm:kind-of@3.2.2': {
      'map': {
        'is-buffer': 'npm:is-buffer@1.1.5'
      }
    },
    'npm:bcrypt-pbkdf@1.0.1': {
      'map': {
        'tweetnacl': 'npm:tweetnacl@0.14.5'
      }
    },
    'npm:ecc-jsbn@0.1.1': {
      'map': {
        'jsbn': 'npm:jsbn@0.1.1'
      }
    },
    'npm:getpass@0.1.7': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0'
      }
    },
    'npm:verror@1.10.0': {
      'map': {
        'core-util-is': 'npm:core-util-is@1.0.2',
        'assert-plus': 'npm:assert-plus@1.0.0',
        'extsprintf': 'npm:extsprintf@1.3.0'
      }
    },
    'npm:is-number@2.1.0': {
      'map': {
        'kind-of': 'npm:kind-of@3.2.2'
      }
    },
    'npm:isobject@2.1.0': {
      'map': {
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:dashdash@1.14.1': {
      'map': {
        'assert-plus': 'npm:assert-plus@1.0.0'
      }
    },
    'npm:randomatic@1.1.7': {
      'map': {
        'is-number': 'npm:is-number@3.0.0',
        'kind-of': 'npm:kind-of@4.0.0'
      }
    },
    'npm:is-number@3.0.0': {
      'map': {
        'kind-of': 'npm:kind-of@3.2.2'
      }
    },
    'npm:kind-of@4.0.0': {
      'map': {
        'is-buffer': 'npm:is-buffer@1.1.5'
      }
    },
    'npm:ajv@4.11.8': {
      'map': {
        'json-stable-stringify': 'npm:json-stable-stringify@1.0.1',
        'co': 'npm:co@4.6.0'
      }
    },
    'npm:json-stable-stringify@1.0.1': {
      'map': {
        'jsonify': 'npm:jsonify@0.0.0'
      }
    },
    'npm:tiny-slider@1.5.5': {
      'map': {
        'go-native': 'npm:go-native@1.0.0'
      }
    }
  },
  transpiler: 'plugin-babel',
  map: {
    'config': '.tmp/properties.json',
    'objectFit': 'npm:lazysizes@4.0.0-rc3/plugins/object-fit/ls.object-fit.js',
    'bcrypt-pbkdf': 'npm:bcrypt-pbkdf@1.0.1',
    'chokidar': 'npm:chokidar@1.7.0',
    'dgram': 'npm:jspm-nodelibs-dgram@0.2.0',
    'dns': 'npm:jspm-nodelibs-dns@0.2.0',
    'domain': 'npm:jspm-nodelibs-domain@0.2.0',
    'ecc-jsbn': 'npm:ecc-jsbn@0.1.1',
    'fsevents': 'npm:fsevents@1.1.2',
    'jsbn': 'npm:jsbn@0.1.1',
    'net': 'npm:jspm-nodelibs-net@0.2.0',
    'http': 'npm:jspm-nodelibs-http@0.2.0',
    'https': 'npm:jspm-nodelibs-https@0.2.0',
    'querystring': 'npm:jspm-nodelibs-querystring@0.2.0',
    'tls': 'npm:jspm-nodelibs-tls@0.2.0',
    'tty': 'npm:jspm-nodelibs-tty@0.2.0',
    'tweetnacl': 'npm:tweetnacl@0.14.5',
    'url': 'npm:jspm-nodelibs-url@0.2.0',
    'zlib': 'npm:jspm-nodelibs-zlib@0.2.0',
    'agile-player': 'github:agilecontent/agile-player@master',
    'nunjucks': 'github:mozilla/nunjucks@3.0.1',
    'lodash': 'npm:lodash@4.17.4',
    'tiny-slider': 'npm:tiny-slider@1.5.5'
  },
  meta: {
    '*.json': {
      'loader': 'json'
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'draggabilly': 'npm:draggabilly@2.1.1',
    'packery': 'npm:packery@2.1.1',
    'json': 'github:systemjs/plugin-json@0.3.0',
    'assert': 'npm:jspm-nodelibs-assert@0.2.0',
    'babel': 'npm:babel-core@6.25.0',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.0',
    'child_process': 'npm:jspm-nodelibs-child_process@0.2.0',
    'constants': 'npm:jspm-nodelibs-constants@0.2.0',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.0',
    'events': 'npm:jspm-nodelibs-events@0.2.0',
    'fs': 'npm:jspm-nodelibs-fs@0.2.0',
    'lazysizes': 'npm:lazysizes@4.0.0-rc3',
    'module': 'npm:jspm-nodelibs-module@0.2.1',
    'os': 'npm:jspm-nodelibs-os@0.2.0',
    'path': 'npm:jspm-nodelibs-path@0.2.0',
    'picturefill': 'npm:picturefill@3.0.2',
    'process': 'npm:jspm-nodelibs-process@0.2.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.0',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.0',
    'util': 'npm:jspm-nodelibs-util@0.2.0',
    'vm': 'npm:jspm-nodelibs-vm@0.2.0'
  },
  packages: {
    'npm:babel-core@6.25.0': {
      'map': {
        'lodash': 'npm:lodash@4.17.4',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-helpers': 'npm:babel-helpers@6.24.1',
        'convert-source-map': 'npm:convert-source-map@1.5.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'minimatch': 'npm:minimatch@3.0.4',
        'source-map': 'npm:source-map@0.5.6',
        'babel-generator': 'npm:babel-generator@6.25.0',
        'babel-code-frame': 'npm:babel-code-frame@6.22.0',
        'babel-template': 'npm:babel-template@6.25.0',
        'babylon': 'npm:babylon@6.17.4',
        'babel-register': 'npm:babel-register@6.24.1',
        'private': 'npm:private@0.1.7',
        'slash': 'npm:slash@1.0.0',
        'json5': 'npm:json5@0.5.1',
        'babel-types': 'npm:babel-types@6.25.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'babel-traverse': 'npm:babel-traverse@6.25.0',
        'debug': 'npm:debug@2.6.8'
      }
    },
    'npm:invariant@2.2.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1'
      }
    },
    'npm:babel-helpers@6.24.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'babel-template': 'npm:babel-template@6.25.0'
      }
    },
    'npm:babel-messages@6.23.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.23.0'
      }
    },
    'npm:babel-generator@6.25.0': {
      'map': {
        'source-map': 'npm:source-map@0.5.6',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'babel-types': 'npm:babel-types@6.25.0',
        'lodash': 'npm:lodash@4.17.4',
        'detect-indent': 'npm:detect-indent@4.0.0',
        'jsesc': 'npm:jsesc@1.3.0',
        'trim-right': 'npm:trim-right@1.0.1'
      }
    },
    'npm:babel-register@6.24.1': {
      'map': {
        'babel-core': 'npm:babel-core@6.25.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'core-js': 'npm:core-js@2.4.1',
        'lodash': 'npm:lodash@4.17.4',
        'source-map-support': 'npm:source-map-support@0.4.15',
        'home-or-tmp': 'npm:home-or-tmp@2.0.0',
        'mkdirp': 'npm:mkdirp@0.5.1'
      }
    },
    'npm:babel-template@6.25.0': {
      'map': {
        'babylon': 'npm:babylon@6.17.4',
        'babel-traverse': 'npm:babel-traverse@6.25.0',
        'babel-types': 'npm:babel-types@6.25.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'lodash': 'npm:lodash@4.17.4'
      }
    },
    'npm:babel-runtime@6.23.0': {
      'map': {
        'core-js': 'npm:core-js@2.4.1',
        'regenerator-runtime': 'npm:regenerator-runtime@0.10.5'
      }
    },
    'npm:babel-types@6.25.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'esutils': 'npm:esutils@2.0.2',
        'to-fast-properties': 'npm:to-fast-properties@1.0.3'
      }
    },
    'npm:babel-traverse@6.25.0': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.22.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'babel-types': 'npm:babel-types@6.25.0',
        'babylon': 'npm:babylon@6.17.4',
        'invariant': 'npm:invariant@2.2.2',
        'lodash': 'npm:lodash@4.17.4',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'debug': 'npm:debug@2.6.8',
        'globals': 'npm:globals@9.18.0'
      }
    },
    'npm:loose-envify@1.3.1': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.2'
      }
    },
    'npm:babel-code-frame@6.22.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.2',
        'esutils': 'npm:esutils@2.0.2',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:minimatch@3.0.4': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.8'
      }
    },
    'npm:source-map-support@0.4.15': {
      'map': {
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'npm:brace-expansion@1.1.8': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@1.0.0'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'supports-color': 'npm:supports-color@2.0.0',
        'ansi-styles': 'npm:ansi-styles@2.2.1'
      }
    },
    'npm:home-or-tmp@2.0.0': {
      'map': {
        'os-tmpdir': 'npm:os-tmpdir@1.0.2',
        'os-homedir': 'npm:os-homedir@1.0.2'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:debug@2.6.8': {
      'map': {
        'ms': 'npm:ms@2.0.0'
      }
    },
    'npm:detect-indent@4.0.0': {
      'map': {
        'repeating': 'npm:repeating@2.0.1'
      }
    },
    'npm:repeating@2.0.1': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.2'
      }
    },
    'npm:is-finite@1.0.2': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.1'
      }
    },
    'npm:readable-stream@2.3.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'isarray': 'npm:isarray@1.0.0',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'string_decoder': 'npm:string_decoder@1.0.3',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7'
      }
    },
    'npm:string_decoder@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.3.3'
      }
    },
    'npm:crypto-browserify@3.11.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-hash': 'npm:create-hash@1.1.3',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.5',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'pbkdf2': 'npm:pbkdf2@3.0.14'
      }
    },
    'npm:create-hash@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'sha.js': 'npm:sha.js@2.4.9',
        'ripemd160': 'npm:ripemd160@2.0.1'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'randombytes': 'npm:randombytes@2.0.5',
        'bn.js': 'npm:bn.js@4.11.8',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'inherits': 'npm:inherits@2.0.3',
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:randombytes@2.0.5': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:create-hmac@1.1.6': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'sha.js': 'npm:sha.js@2.4.9',
        'ripemd160': 'npm:ripemd160@2.0.1'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.1.1',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'browserify-des': 'npm:browserify-des@1.0.0'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.5',
        'bn.js': 'npm:bn.js@4.11.8',
        'miller-rabin': 'npm:miller-rabin@4.0.1'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:cipher-base@1.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'randombytes': 'npm:randombytes@2.0.5'
      }
    },
    'npm:parse-asn1@5.1.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.1.1',
        'create-hash': 'npm:create-hash@1.1.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.14',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:hash.js@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:ripemd160@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@2.0.2'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash-base@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:pbkdf2@3.0.14': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'sha.js': 'npm:sha.js@2.4.9',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'ripemd160': 'npm:ripemd160@2.0.1'
      }
    },
    'npm:sha.js@2.4.9': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'md5.js': 'npm:md5.js@1.3.4'
      }
    },
    'npm:miller-rabin@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:md5.js@1.3.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@3.0.4'
      }
    },
    'npm:hash-base@3.0.4': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'base64-js': 'npm:base64-js@1.2.1',
        'ieee754': 'npm:ieee754@1.1.8',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:packery@2.1.1': {
      'map': {
        'get-size': 'npm:get-size@2.0.2',
        'outlayer': 'npm:outlayer@2.1.1'
      }
    },
    'npm:outlayer@2.1.1': {
      'map': {
        'get-size': 'npm:get-size@2.0.2',
        'fizzy-ui-utils': 'npm:fizzy-ui-utils@2.0.5',
        'ev-emitter': 'npm:ev-emitter@1.1.1'
      }
    },
    'npm:fizzy-ui-utils@2.0.5': {
      'map': {
        'desandro-matches-selector': 'npm:desandro-matches-selector@2.0.2'
      }
    },
    'npm:draggabilly@2.1.1': {
      'map': {
        'get-size': 'npm:get-size@2.0.2',
        'unidragger': 'npm:unidragger@2.1.0'
      }
    },
    'npm:unidragger@2.1.0': {
      'map': {
        'unipointer': 'npm:unipointer@2.1.0'
      }
    },
    'npm:unipointer@2.1.0': {
      'map': {
        'ev-emitter': 'npm:ev-emitter@1.0.3'
      }
    },
    'npm:browserify-aes@1.1.1': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.4',
        'create-hash': 'npm:create-hash@1.1.3',
        'inherits': 'npm:inherits@2.0.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.0': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.1'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.0': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.0': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:jspm-nodelibs-os@0.2.0': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.0': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    }
  }
});
