SystemJS.config({
  paths: {
    "github:": "/jspm_packages/github/",
    "npm:": "/jspm_packages/npm/",
    "vendor:*": "/js/vendor/*.js",
    "app:*": "/app/*.js"
  }
});

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

!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic("2", ["3", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(['./rect'], factory);
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory($__require('3'));
    } else {
      var Packery = window.Packery = window.Packery || {};
      Packery.Packer = factory(Packery.Rect);
    }
  }(window, function factory(Rect) {
    'use strict';
    function Packer(width, height, sortDirection) {
      this.width = width || 0;
      this.height = height || 0;
      this.sortDirection = sortDirection || 'downwardLeftToRight';
      this.reset();
    }
    var proto = Packer.prototype;
    proto.reset = function() {
      this.spaces = [];
      var initialSpace = new Rect({
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      });
      this.spaces.push(initialSpace);
      this.sorter = sorters[this.sortDirection] || sorters.downwardLeftToRight;
    };
    proto.pack = function(rect) {
      for (var i = 0; i < this.spaces.length; i++) {
        var space = this.spaces[i];
        if (space.canFit(rect)) {
          this.placeInSpace(rect, space);
          break;
        }
      }
    };
    proto.columnPack = function(rect) {
      for (var i = 0; i < this.spaces.length; i++) {
        var space = this.spaces[i];
        var canFitInSpaceColumn = space.x <= rect.x && space.x + space.width >= rect.x + rect.width && space.height >= rect.height - 0.01;
        if (canFitInSpaceColumn) {
          rect.y = space.y;
          this.placed(rect);
          break;
        }
      }
    };
    proto.rowPack = function(rect) {
      for (var i = 0; i < this.spaces.length; i++) {
        var space = this.spaces[i];
        var canFitInSpaceRow = space.y <= rect.y && space.y + space.height >= rect.y + rect.height && space.width >= rect.width - 0.01;
        if (canFitInSpaceRow) {
          rect.x = space.x;
          this.placed(rect);
          break;
        }
      }
    };
    proto.placeInSpace = function(rect, space) {
      rect.x = space.x;
      rect.y = space.y;
      this.placed(rect);
    };
    proto.placed = function(rect) {
      var revisedSpaces = [];
      for (var i = 0; i < this.spaces.length; i++) {
        var space = this.spaces[i];
        var newSpaces = space.getMaximalFreeRects(rect);
        if (newSpaces) {
          revisedSpaces.push.apply(revisedSpaces, newSpaces);
        } else {
          revisedSpaces.push(space);
        }
      }
      this.spaces = revisedSpaces;
      this.mergeSortSpaces();
    };
    proto.mergeSortSpaces = function() {
      Packer.mergeRects(this.spaces);
      this.spaces.sort(this.sorter);
    };
    proto.addSpace = function(rect) {
      this.spaces.push(rect);
      this.mergeSortSpaces();
    };
    Packer.mergeRects = function(rects) {
      var i = 0;
      var rect = rects[i];
      rectLoop: while (rect) {
        var j = 0;
        var compareRect = rects[i + j];
        while (compareRect) {
          if (compareRect == rect) {
            j++;
          } else if (compareRect.contains(rect)) {
            rects.splice(i, 1);
            rect = rects[i];
            continue rectLoop;
          } else if (rect.contains(compareRect)) {
            rects.splice(i + j, 1);
          } else {
            j++;
          }
          compareRect = rects[i + j];
        }
        i++;
        rect = rects[i];
      }
      return rects;
    };
    var sorters = {
      downwardLeftToRight: function(a, b) {
        return a.y - b.y || a.x - b.x;
      },
      rightwardTopToBottom: function(a, b) {
        return a.x - b.x || a.y - b.y;
      }
    };
    return Packer;
  }));
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
      define(factory);
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory();
    } else {
      window.matchesSelector = factory();
    }
  }(window, function factory() {
    'use strict';
    var matchesMethod = (function() {
      var ElemProto = window.Element.prototype;
      if (ElemProto.matches) {
        return 'matches';
      }
      if (ElemProto.matchesSelector) {
        return 'matchesSelector';
      }
      var prefixes = ['webkit', 'moz', 'ms', 'o'];
      for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        var method = prefix + 'MatchesSelector';
        if (ElemProto[method]) {
          return method;
        }
      }
    })();
    return function matchesSelector(elem, selector) {
      return elem[matchesMethod](selector);
    };
  }));
  return module.exports;
});

$__System.registerDynamic("6", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(['desandro-matches-selector/matches-selector'], function(matchesSelector) {
        return factory(window, matchesSelector);
      });
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory(window, $__require('5'));
    } else {
      window.fizzyUIUtils = factory(window, window.matchesSelector);
    }
  }(window, function factory(window, matchesSelector) {
    'use strict';
    var utils = {};
    utils.extend = function(a, b) {
      for (var prop in b) {
        a[prop] = b[prop];
      }
      return a;
    };
    utils.modulo = function(num, div) {
      return ((num % div) + div) % div;
    };
    utils.makeArray = function(obj) {
      var ary = [];
      if (Array.isArray(obj)) {
        ary = obj;
      } else if (obj && typeof obj == 'object' && typeof obj.length == 'number') {
        for (var i = 0; i < obj.length; i++) {
          ary.push(obj[i]);
        }
      } else {
        ary.push(obj);
      }
      return ary;
    };
    utils.removeFrom = function(ary, obj) {
      var index = ary.indexOf(obj);
      if (index != -1) {
        ary.splice(index, 1);
      }
    };
    utils.getParent = function(elem, selector) {
      while (elem.parentNode && elem != document.body) {
        elem = elem.parentNode;
        if (matchesSelector(elem, selector)) {
          return elem;
        }
      }
    };
    utils.getQueryElement = function(elem) {
      if (typeof elem == 'string') {
        return document.querySelector(elem);
      }
      return elem;
    };
    utils.handleEvent = function(event) {
      var method = 'on' + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    utils.filterFindElements = function(elems, selector) {
      elems = utils.makeArray(elems);
      var ffElems = [];
      elems.forEach(function(elem) {
        if (!(elem instanceof HTMLElement)) {
          return;
        }
        if (!selector) {
          ffElems.push(elem);
          return;
        }
        if (matchesSelector(elem, selector)) {
          ffElems.push(elem);
        }
        var childElems = elem.querySelectorAll(selector);
        for (var i = 0; i < childElems.length; i++) {
          ffElems.push(childElems[i]);
        }
      });
      return ffElems;
    };
    utils.debounceMethod = function(_class, methodName, threshold) {
      var method = _class.prototype[methodName];
      var timeoutName = methodName + 'Timeout';
      _class.prototype[methodName] = function() {
        var timeout = this[timeoutName];
        if (timeout) {
          clearTimeout(timeout);
        }
        var args = arguments;
        var _this = this;
        this[timeoutName] = setTimeout(function() {
          method.apply(_this, args);
          delete _this[timeoutName];
        }, threshold || 100);
      };
    };
    utils.docReady = function(callback) {
      var readyState = document.readyState;
      if (readyState == 'complete' || readyState == 'interactive') {
        setTimeout(callback);
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    };
    utils.toDashed = function(str) {
      return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
        return $1 + '-' + $2;
      }).toLowerCase();
    };
    var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) {
      utils.docReady(function() {
        var dashedNamespace = utils.toDashed(namespace);
        var dataAttr = 'data-' + dashedNamespace;
        var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
        var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
        var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
        var dataOptionsAttr = dataAttr + '-options';
        var jQuery = window.jQuery;
        elems.forEach(function(elem) {
          var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
          var options;
          try {
            options = attr && JSON.parse(attr);
          } catch (error) {
            if (console) {
              console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
            }
            return;
          }
          var instance = new WidgetClass(elem, options);
          if (jQuery) {
            jQuery.data(elem, namespace, instance);
          }
        });
      });
    };
    return utils;
  }));
  return module.exports;
});

$__System.registerDynamic("7", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(global, factory) {
    if (typeof define == 'function' && define.amd) {
      define(factory);
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory();
    } else {
      global.EvEmitter = factory();
    }
  }(typeof window != 'undefined' ? window : this, function() {
    "use strict";
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
      if (!eventName || !listener) {
        return;
      }
      var events = this._events = this._events || {};
      var listeners = events[eventName] = events[eventName] || [];
      if (listeners.indexOf(listener) == -1) {
        listeners.push(listener);
      }
      return this;
    };
    proto.once = function(eventName, listener) {
      if (!eventName || !listener) {
        return;
      }
      this.on(eventName, listener);
      var onceEvents = this._onceEvents = this._onceEvents || {};
      var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
      onceListeners[listener] = true;
      return this;
    };
    proto.off = function(eventName, listener) {
      var listeners = this._events && this._events[eventName];
      if (!listeners || !listeners.length) {
        return;
      }
      var index = listeners.indexOf(listener);
      if (index != -1) {
        listeners.splice(index, 1);
      }
      return this;
    };
    proto.emitEvent = function(eventName, args) {
      var listeners = this._events && this._events[eventName];
      if (!listeners || !listeners.length) {
        return;
      }
      listeners = listeners.slice(0);
      args = args || [];
      var onceListeners = this._onceEvents && this._onceEvents[eventName];
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        var isOnce = onceListeners && onceListeners[listener];
        if (isOnce) {
          this.off(eventName, listener);
          delete onceListeners[listener];
        }
        listener.apply(this, args);
      }
      return this;
    };
    proto.allOff = function() {
      delete this._events;
      delete this._onceEvents;
    };
    return EvEmitter;
  }));
  return module.exports;
});

