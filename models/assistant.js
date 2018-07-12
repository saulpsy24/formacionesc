'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = Schema({
   cliente:{
       type: Schema.ObjectId,ref:'Cliente'
   },
   
    turno:{
        type: Schema.ObjectId,ref:'Turno'
    }
        
});

module.exports = mongoose.model('Evento', eventSchema);