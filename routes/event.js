'use strict'
var express = require('express');
var EventController = require('../controllers/event');
var api = express.Router();
var md_auth= require('../middleware/auth')
var multipart = require('connect-multiparty');

var md_upload = multipart({uploadDir:'./uploads/events'});

api.get('/event/:id',md_auth.ensureAuth,EventController.getEvent);
api.post('/event',md_auth.ensureAuth,EventController.saveEvent);
api.get('/events/:page?',md_auth.ensureAuth,EventController.getEvents);
api.put('/event/:id', md_auth.ensureAuth, EventController.updateEvent);
api.delete('/event/:id', md_auth.ensureAuth, EventController.deleteEvent);
api.get('/eventzone/:locali',md_auth.ensureAuth,EventController.getByZone);

api.post('/upload-image-event/:id',[md_auth.ensureAuth,md_upload], EventController.uploadImageEvent);
api.get('/get-image-event/:imageFile',EventController.getImageFile);
api.get('/eventspace/:name',md_auth.ensureAuth,EventController.getBySpace);

module.exports=api;