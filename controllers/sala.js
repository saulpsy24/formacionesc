'use strict'
var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');
var Evento = require('../models/event');
var Sala = require('../models/sala');
var Dossiere = require('../models/dossiere');
var Eventos = require('../models/event');
var Espacio = require('../models/espacio');
var Asist = require('../models/assistant');
var Turno = require('../models/turno');

//metodo para obtener 1 sala
function getSala(req, res) {
      var idSala = req.params.id;

    Sala.findById(idSala).populate({
        path: 'space'
    }).exec((err, sala) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!turno) {
                res.status(404).send({
                    message: 'No existe Sala'
                });
            } else {
                res.status(200).send({
                    sala
                });
            }
        }
    });
}
//metodo para guardar una sala
function saveSala(req, res) {
    var sala = new Sala();
    var params = req.body;
    sala.name = params.name;
    sala.space = params.space;
    

    sala.save((err, salaStored) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el Servidor'
            });

        } else {
            if (!salaStored) {
                res.status(404).send({
                    message: 'Error guardando sala'
                });
            } else {
                res.status(200).send({
                    sala: salaStored
                    
                });
            }
        }
    });
}

function getSalas(req, res) {
    var spaceId = req.params.space;
    if (!spaceId) {
        //sacar todos los albums de la DB
        var find = Sala.find({}).sort('name');
    } else {
        //mostrar solamente los albums de ese artista
        var find = Sala.find({
            space: spaceId
        }).sort('name');
    }
    find.populate({
        path: 'space',       
        
    }).exec((err, salas) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!salas) {
                res.status(404).send({
                    message: 'no hay salas asociadas'
                });
            } else {
                res.status(200).send({
                    sala: salas
                });
            }
        }
    })
}

//metodo para actualizar canciones
function updateSala(req, res) {
    var salaId = req.params.id;
    var update = req.body;

    Sala.findByIdAndUpdate(salaId, update, (err, salaUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar sala'
            });
        } else {
            if (!salaUpdated) {
                res.status(404).send({
                    message: 'No se pudo actualizar sala'
                });

            } else {
                res.status(200).send({
                    sala: salaUpdated
                });

            }
        }
    });
}
//Metodo para borrar canciones.
function deleteSala(req, res) {
    var salaId = req.params.id;
    Sala.findByIdAndRemove(salaId, (err, salaRemoved) => {

        if (err) {
            res.status(500).send({
                message: 'Error al borrar sala'
            });
        } else {
            if (!salaRemoved) {
                res.status(404).send({
                    message: 'sala no  se pudo eliminar'
                });
            } else {
                res.status(200).send({
                    sala: salaRemoved
                });

            }
        }
    });

}
//metodo para subir una canción



module.exports = {
    getSala,
    saveSala,
    getSalas,
    updateSala,
    deleteSala


}
