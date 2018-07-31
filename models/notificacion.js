'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notySchema = Schema({
    date: Date,
    body:String,
   
});

module.exports = mongoose.model('Notificacion', notySchema);