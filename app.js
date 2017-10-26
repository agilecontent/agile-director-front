'use strict';

var server = require('./server')
var app = server.get('express');
var config = require('./config/index').get();
var statusHelper = require('./src/helpers/status');
var fs = require('fs');
var Promise = require('bluebird')
Promise.config({
  warnings: false
})

var fs = Promise.promisifyAll(require('fs-extra'))
var redis_client = require('./config/redis')
var mongoose_conn = require('./config/mongoose')

var printed = false;
redis_client.on("error", function (err) {
  if (!printed) {
    server.get('logger').info('Redis is required for authentication and nice URLs..'.red)
    server.get('logger').info('Without Redis application might not work properly'.red)
    printed = true
  }
})

var mongo_error = false

mongoose_conn.on('error', err => {
  mongo_error = true
  server.get('logger').info('MongoDB is required..'.red)
  server.get('logger').info('Please run MongoDB and restart application'.red)
})

/**
 * express js listen
 */
app.listen(config.server.port, function afterListen() {
  var host = this.address().address;
  var port = this.address().port;

  if (!host || host === '::') {
    host = '127.0.0.1'
  }

  return statusHelper.elasticsearch(config.elasticsearch.host)
  .then(function(result) {
    server.get('logger').info('started!'.green)

    if (result.elasticsearch_status === 200) {
      server.get('logger').info('Elasticsearch status -', 'OK'.green)
    } else {
      server.get('logger').info('Elasticsearch status -', config.elasticsearch.host.red + ' is unavailable.'.red)
      server.get('logger').info('Your application might not work properly'.red)
      server.get('logger').info('Instructions about how to run Elasticsearch - https://github.com/server/server/blob/master/ELASTICSEARCH.md'.red)
      server.get('logger').info('To start app with your custom elasticsearch url:'.red)
      server.get('logger').info('ELASTICSEARCH_URL=http://localhost:9200 npm start'.red)
    }

    if (!fs.existsSync('./bower_components')) {
      server.get('logger').info('Bower packages were not installed properly'.red)
      server.get('logger').info('Please run: '.red)
      server.get('logger').info('./node_modules/.bin/bower cache clean --allow-root && ./node_modules/.bin/bower install --allow-root'.red)
    }

    if (!mongo_error) {
      server.get('logger').info('Open http://%s:%s in your browser to continue!'.green, host, port)
    } else {
      //server.get('logger').info('Open http://%s:%s in your browser to continue!'.red)
    }

  })

}).on('error', function(err){
  console.log('Cannot start with port %s'.red, config.server.port);
  console.log('Try again with another port i.e. `PORT=4000 npm start`'.red);
  process.exit()
});
