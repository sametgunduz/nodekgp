var config = require("./config"),
  express = require('express'),
  morgan = require('morgan'),
  compress = require("compression"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  session = require("express-session"),
  flash = require("connect-flash"),
  passport = require("passport"),
  multer = require('multer'),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  winston = require("./winston"),
  errors = require("./errors");

module.exports = function () {
    var app = express();

    app.set('secretKey', config.sessionSecret);
    app.use(compress());


    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb'
    }));

    app.use(bodyParser.json({
        limit: '50mb'
    }));
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req, res, next) {

        //req.decoded = decoded;
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
        next();

    });

    require("../app/routes/courier.routes.js")(app);

    return app;
};
