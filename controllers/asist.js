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
var correo = require('../models/email');
var Turno = require('../models/turno');
var Cliente = require('../models/cliente')
var Notificacion = require('../models/notificacion')
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
    asist.check = params.check;

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
                                                Cliente.findById(asistSaved.cliente).exec((err, cliente) => {
                                                    if (err) {
                                                        res.status(500).send({ message: 'Error conectando al sv' });
                                                    } else {
                                                        if (!cliente) {
                                                            res.status(404).send({ message: 'no existe cliente' });
                                                        } else {
                                                            Evento.findById(turnoUpdated.event).exec((err, evento) => {
                                                                if (err) {
                                                                    res.status(500).send({ message: 'error en server' });
                                                                } else {
                                                                    if (!evento) {
                                                                        res.status(404).send({ message: 'no hay evento' });
                                                                    } else {
                                                                        var noty = new Notificacion();
                                                                        noty.date = Date();
                                                                        noty.body = 'El cliente: ' + cliente.name + ' se inscribio al evento ' + evento.title + ' en turno: ' + turnoUpdated.name + ' .';
                                                                        console.log(noty.body);
                                                                        noty.save((err, notySaved) => {
                                                                            if (err) {
                                                                                res.status(500).send({ message: 'error en server' });
                                                                            } else {
                                                                                if (!notySaved) {
                                                                                    res.status(404).send({ message: 'no hay notificacion' });
                                                                                } else {
                                                                                    res.status(200).send({
                                                                                        asistSaved,
                                                                                        turnoUpdated,
                                                                                        notySaved



                                                                                    });
                                                                                }
                                                                            }

                                                                        })


                                                                    }
                                                                }

                                                            });





                                                        }
                                                    }

                                                })




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

function sacarcsv(req, res) {
    const Json2csvParser = require('json2csv').Parser;
    const fields = [{
        label: 'Nombre', value: 'cliente.name'
    }, {
        label: 'Apellidos',
        value: 'cliente.surname'
    }, {
        label: 'Farmacia',
        value: 'cliente.nameEstablishment'
    }, { label: 'email', value: 'cliente.email' }, { label: 'Codigo de Farmacia', value: 'cliente.code' }, { label: 'Telefono', value: 'cliente.phone' },
    { label: 'CP', value: 'cliente.zip' }, { label: 'NIF/CIF', value: 'cliente.nifCif' }, { label: 'Direccion', value: 'cliente.street' },
    { label: 'VICHY', value: 'cliente.brandV' }, { label: 'ROCHE-POSAY', value: 'cliente.brandLR' }, { label: 'RogerGallet', value: 'cliente.brandRG' }, { label: 'SKINS', value: 'cliente.brandSK' },
    { label: 'CeraVe', value: 'cliente.brandCV' }, { label: 'Rol', value: 'cliente.role' },
    { label: 'Evento', value: 'turno.event.title' },{label:'Campaña',value:'turno.event.campana'},{label:'Valor',value:'turno.event.value'},{ label: 'Turno', value: 'turno.name' }, { label: 'Asistio', value: 'check' }];
    const json2csvParser = new Json2csvParser({ fields });


    var turnoId = req.params.id;
    if (!turnoId) {
        //sacar todos los albums de la DB
        var find = Asist.find({}).sort('name').populate({
            path: 'turno',
            populate: {
                path: 'event'
            }


        }).populate({
            path: 'cliente'
        });
    } else {
        var find = Asist.find({
            turno: turnoId
        }).sort('name').populate({
            path: 'turno',
            populate: {
                path: 'event'
            }


        }).populate({
            path: 'cliente'
        });
    }

    find.exec((err, asistencia) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!asistencia) {
                res.status(404).send({
                    message: 'no hay asistencias  asociadas'
                });
            } else {

                const csv = json2csvParser.parse(asistencia);
                var path = './exports/csv' + Date.now() + '.csv';
                fs.writeFile(path, csv, function (err, data) {
                    if (err) { throw err; }
                    else {
                        console.log('file Created');
                        res.setHeader('Content-disposition', 'attachment; filename=data.csv');
                        res.set('Content-Type', 'text/csv');
                        res.download(path)
                    }
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
function deleteAsistencia(req, res) {
    var idAsist = req.params.id;
    Asist.findByIdAndRemove(idAsist, (err, asistRemoved) => {
        if (err) {
            res.send({ message: 'nosepudo' });

        } else {
            res.send({ asist: asistRemoved });
        }

    });
}
//Metodo para borrar canciones.
function deleteAsist(req, res) {


    var asist = new Asist();

    var aforo2 = new Turno();


    var id = req.params.id;
    var id2 = req.params.turno;

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
                    message: 'No existe el turno. '
                });
            } else {
                Turno.findById(id2).exec((err, turnoactualizado) => {
                    if (err) {
                        res.status(500).send({
                            message: 'error en la peticion'
                        });

                    } else {
                        if (!turnoactualizado) {
                            res.status(404).send({ message: 'No existe el turno.. ' });
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

function ActulizaAsist(req, res) {
    var asistid = req.params.id;
    var update = req.body;

    Asist.findByIdAndUpdate(asistid, update, (err, asistenciaUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar Asistencia'
            });
        } else {
            if (!asistenciaUpdated) {
                res.status(404).send({
                    message: 'No se pudo actualizar Asistencia'
                });

            } else {
                res.status(200).send({
                    asist: asistenciaUpdated
                });

            }
        }
    });
}
var handlebars = require('handlebars');
var nodemailer = require('nodemailer');
function sendMail(req, res) {
    var email = new correo();
    var params = req.body;
    email.username = params.username;
    email.evento= params.evento;
    email.fecha = params.fecha;
    email.lugar= params.lugar;
    email.gmaps =params.gmaps;
    email.direccion = params.direccion;
    email.destino = params.destino;


    var readHTMLFile = function (path, callback) {
        fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };
    readHTMLFile(__dirname + '/template.html', function (err, html) {
        var template = handlebars.compile(html);
        var replacements = {
            username: email.username,
            evento:email.evento,
            fecha:email.fecha,
            lugar: email.lugar,
            gmaps:email.gmaps,
            direccion:email.direccion,
        };
   
    var params = req.params.html;

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sarlmnt.soul@gmail.com',
            pass: 's@ul24zoo'
        }
    });
    var mailOptions = {
        from: 'Ing.Saul',
        to: email.destino,
        subject: 'Tu evento',
        html: template(replacements),
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500, error.message);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(info);
        }
    });
});
}



module.exports = {
    getAsist,
    saveAsist,
    getAsistencias,
    deleteAsist,
    getAsistenciasCliente,
    deleteAsistencia,
    ActulizaAsist,
    sacarcsv,
    sendMail

}
