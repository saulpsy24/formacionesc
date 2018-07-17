'use strict'
var express = require('express');
var UserController = require('../controllers/cliente');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/avatar'});
var md_upload1 = multipart({uploadDir:'./uploads/fichas'});



api.post('/register', UserController.savecliente);
api.post('/store',md_auth.ensureAuth, UserController.storeUser);
api.post('/login', UserController.logincliente);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updatecliente);
api.post('/upload-image-user/:id',[md_auth.ensureAuth,md_upload], UserController.uploadImageCliente);
api.get('/get-image-user/:imageFile',UserController.getImageFile);
api.get('/getreporte',UserController.sacarcsv);
api.get('/get-clientes',md_auth.ensureAuth,UserController.getClientes)
api.put('/update-user-admin/:id', md_auth.ensureAuth, UserController.updateclienteAdmin);
api.delete('/cliente/:id', md_auth.ensureAuth, UserController.deleteCliente);
api.get('/clientenombre/:name',md_auth.ensureAuth,UserController.getClienteName);


api.post('/upload-ficha/:id',[md_auth.ensureAuth,md_upload1], UserController.uploadFile);
api.get('/get-ficha/:file',UserController.getFile);
api.get('/cliente/:id',md_auth.ensureAuth,UserController.getCliente);
//api.get('/req',UserController.getRequests);

module.exports=api;