$__System.registerDynamic("8", ["7", "9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory($__require('7'), $__require('9'));
    } else {
      window.Outlayer = {};
      window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
    }
  }(window, function factory(EvEmitter, getSize) {
    'use strict';
    function isEmptyObj(obj) {
      for (var prop in obj) {
        return false;
      }
      prop = null;
      return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var transitionEndEvent = {
      WebkitTransition: 'webkitTransitionEnd',
      transition: 'transitionend'
    }[transitionProperty];
    var vendorProperties = {
      transform: transformProperty,
      transition: transitionProperty,
      transitionDuration: transitionProperty + 'Duration',
      transitionProperty: transitionProperty + 'Property',
      transitionDelay: transitionProperty + 'Delay'
    };
    function Item(element, layout) {
      if (!element) {
        return;
      }
      this.element = element;
      this.layout = layout;
      this.position = {
        x: 0,
        y: 0
      };
      this._create();
    }
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      };
      this.css({position: 'absolute'});
    };
    proto.handleEvent = function(event) {
      var method = 'on' + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    proto.getSize = function() {
      this.size = getSize(this.element);
    };
    proto.css = function(style) {
      var elemStyle = this.element.style;
      for (var prop in style) {
        var supportedProp = vendorProperties[prop] || prop;
        elemStyle[supportedProp] = style[prop];
      }
    };
    proto.getPosition = function() {
      var style = getComputedStyle(this.element);
      var isOriginLeft = this.layout._getOption('originLeft');
      var isOriginTop = this.layout._getOption('originTop');
      var xValue = style[isOriginLeft ? 'left' : 'right'];
      var yValue = style[isOriginTop ? 'top' : 'bottom'];
      var x = parseFloat(xValue);
      var y = parseFloat(yValue);
      var layoutSize = this.layout.size;
      if (xValue.indexOf('%') != -1) {
        x = (x / 100) * layoutSize.width;
      }
      if (yValue.indexOf('%') != -1) {
        y = (y / 100) * layoutSize.height;
      }
      x = isNaN(x) ? 0 : x;
      y = isNaN(y) ? 0 : y;
      x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
      y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
      this.position.x = x;
      this.position.y = y;
    };
    proto.layoutPosition = function() {
      var layoutSize = this.layout.size;
      var style = {};
      var isOriginLeft = this.layout._getOption('originLeft');
      var isOriginTop = this.layout._getOption('originTop');
      var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
      var xProperty = isOriginLeft ? 'left' : 'right';
      var xResetProperty = isOriginLeft ? 'right' : 'left';
      var x = this.position.x + layoutSize[xPadding];
      style[xProperty] = this.getXValue(x);
      style[xResetProperty] = '';
      var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
      var yProperty = isOriginTop ? 'top' : 'bottom';
      var yResetProperty = isOriginTop ? 'bottom' : 'top';
      var y = this.position.y + layoutSize[yPadding];
      style[yProperty] = this.getYValue(y);
      style[yResetProperty] = '';
      this.css(style);
      this.emitEvent('layout', [this]);
    };
    proto.getXValue = function(x) {
      var isHorizontal = this.layout._getOption('horizontal');
      return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
    };
    proto.getYValue = function(y) {
      var isHorizontal = this.layout._getOption('horizontal');
      return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
    };
    proto._transitionTo = function(x, y) {
      this.getPosition();
      var curX = this.position.x;
      var curY = this.position.y;
      var didNotMove = x == this.position.x && y == this.position.y;
      this.setPosition(x, y);
      if (didNotMove && !this.isTransitioning) {
        this.layoutPosition();
        return;
      }
      var transX = x - curX;
      var transY = y - curY;
      var transitionStyle = {};
      transitionStyle.transform = this.getTranslate(transX, transY);
      this.transition({
        to: transitionStyle,
        onTransitionEnd: {transform: this.layoutPosition},
        isCleaning: true
      });
    };
    proto.getTranslate = function(x, y) {
      var isOriginLeft = this.layout._getOption('originLeft');
      var isOriginTop = this.layout._getOption('originTop');
      x = isOriginLeft ? x : -x;
      y = isOriginTop ? y : -y;
      return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    };
    proto.goTo = function(x, y) {
      this.setPosition(x, y);
      this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
      this.position.x = parseFloat(x);
      this.position.y = parseFloat(y);
    };
    proto._nonTransition = function(args) {
      this.css(args.to);
      if (args.isCleaning) {
        this._removeStyles(args.to);
      }
      for (var prop in args.onTransitionEnd) {
        args.onTransitionEnd[prop].call(this);
      }
    };
    proto.transition = function(args) {
      if (!parseFloat(this.layout.options.transitionDuration)) {
        this._nonTransition(args);
        return;
      }
      var _transition = this._transn;
      for (var prop in args.onTransitionEnd) {
        _transition.onEnd[prop] = args.onTransitionEnd[prop];
      }
      for (prop in args.to) {
        _transition.ingProperties[prop] = true;
        if (args.isCleaning) {
          _transition.clean[prop] = true;
        }
      }
      if (args.from) {
        this.css(args.from);
        var h = this.element.offsetHeight;
        h = null;
      }
      this.enableTransition(args.to);
      this.css(args.to);
      this.isTransitioning = true;
    };
    function toDashedAll(str) {
      return str.replace(/([A-Z])/g, function($1) {
        return '-' + $1.toLowerCase();
      });
    }
    var transitionProps = 'opacity,' + toDashedAll(transformProperty);
    proto.enableTransition = function() {
      if (this.isTransitioning) {
        return;
      }
      var duration = this.layout.options.transitionDuration;
      duration = typeof duration == 'number' ? duration + 'ms' : duration;
      this.css({
        transitionProperty: transitionProps,
        transitionDuration: duration,
        transitionDelay: this.staggerDelay || 0
      });
      this.element.addEventListener(transitionEndEvent, this, false);
    };
    proto.onwebkitTransitionEnd = function(event) {
      this.ontransitionend(event);
    };
    proto.onotransitionend = function(event) {
      this.ontransitionend(event);
    };
    var dashedVendorProperties = {'-webkit-transform': 'transform'};
    proto.ontransitionend = function(event) {
      if (event.target !== this.element) {
        return;
      }
      var _transition = this._transn;
      var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
      delete _transition.ingProperties[propertyName];
      if (isEmptyObj(_transition.ingProperties)) {
        this.disableTransition();
      }
      if (propertyName in _transition.clean) {
        this.element.style[event.propertyName] = '';
        delete _transition.clean[propertyName];
      }
      if (propertyName in _transition.onEnd) {
        var onTransitionEnd = _transition.onEnd[propertyName];
        onTransitionEnd.call(this);
        delete _transition.onEnd[propertyName];
      }
      this.emitEvent('transitionEnd', [this]);
    };
    proto.disableTransition = function() {
      this.removeTransitionStyles();
      this.element.removeEventListener(transitionEndEvent, this, false);
      this.isTransitioning = false;
    };
    proto._removeStyles = function(style) {
      var cleanStyle = {};
      for (var prop in style) {
        cleanStyle[prop] = '';
      }
      this.css(cleanStyle);
    };
    var cleanTransitionStyle = {
      transitionProperty: '',
      transitionDuration: '',
      transitionDelay: ''
    };
    proto.removeTransitionStyles = function() {
      this.css(cleanTransitionStyle);
    };
    proto.stagger = function(delay) {
      delay = isNaN(delay) ? 0 : delay;
      this.staggerDelay = delay + 'ms';
    };
    proto.removeElem = function() {
      this.element.parentNode.removeChild(this.element);
      this.css({display: ''});
      this.emitEvent('remove', [this]);
    };
    proto.remove = function() {
      if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
        this.removeElem();
        return;
      }
      this.once('transitionEnd', function() {
        this.removeElem();
      });
      this.hide();
    };
    proto.reveal = function() {
      delete this.isHidden;
      this.css({display: ''});
      var options = this.layout.options;
      var onTransitionEnd = {};
      var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
      onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
      this.transition({
        from: options.hiddenStyle,
        to: options.visibleStyle,
        isCleaning: true,
        onTransitionEnd: onTransitionEnd
      });
    };
    proto.onRevealTransitionEnd = function() {
      if (!this.isHidden) {
        this.emitEvent('reveal');
      }
    };
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
      var optionStyle = this.layout.options[styleProperty];
      if (optionStyle.opacity) {
        return 'opacity';
      }
      for (var prop in optionStyle) {
        return prop;
      }
    };
    proto.hide = function() {
      this.isHidden = true;
      this.css({display: ''});
      var options = this.layout.options;
      var onTransitionEnd = {};
      var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
      onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
      this.transition({
        from: options.visibleStyle,
        to: options.hiddenStyle,
        isCleaning: true,
        onTransitionEnd: onTransitionEnd
      });
    };
    proto.onHideTransitionEnd = function() {
      if (this.isHidden) {
        this.css({display: 'none'});
        this.emitEvent('hide');
      }
    };
    proto.destroy = function() {
      this.css({
        position: '',
        left: '',
        right: '',
        top: '',
        bottom: '',
        transition: '',
        transform: ''
      });
    };
    return Item;
  }));
  return module.exports;
});

