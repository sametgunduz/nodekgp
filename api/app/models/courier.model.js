var mongoose = require('mongoose'), Schema = mongoose.Schema;


var Courier = mongoose.model('Courier', new Schema({
  name:String,
  date: Date,
  lastLocations: [{date: Date, lat: String,lng:String}]
}, { collection : 'Courier' }));
