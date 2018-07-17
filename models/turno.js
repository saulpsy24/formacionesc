'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var turnoSchema = Schema({
    name: String,
    date_start: String,
    date_end: String,
    start_h: String,
    end_h: String,
    aforo: Number,
    
    event:{
        type: Schema.ObjectId,ref:'Event'
    }
        
});

module.exports = mongoose.model('Turno', turnoSchema);