$__System.registerDynamic("a", ["7", "9", "6", "8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
      define(['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
        return factory(window, EvEmitter, getSize, utils, Item);
      });
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory(window, $__require('7'), $__require('9'), $__require('6'), $__require('8'));
    } else {
      window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
    }
  }(window, function factory(window, EvEmitter, getSize, utils, Item) {
    'use strict';
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};
    var GUID = 0;
    var instances = {};
    function Outlayer(element, options) {
      var queryElement = utils.getQueryElement(element);
      if (!queryElement) {
        if (console) {
          console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
        }
        return;
      }
      this.element = queryElement;
      if (jQuery) {
        this.$element = jQuery(this.element);
      }
      this.options = utils.extend({}, this.constructor.defaults);
      this.option(options);
      var id = ++GUID;
      this.element.outlayerGUID = id;
      instances[id] = this;
      this._create();
      var isInitLayout = this._getOption('initLayout');
      if (isInitLayout) {
        this.layout();
      }
    }
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = {
      containerStyle: {position: 'relative'},
      initLayout: true,
      originLeft: true,
      originTop: true,
      resize: true,
      resizeContainer: true,
      transitionDuration: '0.4s',
      hiddenStyle: {
        opacity: 0,
        transform: 'scale(0.001)'
      },
      visibleStyle: {
        opacity: 1,
        transform: 'scale(1)'
      }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
      utils.extend(this.options, opts);
    };
    proto._getOption = function(option) {
      var oldOption = this.constructor.compatOptions[option];
      return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
      initLayout: 'isInitLayout',
      horizontal: 'isHorizontal',
      layoutInstant: 'isLayoutInstant',
      originLeft: 'isOriginLeft',
      originTop: 'isOriginTop',
      resize: 'isResizeBound',
      resizeContainer: 'isResizingContainer'
    };
    proto._create = function() {
      this.reloadItems();
      this.stamps = [];
      this.stamp(this.options.stamp);
      utils.extend(this.element.style, this.options.containerStyle);
      var canBindResize = this._getOption('resize');
      if (canBindResize) {
        this.bindResize();
      }
    };
    proto.reloadItems = function() {
      this.items = this._itemize(this.element.children);
    };
    proto._itemize = function(elems) {
      var itemElems = this._filterFindItemElements(elems);
      var Item = this.constructor.Item;
      var items = [];
      for (var i = 0; i < itemElems.length; i++) {
        var elem = itemElems[i];
        var item = new Item(elem, this);
        items.push(item);
      }
      return items;
    };
    proto._filterFindItemElements = function(elems) {
      return utils.filterFindElements(elems, this.options.itemSelector);
    };
    proto.getItemElements = function() {
      return this.items.map(function(item) {
        return item.element;
      });
    };
    proto.layout = function() {
      this._resetLayout();
      this._manageStamps();
      var layoutInstant = this._getOption('layoutInstant');
      var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
      this.layoutItems(this.items, isInstant);
      this._isLayoutInited = true;
    };
    proto._init = proto.layout;
    proto._resetLayout = function() {
      this.getSize();
    };
    proto.getSize = function() {
      this.size = getSize(this.element);
    };
    proto._getMeasurement = function(measurement, size) {
      var option = this.options[measurement];
      var elem;
      if (!option) {
        this[measurement] = 0;
      } else {
        if (typeof option == 'string') {
          elem = this.element.querySelector(option);
        } else if (option instanceof HTMLElement) {
          elem = option;
        }
        this[measurement] = elem ? getSize(elem)[size] : option;
      }
    };
    proto.layoutItems = function(items, isInstant) {
      items = this._getItemsForLayout(items);
      this._layoutItems(items, isInstant);
      this._postLayout();
    };
    proto._getItemsForLayout = function(items) {
      return items.filter(function(item) {
        return !item.isIgnored;
      });
    };
    proto._layoutItems = function(items, isInstant) {
      this._emitCompleteOnItems('layout', items);
      if (!items || !items.length) {
        return;
      }
      var queue = [];
      items.forEach(function(item) {
        var position = this._getItemLayoutPosition(item);
        position.item = item;
        position.isInstant = isInstant || item.isLayoutInstant;
        queue.push(position);
      }, this);
      this._processLayoutQueue(queue);
    };
    proto._getItemLayoutPosition = function() {
      return {
        x: 0,
        y: 0
      };
    };
    proto._processLayoutQueue = function(queue) {
      this.updateStagger();
      queue.forEach(function(obj, i) {
        this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
      }, this);
    };
    proto.updateStagger = function() {
      var stagger = this.options.stagger;
      if (stagger === null || stagger === undefined) {
        this.stagger = 0;
        return;
      }
      this.stagger = getMilliseconds(stagger);
      return this.stagger;
    };
    proto._positionItem = function(item, x, y, isInstant, i) {
      if (isInstant) {
        item.goTo(x, y);
      } else {
        item.stagger(i * this.stagger);
        item.moveTo(x, y);
      }
    };
    proto._postLayout = function() {
      this.resizeContainer();
    };
    proto.resizeContainer = function() {
      var isResizingContainer = this._getOption('resizeContainer');
      if (!isResizingContainer) {
        return;
      }
      var size = this._getContainerSize();
      if (size) {
        this._setContainerMeasure(size.width, true);
        this._setContainerMeasure(size.height, false);
      }
    };
    proto._getContainerSize = noop;
    proto._setContainerMeasure = function(measure, isWidth) {
      if (measure === undefined) {
        return;
      }
      var elemSize = this.size;
      if (elemSize.isBorderBox) {
        measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
      }
      measure = Math.max(measure, 0);
      this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
    };
    proto._emitCompleteOnItems = function(eventName, items) {
      var _this = this;
      function onComplete() {
        _this.dispatchEvent(eventName + 'Complete', null, [items]);
      }
      var count = items.length;
      if (!items || !count) {
        onComplete();
        return;
      }
      var doneCount = 0;
      function tick() {
        doneCount++;
        if (doneCount == count) {
          onComplete();
        }
      }
      items.forEach(function(item) {
        item.once(eventName, tick);
      });
    };
    proto.dispatchEvent = function(type, event, args) {
      var emitArgs = event ? [event].concat(args) : args;
      this.emitEvent(type, emitArgs);
      if (jQuery) {
        this.$element = this.$element || jQuery(this.element);
        if (event) {
          var $event = jQuery.Event(event);
          $event.type = type;
          this.$element.trigger($event, args);
        } else {
          this.$element.trigger(type, args);
        }
      }
    };
    proto.ignore = function(elem) {
      var item = this.getItem(elem);
      if (item) {
        item.isIgnored = true;
      }
    };
    proto.unignore = function(elem) {
      var item = this.getItem(elem);
      if (item) {
        delete item.isIgnored;
      }
    };
    proto.stamp = function(elems) {
      elems = this._find(elems);
      if (!elems) {
        return;
      }
      this.stamps = this.stamps.concat(elems);
      elems.forEach(this.ignore, this);
    };
    proto.unstamp = function(elems) {
      elems = this._find(elems);
      if (!elems) {
        return;
      }
      elems.forEach(function(elem) {
        utils.removeFrom(this.stamps, elem);
        this.unignore(elem);
      }, this);
    };
    proto._find = function(elems) {
      if (!elems) {
        return;
      }
      if (typeof elems == 'string') {
        elems = this.element.querySelectorAll(elems);
      }
      elems = utils.makeArray(elems);
      return elems;
    };
    proto._manageStamps = function() {
      if (!this.stamps || !this.stamps.length) {
        return;
      }
      this._getBoundingRect();
      this.stamps.forEach(this._manageStamp, this);
    };
    proto._getBoundingRect = function() {
      var boundingRect = this.element.getBoundingClientRect();
      var size = this.size;
      this._boundingRect = {
        left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
        top: boundingRect.top + size.paddingTop + size.borderTopWidth,
        right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
        bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
      };
    };
    proto._manageStamp = noop;
    proto._getElementOffset = function(elem) {
      var boundingRect = elem.getBoundingClientRect();
      var thisRect = this._boundingRect;
      var size = getSize(elem);
      var offset = {
        left: boundingRect.left - thisRect.left - size.marginLeft,
        top: boundingRect.top - thisRect.top - size.marginTop,
        right: thisRect.right - boundingRect.right - size.marginRight,
        bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
      };
      return offset;
    };
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
      window.addEventListener('resize', this);
      this.isResizeBound = true;
    };
    proto.unbindResize = function() {
      window.removeEventListener('resize', this);
      this.isResizeBound = false;
    };
    proto.onresize = function() {
      this.resize();
    };
    utils.debounceMethod(Outlayer, 'onresize', 100);
    proto.resize = function() {
      if (!this.isResizeBound || !this.needsResizeLayout()) {
        return;
      }
      this.layout();
    };
    proto.needsResizeLayout = function() {
      var size = getSize(this.element);
      var hasSizes = this.size && size;
      return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    proto.addItems = function(elems) {
      var items = this._itemize(elems);
      if (items.length) {
        this.items = this.items.concat(items);
      }
      return items;
    };
    proto.appended = function(elems) {
      var items = this.addItems(elems);
      if (!items.length) {
        return;
      }
      this.layoutItems(items, true);
      this.reveal(items);
    };
    proto.prepended = function(elems) {
      var items = this._itemize(elems);
      if (!items.length) {
        return;
      }
      var previousItems = this.items.slice(0);
      this.items = items.concat(previousItems);
      this._resetLayout();
      this._manageStamps();
      this.layoutItems(items, true);
      this.reveal(items);
      this.layoutItems(previousItems);
    };
    proto.reveal = function(items) {
      this._emitCompleteOnItems('reveal', items);
      if (!items || !items.length) {
        return;
      }
      var stagger = this.updateStagger();
      items.forEach(function(item, i) {
        item.stagger(i * stagger);
        item.reveal();
      });
    };
    proto.hide = function(items) {
      this._emitCompleteOnItems('hide', items);
      if (!items || !items.length) {
        return;
      }
      var stagger = this.updateStagger();
      items.forEach(function(item, i) {
        item.stagger(i * stagger);
        item.hide();
      });
    };
    proto.revealItemElements = function(elems) {
      var items = this.getItems(elems);
      this.reveal(items);
    };
    proto.hideItemElements = function(elems) {
      var items = this.getItems(elems);
      this.hide(items);
    };
    proto.getItem = function(elem) {
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (item.element == elem) {
          return item;
        }
      }
    };
    proto.getItems = function(elems) {
      elems = utils.makeArray(elems);
      var items = [];
      elems.forEach(function(elem) {
        var item = this.getItem(elem);
        if (item) {
          items.push(item);
        }
      }, this);
      return items;
    };
    proto.remove = function(elems) {
      var removeItems = this.getItems(elems);
      this._emitCompleteOnItems('remove', removeItems);
      if (!removeItems || !removeItems.length) {
        return;
      }
      removeItems.forEach(function(item) {
        item.remove();
        utils.removeFrom(this.items, item);
      }, this);
    };
    proto.destroy = function() {
      var style = this.element.style;
      style.height = '';
      style.position = '';
      style.width = '';
      this.items.forEach(function(item) {
        item.destroy();
      });
      this.unbindResize();
      var id = this.element.outlayerGUID;
      delete instances[id];
      delete this.element.outlayerGUID;
      if (jQuery) {
        jQuery.removeData(this.element, this.constructor.namespace);
      }
    };
    Outlayer.data = function(elem) {
      elem = utils.getQueryElement(elem);
      var id = elem && elem.outlayerGUID;
      return id && instances[id];
    };
    Outlayer.create = function(namespace, options) {
      var Layout = subclass(Outlayer);
      Layout.defaults = utils.extend({}, Outlayer.defaults);
      utils.extend(Layout.defaults, options);
      Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
      Layout.namespace = namespace;
      Layout.data = Outlayer.data;
      Layout.Item = subclass(Item);
      utils.htmlInit(Layout, namespace);
      if (jQuery && jQuery.bridget) {
        jQuery.bridget(namespace, Layout);
      }
      return Layout;
    };
    function subclass(Parent) {
      function SubClass() {
        Parent.apply(this, arguments);
      }
      SubClass.prototype = Object.create(Parent.prototype);
      SubClass.prototype.constructor = SubClass;
      return SubClass;
    }
    var msUnits = {
      ms: 1,
      s: 1000
    };
    function getMilliseconds(time) {
      if (typeof time == 'number') {
        return time;
      }
      var matches = time.match(/(^\d*\.?\d*)(\w*)/);
      var num = matches && matches[1];
      var unit = matches && matches[2];
      if (!num.length) {
        return 0;
      }
      num = parseFloat(num);
      var mult = msUnits[unit] || 1;
      return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
  }));
  return module.exports;
});

