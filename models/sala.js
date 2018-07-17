'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var salaSchema = Schema({
    
    name: String,
    
    space:{
        type: Schema.ObjectId,ref:'Space'
    }
        
});

module.exports = mongoose.model('Sala', salaSchema);