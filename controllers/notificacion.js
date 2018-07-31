'use strict'
var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var Cliente = require('../models/cliente');
var Respuesta = require('../models/respuesta');
var Consulta = require('../models/consulta');
var Notificacion = require('../models/notificacion');

var ObjectId = require('mongodb').ObjectId;


function getNotificaciones(req, res) {
    if (req.params.page) {
        var page = req.params.page;
    } else {
        var page = 1;
    }

    var itemsperpage = 10;
    var mysort={
        date:-1
    }

    Notificacion.find().sort(mysort).paginate(page, itemsperpage, function (err, notificaciones, total) {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion al server'
            });
        } else {
            if (!notificaciones) {
                res.status(404).send({
                    message: 'No hay notificaciones'
                });
            } else {
                return res.status(200).send({
                    pages: total,
                    notificaciones: notificaciones
                });
            }
        }

    });
}

module.exports={
    getNotificaciones,
}
