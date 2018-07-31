'use strict'
var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');
var Evento = require('../models/event');
var Sala = require('../models/sala');
var Dossiere = require('../models/dossiere');
var Eventos = require('../models/event');
var Espacio = require('../models/espacio');
var Cliente = require('../models/cliente');
var Respuesta = require('../models/respuesta');
var Consulta =require('../models/consulta');

function getConsulta(req, res) {
    var idAsist = req.params.id;

    Consulta.findById(idAsist).exec((err, consulta) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!consulta) {
                res.status(404).send({
                    message: 'No existe asistencia'
                });
            } else {
                res.status(200).send({
                    consulta
                });
            }
        }
    });
}

function saveConsulta(req, res) {
    var consulta = new Consulta();
    var params = req.body;
    consulta.title=params.title;
    consulta.cliente=params.cliente;
    consulta.date=Date();

    consulta.save((err, consultaStored) => {
        if (err) {
            res.status(500).send({
                message: 'error al conectar al server'
            });

        } else {
            if (!consultaStored) {
                res.status(404).send({
                    message: 'No se guardo la consulta'
                });
            } else {
                res.status(200).send({
                    consulta: consultaStored
                });
            }
        }

    });
}

//Metodo para ver artistas por pagina
function getConsultas(req, res) {
    if (req.params.page) {
        var page = req.params.page;
    } else {
        var page = 1;
    }

    var itemsperpage = 10;

    Consulta.find().populate({path:'cliente'}).sort({date:-1}).paginate(page, itemsperpage, function (err, consultas, total) {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion al server'
            });
        } else {
            if (!consultas) {
                res.status(404).send({
                    message: 'No hay consultas'
                });
            } else {
                return res.status(200).send({
                    pages: total,
                    consultas: consultas
                });
            }
        }

    });
}
function getConsultasC(req, res) {
   var cliente= req.params.cliente;
    var itemsperpage = 100;

    Consulta.find({cliente:cliente}).populate({path:'cliente'}).sort('date').paginate(1, itemsperpage, function (err, consultas, total) {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion al server'
            });
        } else {
            if (!consultas) {
                res.status(404).send({
                    message: 'No hay consultas'
                });
            } else {
                return res.status(200).send({
                    pages: total,
                    consultas: consultas
                });
            }
        }

    });
}


//metodo para actualizar artistas
function updateConsulta(req, res) {
    var consultaId = req.params.id;
    var update = req.body;

    Consulta.findByIdAndUpdate(consultaId, update, (err, consultaUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar checar, servidor'
            });
        } else {
            if (!consultaUpdated) {
                res.status(404).send({
                    message: 'No se pudo actualizar COnsulta'
                });

            } else {
                res.status(200).send({
                    consulta: consultaUpdated
                });

            }
        }
    });
}
//METODO PARA BORRAR albums
function deleteConsulta(req, res) {
    var consultaId = req.params.id;
    Consulta.findByIdAndRemove(consultaId, (err, consultaRemoved) => {
        if (err) {
            res.status(500).send({
                message: 'Error al borrar Consulta'
            });
        } else {
            if (!consultaRemoved) {
                res.status(404).send({
                    message: 'Consulta no  se pudo eliminar'
                });
            } else {
                Respuesta.findOneAndRemove({consulta:consultaRemoved},function(err,preguntaRemovida){
                    if(err){

                    }else{
                        if(!preguntaRemovida){

                        }else{
                            res.status(200).send({message:'COnsulta Borrado Exitosamente',
                            respuesta:preguntaRemovida,
                            consulta:consultaRemoved,
                            
                        
                            })
                        }
                    }

                });

            }
        }

    });
}





module.exports = {
    getConsulta,
    getConsultas,
    updateConsulta,   
    saveConsulta,
    deleteConsulta,
    getConsultasC

};
