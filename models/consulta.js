'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConsultaSchema = Schema({
    title: String, 
    cliente:{
        type: Schema.ObjectId,ref:'Cliente'
    },
    
    date: Date
});



module.exports = mongoose.model('Consulta', ConsultaSchema);