var winston = require('winston');
require('winston-mongodb').MongoDB,
  moment = require("moment"),
  config = require("./config"),
  chalk = require('chalk');

var encPassword = encodeURIComponent(config.dbPassword),
  logger = new(winston.Logger)({
      transports: [
          new(winston.transports.Console)(),
          new(winston.transports.MongoDB)({
              db: 'mongodb://localhost:27017/local',
              handleExceptions: config.winstonErrorHandle
          })
      ],
      exitOnError: false
  });

exports.writeLog = function (type, content) {
    logger.log(type, content);
};


exports.writeLogwithMetaData = function (type, content, interpolation) {
    console.log(chalk.green(moment().locale('en').format("HH:mm:ss DD-MM-YYYY")) + ' | ' + content + ' | ' + JSON.stringify(interpolation, null, 4));
    logger.log(type, content, interpolation);
};

exports.justVisibleLog = function(content){
    if(process.env.NODE_ENV == 'local')
        console.log(chalk.green(moment().locale('en').format("HH:mm:ss DD-MM-YYYY")) + ' | ' + JSON.stringify(content, null, 4));
}
