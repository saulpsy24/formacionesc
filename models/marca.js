'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarcaSchema = Schema({
    name: String,
   
        
});

module.exports = mongoose.model('Marca', MarcaSchema);