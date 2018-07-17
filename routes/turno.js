'use strict'
var express = require('express');
var TurnoController = require('../controllers/turno');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');

api.get('/turno/:id',md_auth.ensureAuth,TurnoController.getTurno);
api.post('/turno',md_auth.ensureAuth,TurnoController.saveTurno);
api.get('/turnos/:event?',md_auth.ensureAuth,TurnoController.getTurnos);
api.put('/turno/:id', md_auth.ensureAuth, TurnoController.updateTurno);
api.delete('/turno/:id', md_auth.ensureAuth, TurnoController.deleteTurno);


module.exports = api;