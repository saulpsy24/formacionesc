'use strict'
var express = require('express');
var notyController = require('../controllers/notificacion');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');

api.get('/notify/:page?',md_auth.ensureAuth,notyController.getNotificaciones);


module.exports = api;