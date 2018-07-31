'use strict'
var path = require('path');
var fs = require('fs');
var Cliente = require('../models/cliente');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var express = require('express');
var router = express.Router;

var moment = require('moment');

const json2csv = require('json2csv').parse;


//METODO PARAregistro/login USUARIOS
function savecliente(req, res) {
    var cliente = new Cliente();

    var params = req.body;
    cliente.name = params.name;
    cliente.surname = params.surname;
    cliente.email = params.email;
    cliente.role = 'ROLE_USER';
    cliente.image = 'avatar.png';
    cliente.nameEstablishment = params.nameEstablishment;
    cliente.code = params.code;
    cliente.phone = params.phone;
    cliente.zip = params.zip;
    cliente.province = params.province;
    cliente.nifCif = params.nifCif;
    cliente.street = params.street;
    cliente.brandV = params.brandV;
    cliente.brandRG = params.brandRG;
    cliente.brandSK = params.brandSK;
    cliente.brandLR = params.brandLR;
    var email = cliente.email;
    var password = "FormacionesCAE";

    //validando que el correo no esta registrado

    Cliente.findOne({
        'email': email
    }, function (err, elements) {

        if (err) {
            res.status(500).json({
                error: false,
                message: err.message
            });
        }
        if (!elements) {

            if (password) {
                //ecnriptar pasword
                bcrypt.hash(password, null, null, function (err, hash) {
                    cliente.password = hash;

                    if (cliente.name != null && cliente.surname != null && cliente.email != null) {
                        //guardar en DB

                        cliente.save((err, clienteStored) => {
                            if (err) {
                                res.status(500).send({
                                    message: 'No se gurdaron datos'
                                });

                            } else {
                                if (!clienteStored) {
                                    res.status(404).send({
                                        message: 'No se registro a nadie'
                                    });
                                } else {
                                    //si ya esta registrado loguear
                                    cliente.password = 'FormacionesCAE';
                                    params.gethash = true;
                                    Cliente.findOne({
                                        email: email.toLowerCase()
                                    }, (err, cliente) => {
                                        if (err) {
                                            res.status(500).send({
                                                message: 'Error en la peticion'
                                            });
                                        } else {
                                            if (!cliente) {
                                                res.status(404).send({
                                                    message: 'Usuario no existe'
                                                });
                                            } else {
                                                //checar password
                                                bcrypt.compare(password, cliente.password, function (err, check) {
                                                    if (check) {
                                                        //devolver datos de ususario logueado
                                                        if (params.gethash) {
                                                            //devolver un token jwt

                                                            res.status(200).send({
                                                                token: jwt.createToken(cliente),
                                                                cliente: clienteStored

                                                            });

                                                        } else {
                                                            res.status(200).send({
                                                                cliente
                                                            });
                                                        }
                                                    } else {
                                                        res.status(404).send({
                                                            message: 'Usuario no pudo loggear'
                                                        });
                                                    }
                                                });
                                            }
                                        }

                                    });
                                }

                            }


                        });
                    } else {
                        res.status(500).send({
                            message: 'Faltan datos'
                        });
                    }


                });
            } else {
                res.status(500).send({
                    message: 'Introduce el pass',

                });
            }

        } else {
            //si ya esta registrado loguear
            cliente.password = 'FormacionesCAE';
            params.gethash = true;
            Cliente.findOne({
                email: email.toLowerCase()
            }, (err, cliente) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error en la peticion'
                    });
                } else {
                    if (!cliente) {
                        res.status(404).send({
                            message: 'Usuario no existe'
                        });
                    } else {
                        //checar password
                        bcrypt.compare(password, cliente.password, function (err, check) {
                            if (check) {
                                //devolver datos de ususario logueado
                                if (params.gethash) {
                                    //devolver un token jwt

                                    res.status(200).send({
                                        token: jwt.createToken(cliente),

                                    });

                                } else {
                                    res.status(200).send({
                                        cliente
                                    });
                                }
                            } else {
                                res.status(404).send({
                                    message: 'Usuario no pudo loggear'
                                });
                            }
                        });
                    }
                }

            });
        }


    });

}
//METODO PARA ACTUALIZAR USUARIOS
function updatecliente(req, res) {
    var clienteId = req.params.id;

    // var update = {
    //     name: req.body.name,
    //     nameEstablishment: req.body.nameEstablishment,
    //     surname: req.body.surname,
    //     email: req.body.email,
    //     code: req.body.code,
    //     phone: req.body.phone,
    //     zip: req.body.zip,
    //     province: req.body.province,
    //     nifCif: req.body.nifCif,
    //     street: req.body.street,
    //     image: req.body.image,
    //     brandV: req.body.brandV,
    //     brandRG: req.body.brandRG,
    //     brandLR: req.body.brandLR,
    //     brandSK: req.body.brandSK,
    //     file: req.body.file,
    //     password:req.body.password,

    // };

    var update =req.body;

    if (update.password) {
        //ecnriptar pasword
        bcrypt.hash(update.password, null, null, function (err, hash) {
            var cliente = hash;
            update.password = cliente;


            Cliente.findByIdAndUpdate(clienteId, update, (err, clienteUpdated) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar usuario'
                    });
                } else {
                    if (!clienteUpdated) {
                        res.status(404).send({
                            message: 'No se pudo actualizar usuario'
                        });

                    } else {
                        res.status(200).send({
                            message: 'entro al metodo',
                            cliente: clienteUpdated
                        });

                    }
                }
            });
        });

    } else {
        Cliente.findByIdAndUpdate(clienteId, update, (err, clienteUpdated) => {
            if (err) {
                res.status(500).send({
                    message: 'Error al actualizar usuario'
                });
            } else {
                if (!clienteUpdated) {
                    res.status(404).send({
                        message: 'No se pudo actualizar usuario'
                    });

                } else {
                    res.status(200).send({
                        cliente: clienteUpdated
                    });

                }
            }
        });
    }

}
function logincliente(req, res) {
    var params = req.body;
    var email = params.email;
    var password = params.password;
    Cliente.findOne({
        email: email.toLowerCase()
    }, (err, cliente) => {
        if (err) {
            res.status(500).send({
                message: 'Error en la peticion'
            });
        } else {
            if (!cliente) {
                res.status(404).send({
                    message: 'Usuario no existe'
                });
            } else {
                //checar password
                bcrypt.compare(password, cliente.password, function (err, check) {
                    if (check) {
                        //devolver datos de ususario logueado
                        if (params.gethash) {
                            //devolver un token jwt
                            res.status(200).send({
                                token: jwt.createToken(cliente),
                            });

                        } else {
                            res.status(200).send({
                                cliente
                            });
                        }
                    } else {
                        res.status(404).send({
                            message: 'Usuario no pudo loggear'
                        });
                    }
                });
            }
        }

    });
}
function uploadImageCliente(req, res) {
    var clienteId = req.params.id;
    var file_name = 'No Subido...';
    if (req.files) {
        var file_path = req.files.image.path;
       // var file_split = file_path.split('\\');
        var file_split = file_path.split('/');
        var file_name = file_split[2];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif' || file_ext == 'jpeg') {
            Cliente.findByIdAndUpdate(clienteId, {
                image: file_name
            }, (err, clienteUpdated) => {

                if (!clienteUpdated) {
                    res.status(404).send({
                        message: 'Ocurrio un error al actualizar Cliente'
                    });

                } else {
                    res.status(200).send({
                        cliente: clienteUpdated,
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
    var path_file = './uploads/avatar/' + imageFile;
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



function updateclienteAdmin(req, res) {
    var clienteId = req.params.id;

    var update = {
        email: req.body.email,
        image: req.body.image,
        surname: req.body.surname,
        phone: req.body.phone,
        role: req.body.role,
        password:req.body.password,
    };

    if (update.password) {
        //ecnriptar pasword
        bcrypt.hash(update.password, null, null, function (err, hash) {
            var cliente = hash;
            update.password = cliente;


            Cliente.findByIdAndUpdate(clienteId, update, (err, clienteUpdated) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar usuario'
                    });
                } else {
                    if (!clienteUpdated) {
                        res.status(404).send({
                            message: 'No se pudo actualizar usuario'
                        });

                    } else {
                        res.status(200).send({
                            message: 'entro al metodo',
                            cliente: clienteUpdated
                        });

                    }
                }
            });
        });

    } else {
        Cliente.findByIdAndUpdate(clienteId, update, (err, clienteUpdated) => {
            if (err) {
                res.status(500).send({
                    message: 'Error al actualizar usuario'
                });
            } else {
                if (!clienteUpdated) {
                    res.status(404).send({
                        message: 'No se pudo actualizar usuario'
                    });

                } else {
                    res.status(200).send({
                        cliente: clienteUpdated
                    });

                }
            }
        });
    }

}
function sacarcsv(req, res) {
    const Json2csvParser = require('json2csv').Parser;
    const fields = [{
        label: 'Nombre', value: 'name'
    }, {
        label: 'Apellidos',
        value: 'surname'
    }, {
        label: 'Nombre del Establecimiento',
        value: 'nameEstablishment'
    }, 'email', 'code', 'phone', 'zip', 'nifCif', 'street', 'brandV', 'brandLR', 'brandRG', 'brandSK', 'role'];
    const json2csvParser = new Json2csvParser({ fields });


    var turnoId = req.params.id;
    if (!turnoId) {
        //sacar todos los albums de la DB
        var find = Cliente.find({}).sort('name');
    } else {
        //mostrar solamente los albums de ese artista
        var find = cliente.find({
            turno: turnoId
        }).sort('name');
    }
    find.exec((err, clientes) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!clientes) {
                res.status(404).send({
                    message: 'no hay asistencias  asociadas'
                });
            } else {

                const csv = json2csvParser.parse(clientes);
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


function getClientes(req, res) {
    var clienteId = req.params.space;
    if (!clienteId) {
        //sacar todos los albums de la DB
        var find = Cliente.find({}).sort('name');
    } else {
        //mostrar solamente los albums de ese artista
        var find = Cliente.find({
            _id: ObjectId(clienteId)
        }).sort('name');
    }
    find.exec((err, clientes) => {
        if (err) {
            res.status(500).send({
                message: 'error'
            });
        } else {
            if (!clientes) {
                res.status(404).send({
                    message: 'no hay clientes asociadas'
                });
            } else {
                res.status(200).send({
                    cliente: clientes
                });
            }
        }
    });
}
function deleteCliente(req, res) {



    var id = req.params.id;
    
    Cliente.findByIdAndRemove(id, (err, clienteRemovido) => {

        if (err) {
            res.status(500).send({
                message: 'Error al borrar cliente'
            });
        } else {
            if (!clienteRemovido) {
                res.status(404).send({
                    message: 'El cliente no  se pudo eliminar'
                });
            } else {
                res.status(200).send({
                    cliente: clienteRemovido
                });

            }
        }
    });
}



function getClienteName(req, res) {
    var name = req.params.name;



    Cliente.find({ 'name': name }).exec((err, cliente) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!cliente) {
                res.status(404).send({
                    message: 'No existe el evento'
                });
            } else {
                res.status(200).send({
                    cliente
                });
            }
        }
    });
}
function getCliente(req, res) {
    var id = req.params.id;



    Cliente.findById(id).exec((err, cliente) => {
        if (err) {
            res.status(500).send({
                message: 'error en la peticion'
            });
        } else {
            if (!cliente) {
                res.status(404).send({
                    message: 'No existe el evento'
                });
            } else {
                res.status(200).send({
                    cliente
                    // password =''
                });
            }
        }
    });
}
function uploadFile(req, res) {
    var clienteId = req.params.id;
    var file_name = 'No Subido...';
    if (req.files) {
        var file_path = req.files.file.path;
        // var file_split = file_path.split('\\');
        var file_split = file_path.split('/');
        var file_name = file_split[2];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if (file_ext == 'pdf' || file_ext == 'docx' || file_ext == 'doc' || file_ext == 'jpeg') {
            Cliente.findByIdAndUpdate(clienteId, {
                file: file_name
            }, (err, clienteUpdated) => {

                if (!clienteUpdated) {
                    res.status(404).send({
                        message: 'Ocurrio un error al actualizar Cliente'
                    });

                } else {
                    res.status(200).send({
                        cliente: clienteUpdated,
                        file: file_name
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
function getFile(req, res) {
    var file = req.params.file;
    var path_file = './uploads/fichas/' + file;
    fs.exists(path_file, function (exists) {
        if (exists) {
            res.sendFile(path.resolve(path_file));
        } else {
            res.status(200).send({
                message: 'No existe la ficha'
            });
        }
    });

}
function storeUser(req, res) {
    var cliente = new Cliente();
    var params = req.body;
    cliente.name = params.name;
    cliente.surname = params.surname;
    cliente.email = params.email;
    cliente.role = params.role;
    cliente.image = 'avatar.png';
    cliente.nameEstablishment = params.nameEstablishment;
    cliente.code = params.code;
    cliente.phone = params.phone;
    cliente.zip = params.zip;
    cliente.province = params.province;
    cliente.nifCif = params.nifCif;
    cliente.street = params.street;
    cliente.brandV = params.brandV;
    cliente.brandRG = params.brandRG;
    cliente.brandSK = params.brandSK;
    cliente.brandLR = params.brandLR;
   var  password=params.password;

   Cliente.findOne({
    'email': cliente.email
}, function (err, elements) {
    if(!elements){

  
    if (password) {
        //ecnriptar pasword
        bcrypt.hash(password, null, null, function (err, hash) {
            cliente.password = hash;
        });




    cliente.save((err, clienteStored) => {
        if (err) {
            res.status(500).send({
                message: 'Error'
            });

        } else {
            if (!clienteStored) {
                res.status(404).send({
                    message: 'No se guardo Cliente'
                });
            } else {
                res.status(200).send({
                    cliente: clienteStored
                });
            }
        }
    });
}}else{
    res.status(500).send({message:'Ya hay un registro previo'});
}});
    
}

module.exports = {
    savecliente,
    updatecliente,
    logincliente,
    uploadImageCliente,
    getImageFile,
    updateclienteAdmin,
    sacarcsv,
    getClientes,
    deleteCliente,
    getClienteName,
    uploadFile,
    getFile,
    getCliente,
    storeUser
}
 