$__System.registerDynamic("3", ["4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(factory);
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory();
    } else {
      window.Packery = window.Packery || {};
      window.Packery.Rect = factory();
    }
  }(window, function factory() {
    'use strict';
    function Rect(props) {
      for (var prop in Rect.defaults) {
        this[prop] = Rect.defaults[prop];
      }
      for (prop in props) {
        this[prop] = props[prop];
      }
    }
    Rect.defaults = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    var proto = Rect.prototype;
    proto.contains = function(rect) {
      var otherWidth = rect.width || 0;
      var otherHeight = rect.height || 0;
      return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + otherWidth && this.y + this.height >= rect.y + otherHeight;
    };
    proto.overlaps = function(rect) {
      var thisRight = this.x + this.width;
      var thisBottom = this.y + this.height;
      var rectRight = rect.x + rect.width;
      var rectBottom = rect.y + rect.height;
      return this.x < rectRight && thisRight > rect.x && this.y < rectBottom && thisBottom > rect.y;
    };
    proto.getMaximalFreeRects = function(rect) {
      if (!this.overlaps(rect)) {
        return false;
      }
      var freeRects = [];
      var freeRect;
      var thisRight = this.x + this.width;
      var thisBottom = this.y + this.height;
      var rectRight = rect.x + rect.width;
      var rectBottom = rect.y + rect.height;
      if (this.y < rect.y) {
        freeRect = new Rect({
          x: this.x,
          y: this.y,
          width: this.width,
          height: rect.y - this.y
        });
        freeRects.push(freeRect);
      }
      if (thisRight > rectRight) {
        freeRect = new Rect({
          x: rectRight,
          y: this.y,
          width: thisRight - rectRight,
          height: this.height
        });
        freeRects.push(freeRect);
      }
      if (thisBottom > rectBottom) {
        freeRect = new Rect({
          x: this.x,
          y: rectBottom,
          width: this.width,
          height: thisBottom - rectBottom
        });
        freeRects.push(freeRect);
      }
      if (this.x < rect.x) {
        freeRect = new Rect({
          x: this.x,
          y: this.y,
          width: rect.x - this.x,
          height: this.height
        });
        freeRects.push(freeRect);
      }
      return freeRects;
    };
    proto.canFit = function(rect) {
      return this.width >= rect.width && this.height >= rect.height;
    };
    return Rect;
  }));
  return module.exports;
});

$__System.registerDynamic("b", ["a", "3", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(['outlayer/outlayer', './rect'], factory);
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory($__require('a'), $__require('3'));
    } else {
      window.Packery.Item = factory(window.Outlayer, window.Packery.Rect);
    }
  }(window, function factory(Outlayer, Rect) {
    'use strict';
    var docElemStyle = document.documentElement.style;
    var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var Item = function PackeryItem() {
      Outlayer.Item.apply(this, arguments);
    };
    var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
    var __create = proto._create;
    proto._create = function() {
      __create.call(this);
      this.rect = new Rect();
    };
    var _moveTo = proto.moveTo;
    proto.moveTo = function(x, y) {
      var dx = Math.abs(this.position.x - x);
      var dy = Math.abs(this.position.y - y);
      var canHackGoTo = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && dx < 1 && dy < 1;
      if (canHackGoTo) {
        this.goTo(x, y);
        return;
      }
      _moveTo.apply(this, arguments);
    };
    proto.enablePlacing = function() {
      this.removeTransitionStyles();
      if (this.isTransitioning && transformProperty) {
        this.element.style[transformProperty] = 'none';
      }
      this.isTransitioning = false;
      this.getSize();
      this.layout._setRectSize(this.element, this.rect);
      this.isPlacing = true;
    };
    proto.disablePlacing = function() {
      this.isPlacing = false;
    };
    proto.removeElem = function() {
      this.element.parentNode.removeChild(this.element);
      this.layout.packer.addSpace(this.rect);
      this.emitEvent('remove', [this]);
    };
    proto.showDropPlaceholder = function() {
      var dropPlaceholder = this.dropPlaceholder;
      if (!dropPlaceholder) {
        dropPlaceholder = this.dropPlaceholder = document.createElement('div');
        dropPlaceholder.className = 'packery-drop-placeholder';
        dropPlaceholder.style.position = 'absolute';
      }
      dropPlaceholder.style.width = this.size.width + 'px';
      dropPlaceholder.style.height = this.size.height + 'px';
      this.positionDropPlaceholder();
      this.layout.element.appendChild(dropPlaceholder);
    };
    proto.positionDropPlaceholder = function() {
      this.dropPlaceholder.style[transformProperty] = 'translate(' + this.rect.x + 'px, ' + this.rect.y + 'px)';
    };
    proto.hideDropPlaceholder = function() {
      var parent = this.dropPlaceholder.parentNode;
      if (parent) {
        parent.removeChild(this.dropPlaceholder);
      }
    };
    return Item;
  }));
  return module.exports;
});

