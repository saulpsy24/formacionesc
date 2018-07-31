'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = Schema({
    title: String,
    description: String,
    brand: String,
    province:String,
    image:String,
    visible:String,
    direccion:String,
    lugar: String,
    gmaps:String,
    dateS:String,
    dateE:String,
    value:String,
    campana:String
        
});

module.exports = mongoose.model('Event', eventSchema);