'use strict'
var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');

var Cliente = require('../models/cliente');
var Respuesta = require('../models/respuesta');
var Consulta = require('../models/consulta');

var ObjectId = require('mongodb').ObjectId;

function getRespuesta(req, res) {
    var idResp = req.params.id;

    Respuesta.findById(idResp).populate({

        path: 'cliente'
    }
    ).populate({
        path: 'consulta'
    }).exec((err, respuesta) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!respuesta) {
                res.status(404).send({
                    message: 'No existe respuesta'
                });
            } else {
                res.status(200).send({
                    respuesta
                });
            }
        }
    });
}

function saveRespuesta(req, res) {
    var respuesta = new Respuesta();
    var params = req.body;
    respuesta.body = params.body;
    respuesta.cliente = params.cliente;
    respuesta.consulta = params.consulta;
    respuesta.date = Date();

    respuesta.save((err, respuestaStored) => {
        if (err) {
            res.status(500).send({
                message: 'error al conectar al server'
            });

        } else {
            if (!respuestaStored) {
                res.status(404).send({
                    message: 'No se guardo la respuesta'
                });
            } else {
                res.status(200).send({
                    respuesta: respuestaStored
                });
            }
        }

    });
}

//Metodo para ver artistas por pagina
function getRespuestas(req, res) {
    if (req.params.page) {
        var page = req.params.page;
    } else {
        var page = 1;
    }

    var itemsperpage = 10;

    Respuesta.find().populate({
        path: 'cliente', Model: 'Cliente'
    }).populate({
        path: 'consulta'
    }).sort('date').paginate(page, itemsperpage, function (err, respuestas, total) {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion al server'
            });
        } else {
            if (!respuestas) {
                res.status(404).send({
                    message: 'No hay respuestas'
                });
            } else {
                return res.status(200).send({
                    pages: total,
                    respuestas: respuestas
                });
            }
        }

    });
}


//metodo para actualizar artistas
function updateRespuesta(req, res) {
    var respuestaId = req.params.id;
    var update = req.body;

    Respuesta.findByIdAndUpdate(respuestaId, update, (err, respuestaUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar checar, servidor'
            });
        } else {
            if (!respuestaUpdated) {
                res.status(404).send({
                    message: 'No se pudo actualizar respuesta'
                });

            } else {
                res.status(200).send({
                    respuesta: respuestaUpdated
                });

            }
        }
    });
}
//METODO PARA BORRAR albums
function deleteRespuesta(req, res) {
    var respuestaId = req.params.id;
    Respuesta.findByIdAndRemove(respuestaId, (err, respuestaRemoved) => {
        if (err) {
            res.status(500).send({
                message: 'Error al borrar respuesta'
            });
        } else {
            if (!respuestaRemoved) {
                res.status(404).send({
                    message: 'Consulta no  se pudo eliminar'
                });
            } else {
                {
                    res.status(200).send({
                        message: 'Respuesta Borrado Exitosamente',
                        respuesta: respuestaRemoved,



                    })
                }


            }
        }

    });
}

//Metodo para ver artistas por pagina
function getRespuestasHilo(req, res) {
    if (req.params.page) {
        var page = req.params.page;
    } else {
        var page = 1;
    }
    var consultas = req.params.consulta;

    var itemsperpage = 500;

    Respuesta.find({consulta:consultas}).populate({
        path: 'cliente', Model: 'Cliente'
    }).populate({
        path: 'consulta',
        match: {
            _id: consultas
        }

    }).sort('date').paginate(page, itemsperpage, function (err, respuestas, total) {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion al server'
            });
        } else {
            if (!respuestas) {
                res.status(404).send({
                    message: 'No hay respuestas'
                });
            } else {

                    return res.status(200).send({
                        pages: total,
                        respuestas: respuestas
                    });

                

            }
        }

    });
}





module.exports = {
    getRespuesta,
    getRespuestas,
    updateRespuesta,
    saveRespuesta,
    deleteRespuesta,
    getRespuestasHilo

};
