'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dossiereSchema = Schema({
    
    name: String,
    
    space:{
        type: Schema.ObjectId,ref:'Space'
    }
        
});

module.exports = mongoose.model('Dossiere', dossiereSchema);