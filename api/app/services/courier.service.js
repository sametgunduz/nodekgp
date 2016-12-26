"use strict";

var
  moment = require("moment"),
  CourierRepository = require('../repositories/courier.repository.js');

var CourierService = (function () {

  var instance;

  function _init() {

    return {

      getCourier: function (courierId) {

        return _getCourier(courierId);

      },


      updateLocation: function (courierId, latitude,longitude) {

        return _updateLocation(courierId, latitude,longitude);

      }

    };

  }

  return {

    getInstance: function () {

      if (!instance) {

        instance = _init();

      }

      return instance;

    }

  };

}());


function _getCourier(courierId) {

  return new Promise(function (resolve, reject) {

    try {

      var params = {

        _id: courierId

      };

      CourierRepository.getCourier(params, null, function (err, response) {

        if (err) {

          err.code = 500;

          reject(err);

        } else {

          resolve(response);

        }

      });

    } catch (e) {

      e.code = 500;

      reject(e);

    }

  });

}

function _updateLocation(courierId, latitude,longitude) {

  return new Promise(function (resolve, reject) {

    try {

      var params = {
        _id:courierId,
        date:moment().locale('en').format("YYYY-MM-DDTHH:mm:ssZ"),
        lat:latitude,
        lng:longitude
      };

      CourierRepository.updateLocation(params, null, function (err, response) {

        if (err) {

          err.code = 500;

          reject(err);

        } else if (!response) {

          err.code = 404;

        } else {

          resolve(response);

        }

      });

    } catch (e) {

      e.code = 500;

      reject(e);

    }

  });

}

module.exports = CourierService.getInstance();