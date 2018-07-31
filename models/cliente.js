'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    name: String,
    nameEstablishment: String,
    surname: String,
    email: String,
    code: String,
    image: String,
    phone: String,
    zip: String,
    province: String,
    nifCif: String,
    street: String,
    brandV: String,
    brandLR: String,
    brandRG: String,
    brandSK: String,
    brandCV: String,
    password:String,
    role:String,
    file:String
});



module.exports = mongoose.model('Cliente', ClienteSchema);
