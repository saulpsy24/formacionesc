'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpaceSchema = Schema({
    
    name: String,
    address: String,
    country: String,
    province:String,
    local: String,
    phone: String,
    fax: String,
    image: String
});

module.exports = mongoose.model('Space', SpaceSchema);