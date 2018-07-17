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
function getDossiere(req, res) {
   var idDossiere = req.params.id;

    Dossiere.findById(idDossiere).populate({
        path: 'space'
    }).exec((err, event) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!event) {
                res.status(404).send({
                    message: 'No existe el dossiere'
                });
            } else {
                res.status(200).send({
                    event
                });
            }
        }
    });
}
//metodo para guardar una sala
function saveDossiere(req, res) {
    var dossiere = new Dossiere();
    var params = req.body;
    dossiere.name = params.name;
    dossiere.space = params.space;
    

    dossiere.save((err, dossiereSaved) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el Servidor'
            });

        } else {
            if (!dossiereSaved) {
                res.status(404).send({
                    message: 'Error guardando dossiere'
                });
            } else {
                res.status(200).send({
                    dossiere: dossiereSaved
                    
                });
            }
        }
    });
}

function getDossieres(req, res) {
    var spaceId = req.params.space;
    if (!spaceId) {
        //sacar todos los albums de la DB
        var find = Dossiere.find({}).sort('name');
    } else {
        //mostrar solamente los albums de ese artista
        var find = Dossiere.find({
            space: spaceId
        }).sort('name');
    }
    find.populate({
        path: 'space',       
        
    }).exec((err, dossieres) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!dossieres) {
                res.status(404).send({
                    message: 'no hay dossiere asociadas'
                });
            } else {
                res.status(200).send({
                    dossiere: dossieres
                });
            }
        }
    })
}

//metodo para actualizar canciones
function updateDossiere(req, res) {
    var idDossiere = req.params.id;
    var update = req.body;

    Dossiere.findByIdAndUpdate(idDossiere, update, (err, dossiereUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar dossiere'
            });
        } else {
            if (!dossiereUpdated) {
                res.status(404).send({
                    message: 'No se pudo actualizar dossiere'
                });

            } else {
                res.status(200).send({
                    dossiere: dossiereUpdated
                });

            }
        }
    });
}
//Metodo para borrar canciones.
function deleteDossiere(req, res) {
    var dossiereId = req.params.id;
    Dossiere.findByIdAndRemove(dossiereId, (err, dossiereRemoved) => {

        if (err) {
            res.status(500).send({
                message: 'Error al borrar dossiere'
            });
        } else {
            if (!dossiereRemoved) {
                res.status(404).send({
                    message: 'dossiere no  se pudo eliminar'
                });
            } else {
                res.status(200).send({
                    dossiere: dossiereRemoved
                });

            }
        }
    });

}
//metodo para subir una canción



module.exports = {
    getDossiere,
    saveDossiere,
    getDossieres,
    updateDossiere,
    deleteDossiere


}