$__System.registerDynamic("c", ["9", "a", "3", "2", "b", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(['get-size/get-size', 'outlayer/outlayer', './rect', './packer', './item'], factory);
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory($__require('9'), $__require('a'), $__require('3'), $__require('2'), $__require('b'));
    } else {
      window.Packery = factory(window.getSize, window.Outlayer, window.Packery.Rect, window.Packery.Packer, window.Packery.Item);
    }
  }(window, function factory(getSize, Outlayer, Rect, Packer, Item) {
    'use strict';
    Rect.prototype.canFit = function(rect) {
      return this.width >= rect.width - 1 && this.height >= rect.height - 1;
    };
    var Packery = Outlayer.create('packery');
    Packery.Item = Item;
    var proto = Packery.prototype;
    proto._create = function() {
      Outlayer.prototype._create.call(this);
      this.packer = new Packer();
      this.shiftPacker = new Packer();
      this.isEnabled = true;
      this.dragItemCount = 0;
      var _this = this;
      this.handleDraggabilly = {
        dragStart: function() {
          _this.itemDragStart(this.element);
        },
        dragMove: function() {
          _this.itemDragMove(this.element, this.position.x, this.position.y);
        },
        dragEnd: function() {
          _this.itemDragEnd(this.element);
        }
      };
      this.handleUIDraggable = {
        start: function handleUIDraggableStart(event, ui) {
          if (!ui) {
            return;
          }
          _this.itemDragStart(event.currentTarget);
        },
        drag: function handleUIDraggableDrag(event, ui) {
          if (!ui) {
            return;
          }
          _this.itemDragMove(event.currentTarget, ui.position.left, ui.position.top);
        },
        stop: function handleUIDraggableStop(event, ui) {
          if (!ui) {
            return;
          }
          _this.itemDragEnd(event.currentTarget);
        }
      };
    };
    proto._resetLayout = function() {
      this.getSize();
      this._getMeasurements();
      var width,
          height,
          sortDirection;
      if (this._getOption('horizontal')) {
        width = Infinity;
        height = this.size.innerHeight + this.gutter;
        sortDirection = 'rightwardTopToBottom';
      } else {
        width = this.size.innerWidth + this.gutter;
        height = Infinity;
        sortDirection = 'downwardLeftToRight';
      }
      this.packer.width = this.shiftPacker.width = width;
      this.packer.height = this.shiftPacker.height = height;
      this.packer.sortDirection = this.shiftPacker.sortDirection = sortDirection;
      this.packer.reset();
      this.maxY = 0;
      this.maxX = 0;
    };
    proto._getMeasurements = function() {
      this._getMeasurement('columnWidth', 'width');
      this._getMeasurement('rowHeight', 'height');
      this._getMeasurement('gutter', 'width');
    };
    proto._getItemLayoutPosition = function(item) {
      this._setRectSize(item.element, item.rect);
      if (this.isShifting || this.dragItemCount > 0) {
        var packMethod = this._getPackMethod();
        this.packer[packMethod](item.rect);
      } else {
        this.packer.pack(item.rect);
      }
      this._setMaxXY(item.rect);
      return item.rect;
    };
    proto.shiftLayout = function() {
      this.isShifting = true;
      this.layout();
      delete this.isShifting;
    };
    proto._getPackMethod = function() {
      return this._getOption('horizontal') ? 'rowPack' : 'columnPack';
    };
    proto._setMaxXY = function(rect) {
      this.maxX = Math.max(rect.x + rect.width, this.maxX);
      this.maxY = Math.max(rect.y + rect.height, this.maxY);
    };
    proto._setRectSize = function(elem, rect) {
      var size = getSize(elem);
      var w = size.outerWidth;
      var h = size.outerHeight;
      if (w || h) {
        w = this._applyGridGutter(w, this.columnWidth);
        h = this._applyGridGutter(h, this.rowHeight);
      }
      rect.width = Math.min(w, this.packer.width);
      rect.height = Math.min(h, this.packer.height);
    };
    proto._applyGridGutter = function(measurement, gridSize) {
      if (!gridSize) {
        return measurement + this.gutter;
      }
      gridSize += this.gutter;
      var remainder = measurement % gridSize;
      var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
      measurement = Math[mathMethod](measurement / gridSize) * gridSize;
      return measurement;
    };
    proto._getContainerSize = function() {
      if (this._getOption('horizontal')) {
        return {width: this.maxX - this.gutter};
      } else {
        return {height: this.maxY - this.gutter};
      }
    };
    proto._manageStamp = function(elem) {
      var item = this.getItem(elem);
      var rect;
      if (item && item.isPlacing) {
        rect = item.rect;
      } else {
        var offset = this._getElementOffset(elem);
        rect = new Rect({
          x: this._getOption('originLeft') ? offset.left : offset.right,
          y: this._getOption('originTop') ? offset.top : offset.bottom
        });
      }
      this._setRectSize(elem, rect);
      this.packer.placed(rect);
      this._setMaxXY(rect);
    };
    function verticalSorter(a, b) {
      return a.position.y - b.position.y || a.position.x - b.position.x;
    }
    function horizontalSorter(a, b) {
      return a.position.x - b.position.x || a.position.y - b.position.y;
    }
    proto.sortItemsByPosition = function() {
      var sorter = this._getOption('horizontal') ? horizontalSorter : verticalSorter;
      this.items.sort(sorter);
    };
    proto.fit = function(elem, x, y) {
      var item = this.getItem(elem);
      if (!item) {
        return;
      }
      this.stamp(item.element);
      item.enablePlacing();
      this.updateShiftTargets(item);
      x = x === undefined ? item.rect.x : x;
      y = y === undefined ? item.rect.y : y;
      this.shift(item, x, y);
      this._bindFitEvents(item);
      item.moveTo(item.rect.x, item.rect.y);
      this.shiftLayout();
      this.unstamp(item.element);
      this.sortItemsByPosition();
      item.disablePlacing();
    };
    proto._bindFitEvents = function(item) {
      var _this = this;
      var ticks = 0;
      function onLayout() {
        ticks++;
        if (ticks != 2) {
          return;
        }
        _this.dispatchEvent('fitComplete', null, [item]);
      }
      item.once('layout', onLayout);
      this.once('layoutComplete', onLayout);
    };
    proto.resize = function() {
      if (!this.isResizeBound || !this.needsResizeLayout()) {
        return;
      }
      if (this.options.shiftPercentResize) {
        this.resizeShiftPercentLayout();
      } else {
        this.layout();
      }
    };
    proto.needsResizeLayout = function() {
      var size = getSize(this.element);
      var innerSize = this._getOption('horizontal') ? 'innerHeight' : 'innerWidth';
      return size[innerSize] != this.size[innerSize];
    };
    proto.resizeShiftPercentLayout = function() {
      var items = this._getItemsForLayout(this.items);
      var isHorizontal = this._getOption('horizontal');
      var coord = isHorizontal ? 'y' : 'x';
      var measure = isHorizontal ? 'height' : 'width';
      var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
      var innerSize = isHorizontal ? 'innerHeight' : 'innerWidth';
      var previousSegment = this[segmentName];
      previousSegment = previousSegment && previousSegment + this.gutter;
      if (previousSegment) {
        this._getMeasurements();
        var currentSegment = this[segmentName] + this.gutter;
        items.forEach(function(item) {
          var seg = Math.round(item.rect[coord] / previousSegment);
          item.rect[coord] = seg * currentSegment;
        });
      } else {
        var currentSize = getSize(this.element)[innerSize] + this.gutter;
        var previousSize = this.packer[measure];
        items.forEach(function(item) {
          item.rect[coord] = (item.rect[coord] / previousSize) * currentSize;
        });
      }
      this.shiftLayout();
    };
    proto.itemDragStart = function(elem) {
      if (!this.isEnabled) {
        return;
      }
      this.stamp(elem);
      var item = this.getItem(elem);
      if (!item) {
        return;
      }
      item.enablePlacing();
      item.showDropPlaceholder();
      this.dragItemCount++;
      this.updateShiftTargets(item);
    };
    proto.updateShiftTargets = function(dropItem) {
      this.shiftPacker.reset();
      this._getBoundingRect();
      var isOriginLeft = this._getOption('originLeft');
      var isOriginTop = this._getOption('originTop');
      this.stamps.forEach(function(stamp) {
        var item = this.getItem(stamp);
        if (item && item.isPlacing) {
          return;
        }
        var offset = this._getElementOffset(stamp);
        var rect = new Rect({
          x: isOriginLeft ? offset.left : offset.right,
          y: isOriginTop ? offset.top : offset.bottom
        });
        this._setRectSize(stamp, rect);
        this.shiftPacker.placed(rect);
      }, this);
      var isHorizontal = this._getOption('horizontal');
      var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
      var measure = isHorizontal ? 'height' : 'width';
      this.shiftTargetKeys = [];
      this.shiftTargets = [];
      var boundsSize;
      var segment = this[segmentName];
      segment = segment && segment + this.gutter;
      if (segment) {
        var segmentSpan = Math.ceil(dropItem.rect[measure] / segment);
        var segs = Math.floor((this.shiftPacker[measure] + this.gutter) / segment);
        boundsSize = (segs - segmentSpan) * segment;
        for (var i = 0; i < segs; i++) {
          var initialX = isHorizontal ? 0 : i * segment;
          var initialY = isHorizontal ? i * segment : 0;
          this._addShiftTarget(initialX, initialY, boundsSize);
        }
      } else {
        boundsSize = (this.shiftPacker[measure] + this.gutter) - dropItem.rect[measure];
        this._addShiftTarget(0, 0, boundsSize);
      }
      var items = this._getItemsForLayout(this.items);
      var packMethod = this._getPackMethod();
      items.forEach(function(item) {
        var rect = item.rect;
        this._setRectSize(item.element, rect);
        this.shiftPacker[packMethod](rect);
        this._addShiftTarget(rect.x, rect.y, boundsSize);
        var cornerX = isHorizontal ? rect.x + rect.width : rect.x;
        var cornerY = isHorizontal ? rect.y : rect.y + rect.height;
        this._addShiftTarget(cornerX, cornerY, boundsSize);
        if (segment) {
          var segSpan = Math.round(rect[measure] / segment);
          for (var i = 1; i < segSpan; i++) {
            var segX = isHorizontal ? cornerX : rect.x + segment * i;
            var segY = isHorizontal ? rect.y + segment * i : cornerY;
            this._addShiftTarget(segX, segY, boundsSize);
          }
        }
      }, this);
    };
    proto._addShiftTarget = function(x, y, boundsSize) {
      var checkCoord = this._getOption('horizontal') ? y : x;
      if (checkCoord !== 0 && checkCoord > boundsSize) {
        return;
      }
      var key = x + ',' + y;
      var hasKey = this.shiftTargetKeys.indexOf(key) != -1;
      if (hasKey) {
        return;
      }
      this.shiftTargetKeys.push(key);
      this.shiftTargets.push({
        x: x,
        y: y
      });
    };
    proto.shift = function(item, x, y) {
      var shiftPosition;
      var minDistance = Infinity;
      var position = {
        x: x,
        y: y
      };
      this.shiftTargets.forEach(function(target) {
        var distance = getDistance(target, position);
        if (distance < minDistance) {
          shiftPosition = target;
          minDistance = distance;
        }
      });
      item.rect.x = shiftPosition.x;
      item.rect.y = shiftPosition.y;
    };
    function getDistance(a, b) {
      var dx = b.x - a.x;
      var dy = b.y - a.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    var DRAG_THROTTLE_TIME = 120;
    proto.itemDragMove = function(elem, x, y) {
      var item = this.isEnabled && this.getItem(elem);
      if (!item) {
        return;
      }
      x -= this.size.paddingLeft;
      y -= this.size.paddingTop;
      var _this = this;
      function onDrag() {
        _this.shift(item, x, y);
        item.positionDropPlaceholder();
        _this.layout();
      }
      var now = new Date();
      if (this._itemDragTime && now - this._itemDragTime < DRAG_THROTTLE_TIME) {
        clearTimeout(this.dragTimeout);
        this.dragTimeout = setTimeout(onDrag, DRAG_THROTTLE_TIME);
      } else {
        onDrag();
        this._itemDragTime = now;
      }
    };
    proto.itemDragEnd = function(elem) {
      var item = this.isEnabled && this.getItem(elem);
      if (!item) {
        return;
      }
      clearTimeout(this.dragTimeout);
      item.element.classList.add('is-positioning-post-drag');
      var completeCount = 0;
      var _this = this;
      function onDragEndLayoutComplete() {
        completeCount++;
        if (completeCount != 2) {
          return;
        }
        item.element.classList.remove('is-positioning-post-drag');
        item.hideDropPlaceholder();
        _this.dispatchEvent('dragItemPositioned', null, [item]);
      }
      item.once('layout', onDragEndLayoutComplete);
      this.once('layoutComplete', onDragEndLayoutComplete);
      item.moveTo(item.rect.x, item.rect.y);
      this.layout();
      this.dragItemCount = Math.max(0, this.dragItemCount - 1);
      this.sortItemsByPosition();
      item.disablePlacing();
      this.unstamp(item.element);
    };
    proto.bindDraggabillyEvents = function(draggie) {
      this._bindDraggabillyEvents(draggie, 'on');
    };
    proto.unbindDraggabillyEvents = function(draggie) {
      this._bindDraggabillyEvents(draggie, 'off');
    };
    proto._bindDraggabillyEvents = function(draggie, method) {
      var handlers = this.handleDraggabilly;
      draggie[method]('dragStart', handlers.dragStart);
      draggie[method]('dragMove', handlers.dragMove);
      draggie[method]('dragEnd', handlers.dragEnd);
    };
    proto.bindUIDraggableEvents = function($elems) {
      this._bindUIDraggableEvents($elems, 'on');
    };
    proto.unbindUIDraggableEvents = function($elems) {
      this._bindUIDraggableEvents($elems, 'off');
    };
    proto._bindUIDraggableEvents = function($elems, method) {
      var handlers = this.handleUIDraggable;
      $elems[method]('dragstart', handlers.start)[method]('drag', handlers.drag)[method]('dragstop', handlers.stop);
    };
    var _destroy = proto.destroy;
    proto.destroy = function() {
      _destroy.apply(this, arguments);
      this.isEnabled = false;
    };
    Packery.Rect = Rect;
    Packery.Packer = Packer;
    return Packery;
  }));
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
      define(function() {
        return factory();
      });
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory();
    } else {
      window.getSize = factory();
    }
  })(window, function factory() {
    'use strict';
    function getStyleSize(value) {
      var num = parseFloat(value);
      var isValid = value.indexOf('%') == -1 && !isNaN(num);
      return isValid && num;
    }
    function noop() {}
    var logError = typeof console == 'undefined' ? noop : function(message) {
      console.error(message);
    };
    var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
    var measurementsLength = measurements.length;
    function getZeroSize() {
      var size = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      };
      for (var i = 0; i < measurementsLength; i++) {
        var measurement = measurements[i];
        size[measurement] = 0;
      }
      return size;
    }
    function getStyle(elem) {
      var style = getComputedStyle(elem);
      if (!style) {
        logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See http://bit.ly/getsizebug1');
      }
      return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;
    function setup() {
      if (isSetup) {
        return;
      }
      isSetup = true;
      var div = document.createElement('div');
      div.style.width = '200px';
      div.style.padding = '1px 2px 3px 4px';
      div.style.borderStyle = 'solid';
      div.style.borderWidth = '1px 2px 3px 4px';
      div.style.boxSizing = 'border-box';
      var body = document.body || document.documentElement;
      body.appendChild(div);
      var style = getStyle(div);
      getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize(style.width) == 200;
      body.removeChild(div);
    }
    function getSize(elem) {
      setup();
      if (typeof elem == 'string') {
        elem = document.querySelector(elem);
      }
      if (!elem || typeof elem != 'object' || !elem.nodeType) {
        return;
      }
      var style = getStyle(elem);
      if (style.display == 'none') {
        return getZeroSize();
      }
      var size = {};
      size.width = elem.offsetWidth;
      size.height = elem.offsetHeight;
      var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
      for (var i = 0; i < measurementsLength; i++) {
        var measurement = measurements[i];
        var value = style[measurement];
        var num = parseFloat(value);
        size[measurement] = !isNaN(num) ? num : 0;
      }
      var paddingWidth = size.paddingLeft + size.paddingRight;
      var paddingHeight = size.paddingTop + size.paddingBottom;
      var marginWidth = size.marginLeft + size.marginRight;
      var marginHeight = size.marginTop + size.marginBottom;
      var borderWidth = size.borderLeftWidth + size.borderRightWidth;
      var borderHeight = size.borderTopWidth + size.borderBottomWidth;
      var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
      var styleWidth = getStyleSize(style.width);
      if (styleWidth !== false) {
        size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
      }
      var styleHeight = getStyleSize(style.height);
      if (styleHeight !== false) {
        size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
      }
      size.innerWidth = size.width - (paddingWidth + borderWidth);
      size.innerHeight = size.height - (paddingHeight + borderHeight);
      size.outerWidth = size.width + marginWidth;
      size.outerHeight = size.height + marginHeight;
      return size;
    }
    return getSize;
  });
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(global, factory) {
    if (typeof define == 'function' && define.amd) {
      define(factory);
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory();
    } else {
      global.EvEmitter = factory();
    }
  }(typeof window != 'undefined' ? window : this, function() {
    "use strict";
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
      if (!eventName || !listener) {
        return;
      }
      var events = this._events = this._events || {};
      var listeners = events[eventName] = events[eventName] || [];
      if (listeners.indexOf(listener) == -1) {
        listeners.push(listener);
      }
      return this;
    };
    proto.once = function(eventName, listener) {
      if (!eventName || !listener) {
        return;
      }
      this.on(eventName, listener);
      var onceEvents = this._onceEvents = this._onceEvents || {};
      var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
      onceListeners[listener] = true;
      return this;
    };
    proto.off = function(eventName, listener) {
      var listeners = this._events && this._events[eventName];
      if (!listeners || !listeners.length) {
        return;
      }
      var index = listeners.indexOf(listener);
      if (index != -1) {
        listeners.splice(index, 1);
      }
      return this;
    };
    proto.emitEvent = function(eventName, args) {
      var listeners = this._events && this._events[eventName];
      if (!listeners || !listeners.length) {
        return;
      }
      var i = 0;
      var listener = listeners[i];
      args = args || [];
      var onceListeners = this._onceEvents && this._onceEvents[eventName];
      while (listener) {
        var isOnce = onceListeners && onceListeners[listener];
        if (isOnce) {
          this.off(eventName, listener);
          delete onceListeners[listener];
        }
        listener.apply(this, args);
        i += isOnce ? 0 : 1;
        listener = listeners[i];
      }
      return this;
    };
    return EvEmitter;
  }));
  return module.exports;
});

