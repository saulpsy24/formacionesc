'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Zionzoo24#_2018';

exports.ensureAuth = function(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message:'La peticion no tiene la auth'});
       
       }
    var token= req.headers.authorization.replace(/['"]+/g,'');
    try{
        var payload = jwt.decode(token,secret);
        if(payload.exp <= moment().unix()){
           return res.status(401).send({message:'Token expiro'});
           }
        

    }catch(ex){
        console.log();
        return res.status(403).send({message:'Token no valido'});
    }
    req.user = payload;
    next();
};
