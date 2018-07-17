'use strict'
var express = require('express');
var SalaController = require('../controllers/sala');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');

api.get('/sala/:id',md_auth.ensureAuth,SalaController.getSala);
api.post('/sala',md_auth.ensureAuth,SalaController.saveSala);
api.get('/salas/:space?',md_auth.ensureAuth,SalaController.getSalas);
api.put('/sala/:id', md_auth.ensureAuth, SalaController.updateSala);
api.delete('/sala/:id', md_auth.ensureAuth, SalaController.deleteSala);


module.exports = api;