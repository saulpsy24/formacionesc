'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = Schema({
    cliente:{
        type: Schema.ObjectId,ref:'Cliente'
    },
    
    turno:{
        type: Schema.ObjectId,ref:'Turno'
    },
    check: Boolean
        
});

module.exports = mongoose.model('Evento', eventSchema);