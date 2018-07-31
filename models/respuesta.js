'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RespuestaSchema = Schema({
    consulta: {
        type: Schema.ObjectId,ref:'Consulta'
    },
    cliente: {
        type: Schema.ObjectId, ref: 'Cliente'
    },
    body:String,

    date: Date
});



module.exports = mongoose.model('Respuesta', RespuestaSchema);