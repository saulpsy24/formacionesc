'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = Schema({
    title: String,
    description: String,
    brand: String,
    province:String,
    image:String
        
});

module.exports = mongoose.model('Event', eventSchema);