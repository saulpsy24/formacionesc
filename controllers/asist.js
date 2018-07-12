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
var Cliente = require('../models/cliente')
var ObjectId = require('mongodb').ObjectId;


//metodo para obtener 1 canción
function getAsist(req, res) {
    var idAsist = req.params.id;

    Asist.findById(idAsist).populate({
        path: 'turno'
    }
    ).populate({
        path: 'cliente'
    }).exec((err, asistencia) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!asistencia) {
                res.status(404).send({
                    message: 'No existe asistencia'
                });
            } else {
                res.status(200).send({
                    asistencia
                });
            }
        }
    });
}
//metodo para guardar una cancion
function saveAsist(req, res) {
    var asist = new Asist();
    var params = req.body;
    var aforo2 = new Turno();
    asist.cliente = params.cliente;
    asist.turno = params.turno;

    Asist.findOne({
        'cliente': asist.cliente,
        'turno': asist.turno,
    }, function (err, elements) {

        if (err) {
            res.status(500).json({
                error: false,
                message: err.message
            });
        }
        if (!elements) {
            var turnoasistencia = function (turno, callback) {
                Turno.find().where('_id', ObjectId(asist.turno)).
                    exec(function (err, turnosconeseid) {
                        // docs contains an array of MongooseJS Documents
                        // so you can return that...
                        // reverse does an in-place modification, so there's no reason
                        // to assign to something else ...
                        turnosconeseid.reverse();
                        callback(err, turnosconeseid);
                    });
            };

            turnoasistencia(asist.turno, function (err, turnos) {
                if (err) {
                    return;
                } else {
                    var aforo = new Turno();
                    aforo = turnos;
                    aforo2 = aforo[0];
                    if (aforo2.aforo > 0) {

                        var turno = asist.turno;
                        var update = {
                            $inc: {
                                aforo: -1
                            }
                        }
                        Turno.findByIdAndUpdate(turno, update, (err, turnoUpdated) => {
                            if (err) {
                                res.status(500).send({
                                    message: 'No se logro actualizar turno'
                                });
                            } else {
                                if (!turnoUpdated) {
                                    res.status(404).send({
                                        message: 'No se encuentra el turno'
                                    });
                                } else {
                                    asist.save((err, asistSaved) => {
                                        if (err) {
                                            res.status(500).send({
                                                message: 'Error en el Servidor'
                                            });

                                        } else {
                                            if (!asistSaved) {
                                                res.status(404).send({
                                                    message: 'Error guardando asistencia'
                                                });
                                            } else {
                                                res.status(200).send({
                                                    asistSaved,
                                                    turnoUpdated



                                                });
                                            }
                                        }
                                    });


                                }
                            }

                        });


                    }

                    else {
                        res.status(404).send({ message: 'Ya no hay mas cupos' });
                    }

                }
            });
        } else {
            res.status(200).send({ message: 'Ya te has inscrito al evento anteriormente' });

        }
    });

}



function getAsistencias(req, res) {
    var turnoId = req.params.turno;
    if (!turnoId) {
        //sacar todos los albums de la DB
        var find = Asist.find({});
    } else {
        //mostrar solamente los albums de ese artista
        var find = Asist.find({
            turno: turnoId
        });
    }
    find.populate({
        path: 'turno',
        populate: {
            path: 'event',
            model: 'Event'
        }

    }).populate({
        path: 'cliente'

    }).exec((err, asistencias) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!asistencias) {
                res.status(404).send({
                    message: 'no hay asistencias  asociadas'
                });
            } else {
                res.status(200).send({
                    asistencias
                });
            }
        }
    })
}
function getAsistenciasCliente(req, res) {
    var clienteId = req.params.cliente;
    if (!clienteId) {
        console.log('nollegaid');
        //sacar todos los albums de la DB
        var find = Asist.find({}).sort('name');
    } else {
        console.log('entra aqui');
        //mostrar solamente los albums de ese artista
        var find = Asist.find({
            cliente: clienteId
        }).sort('name');
    }
    find.populate({
        path: 'turno',
        populate: {
            path: 'event'
        }


    }).populate({
        path: 'cliente'
    }).exec((err, asistencias) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!asistencias) {
                res.status(404).send({
                    message: 'no hay asistencias  asociadas'
                });
            } else {
                res.status(200).send({
                    asist: asistencias
                });
            }
        }
    })
}
function deleteAsistencia(req,res){
    var idAsist= req.params.id;
    Asist.findByIdAndRemove(idAsist, (err, asistRemoved)=>{
        if(err){
            res.send({message:'nosepudo'});

        }else{
            res.send({asist:asistRemoved});
        }

    });
}
//Metodo para borrar canciones.
function deleteAsist(req, res) {


    var asist = new Asist();

    var aforo2 = new Turno();


    var id = req.params.id;

    Asist.findById(id).populate({
        path: 'turno'
    }).exec((err, asist) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!asist) {
                res.status(404).send({
                    message: 'No existe el turno'
                });
            } else {
                Turno.findById(asist.turno).exec((error, turnoactualizado) => {
                    if (err) {
                        res.status(500).send({
                            message: 'error en la peticion'
                        });

                    } else {
                        if (!turnoactualizado) {
                            res.status(404).send({ message: 'No existe el turno' });
                        } else {
                            var aforo;
                            aforo = turnoactualizado.aforo;
                            aforo = aforo + 1;
                            Turno.findByIdAndUpdate(asist.turno, { aforo: aforo }, (err, turnoUpdated) => {
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
                                        Asist.findByIdAndRemove(id, (err, asistenciaRemovida) => {

                                            if (err) {
                                                res.status(500).send({
                                                    message: 'Error al borrar asistencia'
                                                });
                                            } else {
                                                if (!asistenciaRemovida) {
                                                    res.status(404).send({
                                                        message: 'asistencia no  se pudo eliminar'
                                                    });
                                                } else {
                                                    res.status(200).send({
                                                        asist: asistenciaRemovida
                                                    });

                                                }
                                            }
                                        });



                                    }
                                }
                            });




                        }
                    }
                });

            }
        }
    });
}


module.exports = {
    getAsist,
    saveAsist,
    getAsistencias,
    deleteAsist,
    getAsistenciasCliente,
    deleteAsistencia

}
