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

function getSpace(req, res) {
    var idEspacio = req.params.id;
    Espacio.findById(idEspacio, (err, espacio) => {
        if (err) {
            res.status(500).send({
                message: 'Error al hacer la busqueda'
            });
        } else {
            if (!espacio) {
                res.status(404).send({
                    message: 'No se encontro el Espacio'
                });
            } else {
                res.status(200).send({
                    espacio
                });
            }
        }
    });
}

function saveSpace(req, res) {
    var espacio = new Espacio();
    var params = req.body;
    espacio.name = params.name;
    espacio.address = params.address;
    espacio.country = params.country;
    espacio.local = params.local;
    espacio.phone = params.phone;
    espacio.fax = params.fax;
    espacio.image = 'null';

    espacio.save((err, espacioStored) => {
        if (err) {
            res.status(500).send({
                message: 'error al conectar al server'
            });

        } else {
            if (!espacioStored) {
                res.status(404).send({
                    message: 'No se guardo el espacio'
                });
            } else {
                res.status(200).send({
                    espacio: espacioStored
                });
            }
        }

    });
}

//Metodo para ver artistas por pagina
function getEspacios(req, res) {
    if (req.params.page) {
        var page = req.params.page;
    } else {
        var page = 1;
    }

    var itemsperpage = 3;

    Espacio.find().sort('name').paginate(page, itemsperpage, function (err, espacios, total) {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion al server'
            });
        } else {
            if (!espacios) {
                res.status(404).send({
                    message: 'No hay Espacios'
                });
            } else {
                return res.status(200).send({
                    pages: total,
                    espacios: espacios
                });
            }
        }

    });
}


//metodo para actualizar artistas
function updateEspacio(req, res) {
    var espacioId = req.params.id;
    var update = req.body;

    Espacio.findByIdAndUpdate(espacioId, update, (err, espacioUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al actualizar espacio'
            });
        } else {
            if (!espacioUpdated) {
                res.status(404).send({
                    message: 'No se pudo actualizar Espacio'
                });

            } else {
                res.status(200).send({
                    espacio: espacioUpdated
                });

            }
        }
    });
}

//METODO PARA BORRAR ARTISTAS
function deleteEspacio(req, res) {
    var espacioId = req.params.id;
    Espacio.findByIdAndRemove(espacioId, (err, espacioRemoved) => {
        if (err) {
            res.status(500).send({
                message: 'Error al borrar espacio'
            });
        } else {
            if (!espacioRemoved) {
                res.status(404).send({
                    message: 'Espacio no  se pudo eliminar'
                });
            } else {

                Sala.find({
                    space: espacioRemoved._id
                }).remove((err, salaRemoved) => {
                    if (err) {
                        res.status(500).send({
                            message: 'Error al borrar Sala'
                        });
                    } else {
                        if (!salaRemoved) {
                            res.status(404).send({
                                message: 'Sala no  se pudo eliminar'
                            });
                        } else {
                            Dossiere.find({
                                space: espacioRemoved._id
                            }).remove((err, dossiereRemoved) => {
                                if (err) {
                                    res.status(500).send({
                                        message: 'Error al borrar Dossiere'
                                    });
                                } else {
                                    if (!dossiereRemoved) {
                                        res.status(404).send({
                                            message: 'Dossiere no  se pudo eliminar'
                                        });
                                    } else {

                                        Evento.find({
                                            space: espacioRemoved._id
                                        }).remove((err, eventoRemoved) => {
                                            if (err) {
                                                res.status(500).send({
                                                    message: 'Error al borrar Evento'
                                                });
                                            } else {
                                                if (!eventoRemoved) {
                                                    res.status(404).send({
                                                        message: 'Evento no  se pudo eliminar'
                                                    });
                                                } else {
                                                    Turno.find({
                                                        event: eventoRemoved._id
                                                    }).remove((err, TurnoRemoved) => {
                                                        if (err) {
                                                            res.status(500).send({
                                                                message: 'Error al borrar turno'
                                                            });
                                                        } else {
                                                            if (!TurnoRemoved) {
                                                                res.status(404).send({
                                                                    message: 'Turno no  se pudo eliminar'
                                                                });
                                                            } else {
                                                                Asist.find({
                                                                    turno: TurnoRemoved._id
                                                                }).remove((err, asistenciaRemoved) => {
                                                                    if (err) {
                                                                        res.status(500).send({
                                                                            message: 'Error al borrar cupo problema con server'
                                                                        });
                                                                    } else {
                                                                        if (!asistenciaRemoved) {
                                                                            res.status(404).send({
                                                                                message: 'Error al borrar cupo'
                                                                            });
                                                                        } else {
                                                                            res.status(200).send({
                                                                                space: espacioRemoved
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
                    }
                });


            }

        }
    });
}



//metodo para cargar imagenes de artista.

function uploadImage(req, res) {
    var espacioId = req.params.id;
    var file_name = 'No Subido...';
    if (req.files) {
        var file_path = req.files.image.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[2];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif' || file_ext == 'jpeg') {
            Espacio.findByIdAndUpdate(espacioId, {
                image: file_name
            }, (err, espacioUpdated) => {

                if (!espacioUpdated) {
                    res.status(404).send({
                        message: 'Ocurrio un error al actualizar Espacio'
                    });

                } else {
                    res.status(200).send({
                        espacio: espacioUpdated
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
    var path_file = './uploads/espacios/' + imageFile;
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
    getSpace,
    saveSpace,
    getEspacios,
    updateEspacio,
    deleteEspacio,
    uploadImage,
    getImageFile

};