$__System.registerDynamic("e", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(['ev-emitter/ev-emitter'], function(EvEmitter) {
        return factory(window, EvEmitter);
      });
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory(window, $__require('d'));
    } else {
      window.Unipointer = factory(window, window.EvEmitter);
    }
  }(window, function factory(window, EvEmitter) {
    'use strict';
    function noop() {}
    function Unipointer() {}
    var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);
    proto.bindStartEvent = function(elem) {
      this._bindStartEvent(elem, true);
    };
    proto.unbindStartEvent = function(elem) {
      this._bindStartEvent(elem, false);
    };
    proto._bindStartEvent = function(elem, isBind) {
      isBind = isBind === undefined ? true : !!isBind;
      var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
      if (window.navigator.pointerEnabled) {
        elem[bindMethod]('pointerdown', this);
      } else if (window.navigator.msPointerEnabled) {
        elem[bindMethod]('MSPointerDown', this);
      } else {
        elem[bindMethod]('mousedown', this);
        elem[bindMethod]('touchstart', this);
      }
    };
    proto.handleEvent = function(event) {
      var method = 'on' + event.type;
      if (this[method]) {
        this[method](event);
      }
    };
    proto.getTouch = function(touches) {
      for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        if (touch.identifier == this.pointerIdentifier) {
          return touch;
        }
      }
    };
    proto.onmousedown = function(event) {
      var button = event.button;
      if (button && (button !== 0 && button !== 1)) {
        return;
      }
      this._pointerDown(event, event);
    };
    proto.ontouchstart = function(event) {
      this._pointerDown(event, event.changedTouches[0]);
    };
    proto.onMSPointerDown = proto.onpointerdown = function(event) {
      this._pointerDown(event, event);
    };
    proto._pointerDown = function(event, pointer) {
      if (this.isPointerDown) {
        return;
      }
      this.isPointerDown = true;
      this.pointerIdentifier = pointer.pointerId !== undefined ? pointer.pointerId : pointer.identifier;
      this.pointerDown(event, pointer);
    };
    proto.pointerDown = function(event, pointer) {
      this._bindPostStartEvents(event);
      this.emitEvent('pointerDown', [event, pointer]);
    };
    var postStartEvents = {
      mousedown: ['mousemove', 'mouseup'],
      touchstart: ['touchmove', 'touchend', 'touchcancel'],
      pointerdown: ['pointermove', 'pointerup', 'pointercancel'],
      MSPointerDown: ['MSPointerMove', 'MSPointerUp', 'MSPointerCancel']
    };
    proto._bindPostStartEvents = function(event) {
      if (!event) {
        return;
      }
      var events = postStartEvents[event.type];
      events.forEach(function(eventName) {
        window.addEventListener(eventName, this);
      }, this);
      this._boundPointerEvents = events;
    };
    proto._unbindPostStartEvents = function() {
      if (!this._boundPointerEvents) {
        return;
      }
      this._boundPointerEvents.forEach(function(eventName) {
        window.removeEventListener(eventName, this);
      }, this);
      delete this._boundPointerEvents;
    };
    proto.onmousemove = function(event) {
      this._pointerMove(event, event);
    };
    proto.onMSPointerMove = proto.onpointermove = function(event) {
      if (event.pointerId == this.pointerIdentifier) {
        this._pointerMove(event, event);
      }
    };
    proto.ontouchmove = function(event) {
      var touch = this.getTouch(event.changedTouches);
      if (touch) {
        this._pointerMove(event, touch);
      }
    };
    proto._pointerMove = function(event, pointer) {
      this.pointerMove(event, pointer);
    };
    proto.pointerMove = function(event, pointer) {
      this.emitEvent('pointerMove', [event, pointer]);
    };
    proto.onmouseup = function(event) {
      this._pointerUp(event, event);
    };
    proto.onMSPointerUp = proto.onpointerup = function(event) {
      if (event.pointerId == this.pointerIdentifier) {
        this._pointerUp(event, event);
      }
    };
    proto.ontouchend = function(event) {
      var touch = this.getTouch(event.changedTouches);
      if (touch) {
        this._pointerUp(event, touch);
      }
    };
    proto._pointerUp = function(event, pointer) {
      this._pointerDone();
      this.pointerUp(event, pointer);
    };
    proto.pointerUp = function(event, pointer) {
      this.emitEvent('pointerUp', [event, pointer]);
    };
    proto._pointerDone = function() {
      this.isPointerDown = false;
      delete this.pointerIdentifier;
      this._unbindPostStartEvents();
      this.pointerDone();
    };
    proto.pointerDone = noop;
    proto.onMSPointerCancel = proto.onpointercancel = function(event) {
      if (event.pointerId == this.pointerIdentifier) {
        this._pointerCancel(event, event);
      }
    };
    proto.ontouchcancel = function(event) {
      var touch = this.getTouch(event.changedTouches);
      if (touch) {
        this._pointerCancel(event, touch);
      }
    };
    proto._pointerCancel = function(event, pointer) {
      this._pointerDone();
      this.pointerCancel(event, pointer);
    };
    proto.pointerCancel = function(event, pointer) {
      this.emitEvent('pointerCancel', [event, pointer]);
    };
    Unipointer.getPointerPoint = function(pointer) {
      return {
        x: pointer.pageX,
        y: pointer.pageY
      };
    };
    return Unipointer;
  }));
  return module.exports;
});

