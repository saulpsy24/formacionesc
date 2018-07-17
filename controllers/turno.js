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

//metodo para obtener 1 album
function getTurno(req, res) {
    var idTurno = req.params.id;

    Turno.findById(idTurno).populate({
        path: 'event'
    }).exec((err, turno) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!turno) {
                res.status(404).send({
                    message: 'No existe el turno'
                });
            } else {
                res.status(200).send({
                    turno
                });
            }
        }
    });
}
//guardar album

function saveTurno(req, res) {
    var turno = new Turno();
    var params = req.body;
    turno.name = params.name;
    turno.date_start = params.date_start;
    turno.date_end = params.date_end;
    turno.start_h = params.start_h;
    turno.end_h = params.end_h;
    turno.aforo = params.aforo;
    turno.event=params.event;

    turno.save((err, turnoSaved) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el Servidor'
            });

        } else {
            if (!turnoSaved) {
                res.status(404).send({
                    message: 'Error guardando turno'
                });
            } else {
                res.status(200).send({
                    turno: turnoSaved
                });
            }
        }
    });
}

//metodo para obtener todos los albums
function getTurnos(req, res) {
    var eventId = req.params.event;
    if (!eventId) {
        //sacar todos los albums de la DB
        var find = Turno.find({}).sort('date_start');
    } else {
        //mostrar solamente los albums de ese artista
        var find = Turno.find({
            event: eventId
        }).sort('date_start');
    }
    find.populate({
        path: 'event'
    }).exec((err, turnos) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!turnos) {
                res.status(404).send({
                    message: 'no hay turnos asociados'
                });
            } else {
                res.status(200).send({
                    turnos
                });
            }
        }
    })
}

//metodo para actualizar albums
function updateTurno(req, res) {
    var turnoId = req.params.id;
    var update = req.body;

    Turno.findByIdAndUpdate(turnoId, update, (err, turnoUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar Turno'
            });
        } else {
            if (!turnoUpdated) {
                res.status(404).send({
                    message: 'No se pudo actualizar Turno'
                });

            } else {
                res.status(200).send({
                    turno: turnoUpdated
                });

            }
        }
    });
}

//METODO PARA BORRAR albums
function deleteTurno(req, res) {
    var turnoId = req.params.id;
    Turno.findByIdAndRemove(turnoId, (err, TurnoRemoved) => {
        if (err) {
            res.status(500).send({
                message: 'Error al borrar Turno'
            });
        } else {
            if (!TurnoRemoved) {
                res.status(404).send({
                    message: 'Turno no  se pudo eliminar'
                });
            } else {
                Asist.findOneAndRemove({turno:TurnoRemoved},function(err,asistenciaremovida){
                    if(err){

                    }else{
                        if(!asistenciaremovida){

                        }else{
                            res.status(200).send({message:'Turno Borrado Exitosamente',
                            asist:asistenciaremovida,
                            turno:TurnoRemoved,
                            
                        
                            })
                        }
                    }

                });

            }
        }

    });
}



module.exports = {
    getTurno,
    saveTurno,
    getTurnos,
    updateTurno,
    deleteTurno
}
