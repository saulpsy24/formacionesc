'use strict'
var express = require('express');
var UserController = require('../controllers/cliente');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/avatar'});


api.post('/register', UserController.savecliente);
api.post('/login', UserController.logincliente);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updatecliente);
api.post('/upload-image-user/:id',[md_auth.ensureAuth,md_upload], UserController.uploadImageCliente);
api.get('/get-image-user/:imageFile',UserController.getImageFile);
api.get('/getreporte',UserController.sacarcsv);

api.put('/update-user-admin/:id', md_auth.ensureAuth, UserController.updateclienteAdmin);
//api.get('/req',UserController.getRequests);

module.exports=api;

