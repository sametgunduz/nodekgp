/**
 * Created by sametgunduz on 24/12/16.
 */

process.env.NODE_ENV = 'local';

var mongoose = require('./config/mongoose'),
    express = require("./config/express"),
    config = require("./config/config");

var db = mongoose();
var app = express();

var server = require('http').createServer(app);

server.listen(9096);

module.exports = app;

console.log('server running at 9096 for localhost :)');