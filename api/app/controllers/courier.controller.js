var genasync = require('generator-async'),
  config = require("../../config/config"),
  winston = require("../../config/winston"),
  errors = require("../../config/errors"),
  request = require("request"),
  moment = require("moment"),
  CourierService = require('../services/courier.service.js');

exports.pLocation = function (request, response) {

  genasync.run(function *() {

    try {

      const result = yield CourierService.updateLocation(request.body.courierId,request.body.latitude,request.body.longitude);

      return response.json({status: 'ok', result: result, errorCode: 0});

    } catch (e) {

      return response.json({status: 'err', errorCode: 1,Message:'err:'+e});

    }

  });

};

exports.gCourier = function (request, response) {

  genasync.run(function *() {

    try {

      const courierData = yield CourierService.getCourier(request.params.courierId);

      return response.json({status: 'ok', courier: courierData, errorCode: 0});

    } catch (e) {

      return response.json({status: 'err', errorCode: 1,Message:'err:'+e});

    }

  });

};
