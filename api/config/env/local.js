
module.exports = {
    sessionSecret: 'developmentSessionSecret',
    db: 'mongodb://localhost:27017/local',
    dbName : 'local',
    host: 'localhost',
    port: '27017',
    dbUsername: 'myUserAdmin',
    dbPassword: 'abc123',
    winstonErrorHandle: true,
    mongoosePoolSize : 5,
    mongooseConnectTimeoutMS : 5000,
    mongooseReconnectTries : 10,
    mongooseReconnectInterval : 1000
};
