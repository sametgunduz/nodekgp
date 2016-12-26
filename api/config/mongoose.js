var config = require("./config"),
 mongoose = require('mongoose');

module.exports = function() {

  var db = mongoose.connect('mongodb://localhost:27017/local');

  mongoose.connection.once('connected', function() {
    console.log("Connected to database")
  });

  require("../app/models/courier.model.js");

  return db;
};