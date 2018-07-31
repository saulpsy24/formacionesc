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
var ObjectId = require('mongodb').ObjectId;
var dateFormat = require('dateformat');
var Notificacion= require ('../models/notificacion');
var replaceString= require('replace-string');

function getEvent(req, res) {
    var idEvent = req.params.id;

    Evento.findById(idEvent).populate({
        path: 'space'
    }).exec((err, event) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!event) {
                res.status(404).send({
                    message: 'No existe el evento'
                });
            } else {
                res.status(200).send({
                    event
                });
            }
        }
    });
}


//metodo para guardar artista sin imagen
function saveEvent(req, res) {
    var event = new Evento();
    var params = req.body;
    var noty = new Notificacion();

    event.title = params.title;
    event.description = params.description;
    event.brand = params.brand;
    event.province = params.province;
    event.visible=params.visible;
    event.direccion=params.direccion;
    event.lugar= params.lugar;
    event.gmaps=params.gmaps;
    event.dateS=params.dateS;
   event.dateE=params.dateE;
    event.value=params.value;
    event.campana=params.campana;

    event.save((err, eventStored) => {
        if (err) {
            res.status(500).send({
                message: 'Error'
            });

        } else {
            if (!eventStored) {
                res.status(404).send({
                    message: 'No se guardo evento'
                });
            } else {
                var fecha=new Date().toString("yyyyMMddHHmmss");
                replaceString(fecha,'t',' ');
                
                noty.date=fecha;
                noty.body='Se agrego evento: '+eventStored.title+' de la marca,'+eventStored.brand+'.';


                noty.save((err,notySaved)=>{
                    if(err){
                        res.status(500).send({
                            message:'No se almaceno notificación'
                        })
                    }else{
                        if(!notySaved){
                            res.status(404).send({
                                message: 'No se guardo notificacion'
                            });
                        }else{
                            
                            
                res.status(200).send({
                    event: eventStored,
                    noty:notySaved
                });

                        }
                    }
                });


            }
        }
    });
}
//Metodo para ver artistas por pagina
function getEvents(req, res) {
    var eventId = req.params.space;
    if (!eventId) {
        //sacar todos los albums de la DB
        var find = Evento.find({}).sort('name');
    } else {
        //mostrar solamente los albums de ese artista
        var find = Evento.find({
            event: eventId
        }).sort('dateS');
    }
    find.populate({
        path: 'event',

    }).exec((err, eventos) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!eventos) {
                res.status(404).send({
                    message: 'no hay eventos asociadas'
                });
            } else {
                res.status(200).send({
                    event: eventos
                });
            }
        }
    });
}
//metodo para actualizar artistas
function updateEvent(req, res) {
    var eventId = req.params.id;
    var update = req.body;

    Evento.findByIdAndUpdate(eventId, update, (err, eventUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar Evento'
            });
        } else {
            if (!eventUpdated) {
                res.status(404).send({
                    message: 'No se pudo actualizar evento'
                });

            } else {
                res.status(200).send({
                    event: eventUpdated
                });

            }
        }
    });
}
//metodo para borrar evento
function deleteEvent(req, res) {
    var eventId = req.params.id;
    Evento.findByIdAndRemove(eventId, (err, eventRemoved) => {
        if (err) {
            res.status(500).send({
                message: 'Error al borrar Evento'
            });
        } else {
            if (!eventRemoved) {
                res.status(404).send({
                    message: 'Evento no se pudo eliminar.'
                });
            } else {
                Turno.findOneAndRemove({event: eventRemoved}, function(err,turnoremoved){
                    if(err){
                        res.status(500).send({
                            message:'Error en el servidor de borrar Turno'
                        })
                    }else{
                        if(!turnoremoved){
                            res.status(404).send({message:'not found'});

                        }else{
                            Asist.findOneAndRemove({turno:turnoremoved},function(err,asistenciaremovida){
                                if(err){

                                }else{
                                    if(!asistenciaremovida){

                                    }else{
                                        res.status(200).send({message:'Evento Borrado Exitosamente',
                                        asist:asistenciaremovida,
                                        turno:turnoremoved,
                                        event:eventRemoved
                                    
                                        })
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


//FUNCIONES NUEVAS
function getByZone(req, res) {
    var locali = req.params.local;

    Evento.find().populate({
        path: 'space',
        match: {
            local: locali
        }
    }).exec((err, event) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!event) {
                res.status(404).send({
                    message: 'No existe el evento'
                });
            } else {
                res.status(200).send({
                    event
                });
            }
        }
    });


}
function getBySpace(req, res) {
    var name = req.params.name;

    Evento.find().populate({
        path: 'space',
        match: {
            name: name
        }
    }).exec((err, event) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!event) {
                res.status(404).send({
                    message: 'No existe el evento'
                });
            } else {
                res.status(200).send({
                    event
                });
            }
        }
    });


}
function uploadImageEvent(req, res) {
    var eventiD = req.params.id;
    var file_name = 'No Subido...';
    if (req.files) {
        var file_path = req.files.image.path;
        //var file_split = file_path.split('\\');
       var file_split = file_path.split('/');
        var file_name = file_split[2];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif' || file_ext == 'jpeg') {
            Evento.findByIdAndUpdate(eventiD, {
                image: file_name
            }, (err, eventUpdated) => {

                if (!eventUpdated) {
                    res.status(404).send({
                        message: 'Ocurrio un error al actualizar Evento'
                    });

                } else {
                    res.status(200).send({
                        event: eventUpdated,
                        image: file_name
                    });

                }

            });
        } else {
            res.status(200).send({
                message: 'Extension del archivo no valido'
            });
        }

    } else {
        res.status(200).send({
            message: 'No has cargado ninguna imagen'
        });
    }
}
//METODO PARA OBTENER LA IMAGEN DE artista
function getImageFile(req, res) {
    var imageFile = req.params.imageFile;
    var path_file = './uploads/events/' + imageFile;
    fs.exists(path_file, function (exists) {
        if (exists) {
            res.sendFile(path.resolve(path_file));
        } else {
            res.status(200).send({
                message: 'No existe la imagen'
            });
        }
    });

}




module.exports = {
    getEvent,
    saveEvent,
    getEvents,
    updateEvent,
    deleteEvent,
    getByZone,
    getBySpace,
    getImageFile,
    uploadImageEvent


};