$__System.registerDynamic("f", ["e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(['unipointer/unipointer'], function(Unipointer) {
        return factory(window, Unipointer);
      });
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory(window, $__require('e'));
    } else {
      window.Unidragger = factory(window, window.Unipointer);
    }
  }(window, function factory(window, Unipointer) {
    'use strict';
    function noop() {}
    function Unidragger() {}
    var proto = Unidragger.prototype = Object.create(Unipointer.prototype);
    proto.bindHandles = function() {
      this._bindHandles(true);
    };
    proto.unbindHandles = function() {
      this._bindHandles(false);
    };
    var navigator = window.navigator;
    proto._bindHandles = function(isBind) {
      isBind = isBind === undefined ? true : !!isBind;
      var binderExtra;
      if (navigator.pointerEnabled) {
        binderExtra = function(handle) {
          handle.style.touchAction = isBind ? 'none' : '';
        };
      } else if (navigator.msPointerEnabled) {
        binderExtra = function(handle) {
          handle.style.msTouchAction = isBind ? 'none' : '';
        };
      } else {
        binderExtra = noop;
      }
      var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
      for (var i = 0; i < this.handles.length; i++) {
        var handle = this.handles[i];
        this._bindStartEvent(handle, isBind);
        binderExtra(handle);
        handle[bindMethod]('click', this);
      }
    };
    proto.pointerDown = function(event, pointer) {
      if (event.target.nodeName == 'INPUT' && event.target.type == 'range') {
        this.isPointerDown = false;
        delete this.pointerIdentifier;
        return;
      }
      this._dragPointerDown(event, pointer);
      var focused = document.activeElement;
      if (focused && focused.blur) {
        focused.blur();
      }
      this._bindPostStartEvents(event);
      this.emitEvent('pointerDown', [event, pointer]);
    };
    proto._dragPointerDown = function(event, pointer) {
      this.pointerDownPoint = Unipointer.getPointerPoint(pointer);
      var canPreventDefault = this.canPreventDefaultOnPointerDown(event, pointer);
      if (canPreventDefault) {
        event.preventDefault();
      }
    };
    proto.canPreventDefaultOnPointerDown = function(event) {
      return event.target.nodeName != 'SELECT';
    };
    proto.pointerMove = function(event, pointer) {
      var moveVector = this._dragPointerMove(event, pointer);
      this.emitEvent('pointerMove', [event, pointer, moveVector]);
      this._dragMove(event, pointer, moveVector);
    };
    proto._dragPointerMove = function(event, pointer) {
      var movePoint = Unipointer.getPointerPoint(pointer);
      var moveVector = {
        x: movePoint.x - this.pointerDownPoint.x,
        y: movePoint.y - this.pointerDownPoint.y
      };
      if (!this.isDragging && this.hasDragStarted(moveVector)) {
        this._dragStart(event, pointer);
      }
      return moveVector;
    };
    proto.hasDragStarted = function(moveVector) {
      return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
    };
    proto.pointerUp = function(event, pointer) {
      this.emitEvent('pointerUp', [event, pointer]);
      this._dragPointerUp(event, pointer);
    };
    proto._dragPointerUp = function(event, pointer) {
      if (this.isDragging) {
        this._dragEnd(event, pointer);
      } else {
        this._staticClick(event, pointer);
      }
    };
    proto._dragStart = function(event, pointer) {
      this.isDragging = true;
      this.dragStartPoint = Unipointer.getPointerPoint(pointer);
      this.isPreventingClicks = true;
      this.dragStart(event, pointer);
    };
    proto.dragStart = function(event, pointer) {
      this.emitEvent('dragStart', [event, pointer]);
    };
    proto._dragMove = function(event, pointer, moveVector) {
      if (!this.isDragging) {
        return;
      }
      this.dragMove(event, pointer, moveVector);
    };
    proto.dragMove = function(event, pointer, moveVector) {
      event.preventDefault();
      this.emitEvent('dragMove', [event, pointer, moveVector]);
    };
    proto._dragEnd = function(event, pointer) {
      this.isDragging = false;
      setTimeout(function() {
        delete this.isPreventingClicks;
      }.bind(this));
      this.dragEnd(event, pointer);
    };
    proto.dragEnd = function(event, pointer) {
      this.emitEvent('dragEnd', [event, pointer]);
    };
    proto.onclick = function(event) {
      if (this.isPreventingClicks) {
        event.preventDefault();
      }
    };
    proto._staticClick = function(event, pointer) {
      if (this.isIgnoringMouseUp && event.type == 'mouseup') {
        return;
      }
      var nodeName = event.target.nodeName;
      if (nodeName == 'INPUT' || nodeName == 'TEXTAREA') {
        event.target.focus();
      }
      this.staticClick(event, pointer);
      if (event.type != 'mouseup') {
        this.isIgnoringMouseUp = true;
        setTimeout(function() {
          delete this.isIgnoringMouseUp;
        }.bind(this), 400);
      }
    };
    proto.staticClick = function(event, pointer) {
      this.emitEvent('staticClick', [event, pointer]);
    };
    Unidragger.getPointerPoint = Unipointer.getPointerPoint;
    return Unidragger;
  }));
  return module.exports;
});

$__System.registerDynamic("@system-env", [], false, function() {
  return {
    "production": true,
    "browser": true,
    "node": false,
    "dev": false,
    "default": true
  };
});

