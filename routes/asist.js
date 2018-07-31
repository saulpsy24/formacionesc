'use strict'
var express = require('express');
var AsistController = require('../controllers/asist');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');

api.get('/asist/:id',md_auth.ensureAuth,AsistController.getAsist);
api.post('/asist',md_auth.ensureAuth,AsistController.saveAsist);
api.get('/asistencias/:turno?',md_auth.ensureAuth,AsistController.getAsistencias);
api.delete('/asist/:id', md_auth.ensureAuth, AsistController.deleteAsist);
api.delete('/asiste/:id', md_auth.ensureAuth, AsistController.deleteAsistencia);

api.get('/getreporte-asist/:id?',AsistController.sacarcsv);

api.put('/asist/:id',md_auth.ensureAuth,AsistController.ActulizaAsist);

api.get('/asistenciasc/:cliente?',md_auth.ensureAuth,AsistController.getAsistenciasCliente);
api.post('/lista/mail',AsistController.sendMail);


module.exports = api;