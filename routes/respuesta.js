'use strict'
var express = require('express');
var respuestaController = require('../controllers/respuesta');
var SpaceController = '';
var ConsultaController="";
var api = express.Router();
var md_auth = require('../middleware/auth')
api.get('/respuesta/:id', md_auth.ensureAuth, respuestaController.getRespuesta);
api.post('/respuesta', md_auth.ensureAuth, respuestaController.saveRespuesta);
api.get('/respuestas/:page?',md_auth.ensureAuth,respuestaController.getRespuestas);
api.get('/respuestash/:consulta',md_auth.ensureAuth,respuestaController.getRespuestasHilo);
api.put('/respuesta/:id', md_auth.ensureAuth, respuestaController.updateRespuesta);
api.delete('/respuesta/:id', md_auth.ensureAuth, respuestaController.deleteRespuesta);
module.exports = api;