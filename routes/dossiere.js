'use strict'
var express = require('express');
var DossController = require('../controllers/dossiere');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');

api.get('/doss/:id',md_auth.ensureAuth,DossController.getDossiere);
api.post('/doss',md_auth.ensureAuth,DossController.saveDossiere);
api.get('/dossi/:space?',md_auth.ensureAuth,DossController.getDossieres);
api.put('/doss/:id', md_auth.ensureAuth, DossController.updateDossiere);
api.delete('/doss/:id', md_auth.ensureAuth, DossController.deleteDossiere);


module.exports = api;