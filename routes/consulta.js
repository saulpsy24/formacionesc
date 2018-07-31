'use strict'
var express = require('express');
var ConsultaController = require('../controllers/consulta');
var SpaceController = ''
var api = express.Router();
var md_auth = require('../middleware/auth')
api.get('/consulta/:id', md_auth.ensureAuth, ConsultaController.getConsulta);
api.get('/consultas/:page?', md_auth.ensureAuth, ConsultaController.getConsultas);

api.get('/consultasc/:cliente?', md_auth.ensureAuth, ConsultaController.getConsultasC);
api.post('/consulta', md_auth.ensureAuth, ConsultaController.saveConsulta);
api.put('/consulta/:id', md_auth.ensureAuth, ConsultaController.updateConsulta);
api.delete('/consulta/:id',md_auth.ensureAuth,ConsultaController.deleteConsulta);
module.exports = api;