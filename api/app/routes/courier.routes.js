'use strict'

module.exports = function (app) {

  var courierController = require('../controllers/courier.controller.js');

  app.route('/api/couriers/:courierId')
    .get(courierController.gCourier);

  app.route('/api/location')
    .post(courierController.pLocation);
};