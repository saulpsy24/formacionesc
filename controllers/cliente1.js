'use strict'
//IMPORTANDO LIBRERIAS
var Cliente = require('../models/cliente');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');


//METODO PARA registro/login USUARIOS
function saveUser(req, res) {
    var user = new Cliente();

    var params = req.body;
    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_ADMIN';
    user.image = 'null';
    user.nameEstablishment= params.nameEstablishment;
    user.code =params.code;
    user.phone= params.phone;
    user.zip= params.zip;
    user.province= params.province;
    user.nifCif= params.nifCif;
    user.street= params.street;
    user.brandV= params.brandV;
    user.brandRG=params.brandRG;
    user.brandSK=params.brandSK;
    user.brandLR=params.brandLR;
    var email = user.email;
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
                    user.password = hash;

                    if (user.name != null && user.surname != null && user.email != null) {
                        //guardar en DB

                        user.save((err, userStored) => {
                            if (err) {
                                res.status(500).send({
                                    message: 'No se gurdaron datos'
                                });

                            } else {
                                if (!userStored) {
                                    res.status(404).send({
                                        message: 'No se registro a nadie'
                                    });
                                } else {
                                    res.status(200).send({
                                        user: userStored,

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
            user.password='FormacionesCAE';
            params.gethash = true;
            Cliente.findOne({
                email: email.toLowerCase()
            }, (err, user) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error en la peticion'
                    });
                } else {
                    if (!user) {
                        res.status(404).send({
                            message: 'Usuario no existe'
                        });
                    } else {
                        //checar password
                        bcrypt.compare(password, user.password, function (err, check) {
                            if (check) {
                                //devolver datos de ususario logueado
                                if (params.gethash) {
                                    //devolver un token jwt
                                    res.status(200).send({
                                        token: jwt.createToken(user),
                                        
                                    });

                                } else {
                                    res.status(200).send({
                                        user
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
function updateUser(req, res) {
    var userId = req.params.id;
    var update = req.body;

    if (update.password) {
        //ecnriptar pasword
        bcrypt.hash(update.password, null, null, function (err, hash) {
            var user = hash;
            update.password = user;


            Cliente.findByIdAndUpdate(userId, update, (err, userUpdated) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error al actualizar usuario'
                    });
                } else {
                    if (!userUpdated) {
                        res.status(404).send({
                            message: 'No se pudo actualizar usuario'
                        });

                    } else {
                        res.status(200).send({
                            user: userUpdated
                        });

                    }
                }
            });
        });

    } else {
        Cliente.findByIdAndUpdate(userId, update, (err, userUpdated) => {
            if (err) {
                res.status(500).send({
                    message: 'Error al actualizar usuario'
                });
            } else {
                if (!userUpdated) {
                    res.status(404).send({
                        message: 'No se pudo actualizar usuario'
                    });

                } else {
                    res.status(200).send({
                        user: userUpdated
                    });

                }
            }
        });
    }

}
function loginUser(req,res){        

            //si ya esta registrado loguear
            user.password='FormacionesCAE';
            params.gethash = true;
            Cliente.findOne({
                email: email.toLowerCase()
            }, (err, user) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error en la peticion'
                    });
                } else {
                    if (!user) {
                        res.status(404).send({
                            message: 'Usuario no existe'
                        });
                    } else {
                        //checar password
                        bcrypt.compare(password, user.password, function (err, check) {
                            if (check) {
                                //devolver datos de ususario logueado
                                if (params.gethash) {
                                    //devolver un token jwt
                                    res.status(200).send({
                                        token: jwt.createToken(user),
                                        
                                    });

                                } else {
                                    res.status(200).send({
                                        user
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
module.exports = {
    saveUser,
    updateUser,
    loginUser
}
