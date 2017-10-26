var server = require('agile-director-back');
var winston = require('winston')
var config = require('./config/index').get();

var env = process.env.NODE_ENV || 'development'

server.init({
    server: {
        port: 5000
    },
    elasticsearch: config.elasticsearch,
    allowed_methods: '*',
    tokens: ['token'],
    collections: {
        db: 'json',
        filename: './collections.json'
    }
})

server.start(function serverStart(serverInstance) {
    var host = serverInstance.address().address;
    var port = serverInstance.address().port;
    server.get('logger').info('started as separated server on http://%s:%s', host, port)
});
