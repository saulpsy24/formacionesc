'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = Schema({
   username:String,
   evento:String,
   fecha: String,
   lugar: String,
   gmaps: String,   
   direccion: String,
   destino: String,
        
});

module.exports = mongoose.model('email', emailSchema);