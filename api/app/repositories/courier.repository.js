var Courier = require("mongoose").model('Courier');

var _getCourier = function (params, options, callback) {

  Courier.findById(params._id, function (err, couriers) {

    callback(err,couriers);

  });

};

var _updateLocation = function (params, options, callback) {

  var data = {
    date:params.date,
    lat:params.lat,
    lng:params.lng
  };

  Courier.findByIdAndUpdate(params._id, { $push: { lastLocations: data }}, function (err, courier) {

    callback(err,courier);

  });

};


var getCourier = _getCourier;

var updateLocation = _updateLocation;

module.exports = {

  getCourier : getCourier,

  updateLocation : updateLocation

};