$__System.registerDynamic("4", ["@system-env"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var productionEnv = $__require('@system-env').production;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {NODE_ENV: productionEnv ? 'production' : 'development'};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("10", ["9", "f", "4"], true, function($__require, exports, module) {
  var process = $__require("4");
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    if (typeof define == 'function' && define.amd) {
      define(['get-size/get-size', 'unidragger/unidragger'], function(getSize, Unidragger) {
        return factory(window, getSize, Unidragger);
      });
    } else if (typeof module == 'object' && module.exports) {
      module.exports = factory(window, $__require('9'), $__require('f'));
    } else {
      window.Draggabilly = factory(window, window.getSize, window.Unidragger);
    }
  }(window, function factory(window, getSize, Unidragger) {
    'use strict';
    var document = window.document;
    function noop() {}
    function extend(a, b) {
      for (var prop in b) {
        a[prop] = b[prop];
      }
      return a;
    }
    function isElement(obj) {
      return obj instanceof HTMLElement;
    }
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
    var lastTime = 0;
    if (!requestAnimationFrame) {
      requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = setTimeout(callback, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    var docElem = document.documentElement;
    var transformProperty = typeof docElem.style.transform == 'string' ? 'transform' : 'WebkitTransform';
    var jQuery = window.jQuery;
    function Draggabilly(element, options) {
      this.element = typeof element == 'string' ? document.querySelector(element) : element;
      if (jQuery) {
        this.$element = jQuery(this.element);
      }
      this.options = extend({}, this.constructor.defaults);
      this.option(options);
      this._create();
    }
    var proto = Draggabilly.prototype = Object.create(Unidragger.prototype);
    Draggabilly.defaults = {};
    proto.option = function(opts) {
      extend(this.options, opts);
    };
    var positionValues = {
      relative: true,
      absolute: true,
      fixed: true
    };
    proto._create = function() {
      this.position = {};
      this._getPosition();
      this.startPoint = {
        x: 0,
        y: 0
      };
      this.dragPoint = {
        x: 0,
        y: 0
      };
      this.startPosition = extend({}, this.position);
      var style = getComputedStyle(this.element);
      if (!positionValues[style.position]) {
        this.element.style.position = 'relative';
      }
      this.enable();
      this.setHandles();
    };
    proto.setHandles = function() {
      this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];
      this.bindHandles();
    };
    proto.dispatchEvent = function(type, event, args) {
      var emitArgs = [event].concat(args);
      this.emitEvent(type, emitArgs);
      var jQuery = window.jQuery;
      if (jQuery && this.$element) {
        if (event) {
          var $event = jQuery.Event(event);
          $event.type = type;
          this.$element.trigger($event, args);
        } else {
          this.$element.trigger(type, args);
        }
      }
    };
    proto._getPosition = function() {
      var style = getComputedStyle(this.element);
      var x = this._getPositionCoord(style.left, 'width');
      var y = this._getPositionCoord(style.top, 'height');
      this.position.x = isNaN(x) ? 0 : x;
      this.position.y = isNaN(y) ? 0 : y;
      this._addTransformPosition(style);
    };
    proto._getPositionCoord = function(styleSide, measure) {
      if (styleSide.indexOf('%') != -1) {
        var parentSize = getSize(this.element.parentNode);
        return !parentSize ? 0 : (parseFloat(styleSide) / 100) * parentSize[measure];
      }
      return parseInt(styleSide, 10);
    };
    proto._addTransformPosition = function(style) {
      var transform = style[transformProperty];
      if (transform.indexOf('matrix') !== 0) {
        return;
      }
      var matrixValues = transform.split(',');
      var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
      var translateX = parseInt(matrixValues[xIndex], 10);
      var translateY = parseInt(matrixValues[xIndex + 1], 10);
      this.position.x += translateX;
      this.position.y += translateY;
    };
    proto.pointerDown = function(event, pointer) {
      this._dragPointerDown(event, pointer);
      var focused = document.activeElement;
      if (focused && focused.blur && focused != document.body) {
        focused.blur();
      }
      this._bindPostStartEvents(event);
      this.element.classList.add('is-pointer-down');
      this.dispatchEvent('pointerDown', event, [pointer]);
    };
    proto.pointerMove = function(event, pointer) {
      var moveVector = this._dragPointerMove(event, pointer);
      this.dispatchEvent('pointerMove', event, [pointer, moveVector]);
      this._dragMove(event, pointer, moveVector);
    };
    proto.dragStart = function(event, pointer) {
      if (!this.isEnabled) {
        return;
      }
      this._getPosition();
      this.measureContainment();
      this.startPosition.x = this.position.x;
      this.startPosition.y = this.position.y;
      this.setLeftTop();
      this.dragPoint.x = 0;
      this.dragPoint.y = 0;
      this.element.classList.add('is-dragging');
      this.dispatchEvent('dragStart', event, [pointer]);
      this.animate();
    };
    proto.measureContainment = function() {
      var containment = this.options.containment;
      if (!containment) {
        return;
      }
      var container = isElement(containment) ? containment : typeof containment == 'string' ? document.querySelector(containment) : this.element.parentNode;
      var elemSize = getSize(this.element);
      var containerSize = getSize(container);
      var elemRect = this.element.getBoundingClientRect();
      var containerRect = container.getBoundingClientRect();
      var borderSizeX = containerSize.borderLeftWidth + containerSize.borderRightWidth;
      var borderSizeY = containerSize.borderTopWidth + containerSize.borderBottomWidth;
      var position = this.relativeStartPosition = {
        x: elemRect.left - (containerRect.left + containerSize.borderLeftWidth),
        y: elemRect.top - (containerRect.top + containerSize.borderTopWidth)
      };
      this.containSize = {
        width: (containerSize.width - borderSizeX) - position.x - elemSize.width,
        height: (containerSize.height - borderSizeY) - position.y - elemSize.height
      };
    };
    proto.dragMove = function(event, pointer, moveVector) {
      if (!this.isEnabled) {
        return;
      }
      var dragX = moveVector.x;
      var dragY = moveVector.y;
      var grid = this.options.grid;
      var gridX = grid && grid[0];
      var gridY = grid && grid[1];
      dragX = applyGrid(dragX, gridX);
      dragY = applyGrid(dragY, gridY);
      dragX = this.containDrag('x', dragX, gridX);
      dragY = this.containDrag('y', dragY, gridY);
      dragX = this.options.axis == 'y' ? 0 : dragX;
      dragY = this.options.axis == 'x' ? 0 : dragY;
      this.position.x = this.startPosition.x + dragX;
      this.position.y = this.startPosition.y + dragY;
      this.dragPoint.x = dragX;
      this.dragPoint.y = dragY;
      this.dispatchEvent('dragMove', event, [pointer, moveVector]);
    };
    function applyGrid(value, grid, method) {
      method = method || 'round';
      return grid ? Math[method](value / grid) * grid : value;
    }
    proto.containDrag = function(axis, drag, grid) {
      if (!this.options.containment) {
        return drag;
      }
      var measure = axis == 'x' ? 'width' : 'height';
      var rel = this.relativeStartPosition[axis];
      var min = applyGrid(-rel, grid, 'ceil');
      var max = this.containSize[measure];
      max = applyGrid(max, grid, 'floor');
      return Math.min(max, Math.max(min, drag));
    };
    proto.pointerUp = function(event, pointer) {
      this.element.classList.remove('is-pointer-down');
      this.dispatchEvent('pointerUp', event, [pointer]);
      this._dragPointerUp(event, pointer);
    };
    proto.dragEnd = function(event, pointer) {
      if (!this.isEnabled) {
        return;
      }
      if (transformProperty) {
        this.element.style[transformProperty] = '';
        this.setLeftTop();
      }
      this.element.classList.remove('is-dragging');
      this.dispatchEvent('dragEnd', event, [pointer]);
    };
    proto.animate = function() {
      if (!this.isDragging) {
        return;
      }
      this.positionDrag();
      var _this = this;
      requestAnimationFrame(function animateFrame() {
        _this.animate();
      });
    };
    proto.setLeftTop = function() {
      this.element.style.left = this.position.x + 'px';
      this.element.style.top = this.position.y + 'px';
    };
    proto.positionDrag = function() {
      this.element.style[transformProperty] = 'translate3d( ' + this.dragPoint.x + 'px, ' + this.dragPoint.y + 'px, 0)';
    };
    proto.staticClick = function(event, pointer) {
      this.dispatchEvent('staticClick', event, [pointer]);
    };
    proto.enable = function() {
      this.isEnabled = true;
    };
    proto.disable = function() {
      this.isEnabled = false;
      if (this.isDragging) {
        this.dragEnd();
      }
    };
    proto.destroy = function() {
      this.disable();
      this.element.style[transformProperty] = '';
      this.element.style.left = '';
      this.element.style.top = '';
      this.element.style.position = '';
      this.unbindHandles();
      if (this.$element) {
        this.$element.removeData('draggabilly');
      }
    };
    proto._init = noop;
    if (jQuery && jQuery.bridget) {
      jQuery.bridget('draggabilly', Draggabilly);
    }
    return Draggabilly;
  }));
  return module.exports;
});

$__System.register('1', ['c', '10'], function (_export, _context) {
  "use strict";

  var Packery, Draggabilly, pckry;
  return {
    setters: [function (_c) {
      Packery = _c.default;
    }, function (_) {
      Draggabilly = _.default;
    }],
    execute: function () {
      pckry = new Packery('.packery-container', {
        draggable: true,
        isInitLayout: false
      });


      document.querySelectorAll('.draggable').forEach(function (i) {
        var draggie = new Draggabilly(i);
        pckry.bindDraggabillyEvents(draggie);
      });

      pckry.on('layoutComplete', function () {
        pckry.element.parentElement.classList.add("packed");
      });
      pckry.layout();
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=../maps/js/footer-b4d2f31f19.js.map
