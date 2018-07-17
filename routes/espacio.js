'use strict'
var express = require('express');
var SpaceController = require('../controllers/espacio');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/espacios'});

api.get('/space/:id',md_auth.ensureAuth,SpaceController.getSpace);
api.post('/space',md_auth.ensureAuth,SpaceController.saveSpace);
api.get('/spaces/:page?',md_auth.ensureAuth,SpaceController.getEspacios);
api.put('/space/:id', md_auth.ensureAuth, SpaceController.updateEspacio);
api.delete('/space/:id', md_auth.ensureAuth, SpaceController.deleteEspacio);
api.post('/upload-image-space/:id',[md_auth.ensureAuth,md_upload], SpaceController.uploadImage);
api.get('/get-image-space/:imageFile',SpaceController.getImageFile);
module.exports=api;