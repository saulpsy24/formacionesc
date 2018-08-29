webpackJsonp([1,4],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssistantService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssistantService = (function () {
    function AssistantService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    AssistantService.prototype.addAssistant = function (token, assistant) {
        var params = JSON.stringify(assistant);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + '/asist', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AssistantService.prototype.getAsistencias = function (token, idturno) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'asistencias/' + idturno, options).map(function (res) { return res.json(); });
    };
    AssistantService.prototype.getAsistenciasCliente = function (token, iduser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'asistenciasc/' + iduser, options).map(function (res) { return res.json(); });
    };
    AssistantService.prototype.deleteAsistencia = function (token, asistencia) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-type': 'application/json',
            'authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'asiste/' + asistencia, options)
            .map(function (res) { return res.json(); });
    };
    AssistantService.prototype.ActulizaAsist = function (token, idasistencia, asist) {
        var params = JSON.stringify(asist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'authorization': token
        });
        return this._http.put(this.url + 'asist/' + idasistencia, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    AssistantService.prototype.getReporteAsistencia = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'getreporte-asist/' + id, options).map(function (res) { return res.json(); });
    };
    AssistantService.prototype.enviarMail = function (token, mail) {
        var params = JSON.stringify(mail);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'lista/mail', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AssistantService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AssistantService);
    return AssistantService;
    var _a;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/assistant.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventoService = (function () {
    function EventoService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    EventoService.prototype.getEspacios = function (token, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-type': 'application/json',
            'authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'events/' + page, options)
            .map(function (res) { return res.json(); });
    };
    EventoService.prototype.getEspacio = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-type': 'application/json',
            'authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'event/' + id, options)
            .map(function (res) { return res.json(); });
    };
    EventoService.prototype.addEspacio = function (token, evento) {
        var params = JSON.stringify(evento);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-type': 'application/json',
            'authorization': token
        });
        return this._http.post(this.url + 'event', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EventoService.prototype.editEspacio = function (token, id, evento) {
        var params = JSON.stringify(evento);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-type': 'application/json',
            'authorization': token
        });
        return this._http.put(this.url + 'event/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EventoService.prototype.borrarEspacio = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-type': 'application/json',
            'authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'event/' + id, options)
            .map(function (res) { return res.json(); });
    };
    EventoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EventoService);
    return EventoService;
    var _a;
}()); //llave final de todo
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/espacio.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TurnoService = (function () {
    function TurnoService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    TurnoService.prototype.addTurno = function (token, turno) {
        var params = JSON.stringify(turno);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + '/turno', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    TurnoService.prototype.getTurnos = function (token, eventId) {
        if (eventId === void 0) { eventId = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (eventId == null) {
            return this._http.get(this.url + 'turnos/', options).map(function (res) { return res.json(); });
        }
        else {
            return this._http.get(this.url + 'turnos/' + eventId, options).map(function (res) { return res.json(); });
        }
    };
    TurnoService.prototype.getTurno = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'turno/' + id, options).map(function (res) { return res.json(); });
    };
    TurnoService.prototype.editTurno = function (token, id, turno) {
        var params = JSON.stringify(turno);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'turno/' + id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    TurnoService.prototype.deleteTurno = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + '/turno/' + id, options).map(function (res) { return res.json(); });
    };
    TurnoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TurnoService);
    return TurnoService;
    var _a;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/turno.service.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteService = (function () {
    function ClienteService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    ClienteService.prototype.signup = function (cliente_to_login, gethash) {
        if (gethash === void 0) { gethash = null; }
        if (gethash != null) {
            cliente_to_login.gethash = gethash;
        }
        var json = JSON.stringify(cliente_to_login);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.getidentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefinied") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    ClienteService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    ClienteService.prototype.update_cliente = function (cliente_to_update) {
        var params = JSON.stringify(cliente_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.put(this.url + 'update-user/' + cliente_to_update._id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.editCliente = function (token, id, cliente) {
        var params = JSON.stringify(cliente);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'update-user/' + id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.getClientes = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'get-clientes/', options).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.register = function (token, cliente) {
        console.log('entro al servicio ' + cliente);
        var json = JSON.stringify(cliente);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': token });
        return this._http.post(this.url + 'store', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.onDeleteEvento = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'cliente/' + id, options)
            .map(function (res) { return res.json(); });
    };
    ClienteService.prototype.filterName = function (token, name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'clientenombre/' + name, options).map(function (res) { return res.json(); });
    };
    ClienteService.prototype.getCliente = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'cliente/' + id, options).map(function (res) { return res.json(); });
    };
    ClienteService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ClienteService);
    return ClienteService;
    var _a;
}()); //llave final de todo
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/cliente.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = (function () {
    function Cliente(_id, name, nameEstablishment, surname, email, code, image, phone, zip, province, nifCif, street, brandV, brandLR, brandRG, brandSK, brandCV, password, role, file) {
        this._id = _id;
        this.name = name;
        this.nameEstablishment = nameEstablishment;
        this.surname = surname;
        this.email = email;
        this.code = code;
        this.image = image;
        this.phone = phone;
        this.zip = zip;
        this.province = province;
        this.nifCif = nifCif;
        this.street = street;
        this.brandV = brandV;
        this.brandLR = brandLR;
        this.brandRG = brandRG;
        this.brandSK = brandSK;
        this.brandCV = brandCV;
        this.password = password;
        this.role = role;
        this.file = file;
    }
    return Cliente;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/cliente.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UploadService.prototype.makeFileRequest = function (url, params, files, token, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UploadService);
    return UploadService;
    var _a;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/upload.service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Evento; });
var Evento = (function () {
    function Evento(title, description, brand, province, image, visible, direccion, lugar, gmaps, dateS, dateE, value, campana) {
        this.title = title;
        this.description = description;
        this.brand = brand;
        this.province = province;
        this.image = image;
        this.visible = visible;
        this.direccion = direccion;
        this.lugar = lugar;
        this.gmaps = gmaps;
        this.dateS = dateS;
        this.dateE = dateE;
        this.value = value;
        this.campana = campana;
    }
    return Evento;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/evento.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Turno; });
var Turno = (function () {
    function Turno(name, date_start, date_end, start_h, end_h, aforo, event) {
        this.name = name;
        this.date_start = date_start;
        this.date_end = date_end;
        this.start_h = start_h;
        this.end_h = end_h;
        this.aforo = aforo;
        this.event = event;
    }
    return Turno;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/turno.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_consulta__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_respuesta__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_espacio_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_consulta_service__ = __webpack_require__(550);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addConsultaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var addConsultaComponent = (function () {
    function addConsultaComponent(_route, _router, _clienteService, _espacioService, _consultaService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._espacioService = _espacioService;
        this._consultaService = _consultaService;
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url;
        this.consult = new __WEBPACK_IMPORTED_MODULE_2__models_consulta__["a" /* Consulta */]('', this.identity._id, '');
        this.respuesta = new __WEBPACK_IMPORTED_MODULE_3__models_respuesta__["a" /* Respuesta */]('', '', '', '');
    }
    addConsultaComponent.prototype.ngOnInit = function () {
        this.getConsultasc();
        this.getConsultas();
        console.log(this.cliente);
    };
    addConsultaComponent.prototype.getConsultasc = function () {
        var _this = this;
        this.cliente = this.identity._id;
        this._consultaService.getConsultaC(this.token, this.cliente).subscribe(function (response) {
            if (!response.consultas) {
                _this.alertMessage = 'Error en el Servidor';
                console.log('entro aqui');
            }
            else {
                _this.consultasc = response.consultas;
                console.log(_this.consultasc);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    addConsultaComponent.prototype.scrollToBottom = function () {
        this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    };
    addConsultaComponent.prototype.onSubmitResponse = function () {
        var _this = this;
        this.respuesta.cliente = this.identity._id;
        var hilo = this.respuesta.consulta;
        console.log(this.respuesta);
        this._consultaService.addRespuesta(this.token, this.respuesta).subscribe(function (response) {
            if (!response.respuesta) {
                var body = response._body;
                _this.alertMessage = body;
                console.log(response);
            }
            else {
                console.log(response.respuesta);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
        this.respuesta.body = "";
        this.getRespuestas(this.respuesta.consulta);
    };
    addConsultaComponent.prototype.getRespuestas = function (id) {
        var _this = this;
        console.log(id);
        this.respuesta.consulta = id;
        this._consultaService.getRespuestasH(this.token, id).subscribe(function (response) {
            if (!response.respuestas) {
                var body = response._body;
                _this.alertMessage = body;
                console.log(response);
            }
            else {
                _this.respuestas = response.respuestas;
                console.log(response.respuestas);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
        this.scrollToBottom();
    };
    addConsultaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.consult.cliente = this.identity._id;
        console.log(this.consult);
        this._consultaService.addconsulta(this.token, this.consult).subscribe(function (response) {
            if (!response.consulta) {
                var body = response._body;
                _this.alertMessage = body;
                console.log(response);
            }
            else {
                _this.consult = response.consulta;
                _this.alertMessage = 'Consulta creada Correctamente';
                _this.getConsultas();
                _this.getConsultasc();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    addConsultaComponent.prototype.getConsultas = function () {
        var _this = this;
        this.cliente = this.identity._id;
        this._consultaService.getConsulta(this.token).subscribe(function (response) {
            if (!response.consultas) {
                _this.alertMessage = 'Error en el Servidor';
                console.log('entro aqui');
            }
            else {
                _this.consultas = response.consultas;
                console.log(_this.consultas);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('container'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */]) === 'function' && _a) || Object)
    ], addConsultaComponent.prototype, "container", void 0);
    addConsultaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'add-espacio',
            template: __webpack_require__(708),
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_6__services_espacio_service__["a" /* EventoService */], __WEBPACK_IMPORTED_MODULE_7__services_consulta_service__["a" /* ConsultaService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_cliente_service__["a" /* ClienteService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_espacio_service__["a" /* EventoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_espacio_service__["a" /* EventoService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_consulta_service__["a" /* ConsultaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_consulta_service__["a" /* ConsultaService */]) === 'function' && _f) || Object])
    ], addConsultaComponent);
    return addConsultaComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/addconsulta.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_evento__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_espacio_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddespComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddespComponent = (function () {
    function AddespComponent(_route, _router, _clienteService, _espacioService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._espacioService = _espacioService;
        this.titulo = 'Crear Evento';
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.evento = new __WEBPACK_IMPORTED_MODULE_4__models_evento__["a" /* Evento */]('', '', '', '', '', '', '', '', '', '', '', '', '');
    }
    AddespComponent.prototype.ngOnInit = function () {
        console.log('addevento.components.ts cargado');
    };
    AddespComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.evento);
        this._espacioService.addEspacio(this.token, this.evento).subscribe(function (response) {
            _this.evento = response.event;
            if (!response.event) {
                // this.alertMessage= 'Error en el servidor';
                console.log('prueba');
                console.log(response.event);
            }
            else {
                console.log('else');
                _this.alertMessage = 'El evento se ha creado correctamente';
                _this.evento = response.event;
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                //this.alertRegister = body.message;
                console.log(error);
            }
        });
    };
    AddespComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'add-espacio',
            template: __webpack_require__(399),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_espacio_service__["a" /* EventoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_espacio_service__["a" /* EventoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_espacio_service__["a" /* EventoService */]) === 'function' && _d) || Object])
    ], AddespComponent);
    return AddespComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/addespacio.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_assistant_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var adminPanelComponent = (function () {
    function adminPanelComponent(_route, _router, _clienteService, _eventoService, _asistantService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._eventoService = _eventoService;
        this._asistantService = _asistantService;
        this.showoptions = 0;
        this.titulo = 'Panel Administrativo';
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.next_page = 1;
        this.prev_page = 1;
        this.busca = "Cliente";
    }
    adminPanelComponent.prototype.ngOnInit = function () {
        console.log('paneladmin.component.cargado');
        this.getclientes();
        //GetEventos
    };
    adminPanelComponent.prototype.getclientes = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page == 0) {
                    _this.prev_page = 1;
                }
            }
            _this._clienteService.getClientes(_this.token).subscribe(function (response) {
                if (!response.cliente) {
                    _this.alertMessage = 'Error en el Servidor';
                    console.log('entro aqui');
                }
                else {
                    _this.clientes = response.cliente;
                    console.log(_this.clientes);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    adminPanelComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
        this.showoptions = 1;
    };
    adminPanelComponent.prototype.onCancelEvento = function () {
        this.confirmado = null;
        this.showoptions = 0;
    };
    adminPanelComponent.prototype.onDeleteEvento = function (id) {
        var _this = this;
        this.showoptions = 0;
        this._clienteService.onDeleteEvento(this.token, id).subscribe(function (response) {
            if (!response.cliente) {
                _this.alertMessage('Error en el Servidor');
                console.log('if delete');
            }
            else {
                _this.getclientes();
                console.log('daniel' + response.cliente);
                console.log('else delete');
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
                console.log('error daniel');
            }
        });
    };
    adminPanelComponent.prototype.onSearchName = function (searchText) {
        var _this = this;
        console.log(searchText);
        this._clienteService.filterName(this.token, searchText).subscribe(function (response) {
            if (!response.cliente) {
                _this.alertMessage('Error en el Servidor');
                console.log('if delete');
            }
            else {
                _this.clientes = response.cliente;
                console.log('daniel' + response.cliente);
                console.log('else delete');
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
                console.log('error daniel');
            }
        });
    };
    adminPanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'adminpanel',
            template: __webpack_require__(709),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_4__services_assistant_service__["a" /* AssistantService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_assistant_service__["a" /* AssistantService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_assistant_service__["a" /* AssistantService */]) === 'function' && _e) || Object])
    ], adminPanelComponent);
    return adminPanelComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/adminpanel.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_assistant_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_assistant__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssistantaddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssistantaddComponent = (function () {
    function AssistantaddComponent(_route, _router, _clienteService, _assistantService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._assistantService = _assistantService;
        this.titulo = 'Verifica Tus Datos y Confirma tu Asistencia';
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url;
        this.assistant = new __WEBPACK_IMPORTED_MODULE_5__models_assistant__["a" /* Assistant */]('', '', false);
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
    }
    AssistantaddComponent.prototype.ngOnInit = function () {
        console.log(this.assistant);
    };
    AssistantaddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.assistant);
        this._route.params.forEach(function (params) {
            var turno_id = params['turno'];
            _this.assistant.cliente = _this.identity._id;
            _this.assistant.turno = turno_id;
            _this.assistant.check = null;
            console.log(_this.assistant);
        });
        console.log(this.assistant);
        this._assistantService.addAssistant(this.token, this.assistant).subscribe(function (response) {
            if (!response.asistSaved) {
                var body = response._body;
                _this.alertMessage = body;
                console.log(response);
                _this.alertMessage = 'Ya te habias inscrito anteriormente';
            }
            else {
                _this.assistant = response.asistSaved;
                _this.alertMessage = 'Asistencia creada Correctamente';
                _this._router.navigate(['/mis-eventos']);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    AssistantaddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'assistant-add',
            template: __webpack_require__(710),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_3__services_assistant_service__["a" /* AssistantService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_assistant_service__["a" /* AssistantService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_assistant_service__["a" /* AssistantService */]) === 'function' && _d) || Object])
    ], AssistantaddComponent);
    return AssistantaddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/asistencia-add.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteaddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteaddComponent = (function () {
    function ClienteaddComponent(_route, _router, _clienteService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._uploadService = _uploadService;
        this.title = 'Regritro de Usuarios';
        this.boton = 'Agregar Cliente';
        this.title = 'AÑADIR CLIENTE';
        this.boton = 'Agregar Cliente';
        this.cliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ROLE_USER', '');
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.token = _clienteService.getToken();
        this.identity = _clienteService.getidentity();
        if (this.identity.role == 'ROLE_ADMIN') {
            this.admin = true;
            console.log(this.identity);
        }
        else {
            this.admin = null;
            console.log(this.identity);
        }
        //  this.clientHeight = window.innerHeight; 
    }
    ClienteaddComponent.prototype.ngOnInit = function () {
        console.log('clienteadd.component.cargado');
    };
    ClienteaddComponent.prototype.toggleVisibility = function (evento) {
        console.log(evento);
    };
    ClienteaddComponent.prototype.update = function () {
        console.log('entra');
    };
    ClienteaddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._clienteService.register(this.token, this.cliente).subscribe(function (response) {
            console.log('es esto' + _this.cliente);
            if (!response.cliente) {
                _this.errorMessage = 'Error en el Servidor';
            }
            else {
                _this.errorMessage = 'El registro de ' + _this.cliente.email + ' se creo correctamente';
                _this.cliente = response.cliente;
                console.log(_this.cliente);
                console.log('esta es la respuesta' + response.cliente);
                _this._router.navigate(['/editarcliente', _this.cliente._id]);
            }
        }, function (error) {
            console.log('es error ' + _this.cliente);
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.errorMessage = body.message;
                console.log(error);
            }
        });
    };
    ClienteaddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
            selector: 'add-cliente',
            template: __webpack_require__(400),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]) === 'function' && _d) || Object])
    ], ClienteaddComponent);
    return ClienteaddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/cliente-add.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClienteEditComponent = (function () {
    function ClienteEditComponent(_clienteService) {
        this._clienteService = _clienteService;
        this.titulo = 'Usuario';
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.cliente = this.identity;
    }
    ClienteEditComponent.prototype.toggleVisibility = function (evento) {
        console.log(evento);
    };
    ClienteEditComponent.prototype.update = function ($event) {
        console.log($event, $event.target, $event.currentTarget);
    };
    ClienteEditComponent.prototype.ngOnInit = function () {
        this.token = this._clienteService.getToken();
        this.identity = this._clienteService.getidentity();
        this.cliente = this.identity;
    };
    ClienteEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._clienteService.update_cliente(this.cliente).subscribe(function (response) {
            // this.cliente = response.cliente;
            if (!response.cliente) {
                _this.AlertMessage = 'El usuario no se ha actualizado';
            }
            else {
                _this.AlertMessage = 'El usuario se ha actualizado';
                document.getElementById("identity_name").innerHTML = _this.cliente.name;
                //document.getElementById("identity_name").innerHTML =this.cliente.surname;
                localStorage.setItem('identity', JSON.stringify(_this.cliente));
                if (!_this.filesToUpload) {
                }
                else {
                    _this.makeFileRequest(_this.url + 'upload-image-user/' + _this.cliente._id, [], _this.filesToUpload).then(function (result) {
                        _this.cliente.image = result.image;
                        localStorage.setItem('identity', JSON.stringify(_this.cliente));
                        var image_path = _this.url + 'get-image-user/' + _this.cliente.image;
                        document.getElementById("user_image_logged").setAttribute('src', image_path);
                    });
                }
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.AlertMessage = body.message;
                console.log(error);
            }
        });
    };
    ClienteEditComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        if (this.filesToUpload) {
            this.makeFileRequest(this.url + 'upload-image-user/' + this.cliente._id, [], this.filesToUpload).then(function (result) {
                _this.cliente.image = result.image;
                localStorage.setItem('identity', JSON.stringify(_this.cliente));
                var image_path = _this.url + 'get-image-user/' + _this.cliente.image;
                document.getElementById("user_image_logged").setAttribute('src', image_path);
            });
        }
    };
    ClienteEditComponent.prototype.makeFileRequest = function (url, params, files) {
        var token = this.token;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('image', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    ClienteEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'cliente-edit',
            template: __webpack_require__(711),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_cliente_service__["a" /* ClienteService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_cliente_service__["a" /* ClienteService */]) === 'function' && _a) || Object])
    ], ClienteEditComponent);
    return ClienteEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/cliente_edit.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailespacioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailespacioComponent = (function () {
    function DetailespacioComponent(_route, _router, _clienteService, _espacioService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._espacioService = _espacioService;
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
    }
    DetailespacioComponent.prototype.ngOnInit = function () {
        console.log('espacio.components.ts cargado');
        this.getEspacio();
        //Conseguir listado de artistas
    };
    DetailespacioComponent.prototype.getEspacio = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._espacioService.getEspacios(_this.token, id).subscribe(function (response) {
                if (!response.evento) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.evento = response.evento;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    console.log(error);
                }
            });
        });
    };
    DetailespacioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'detail-espacio',
            template: __webpack_require__(712),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */]) === 'function' && _d) || Object])
    ], DetailespacioComponent);
    return DetailespacioComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/detailespacio.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_turno_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_assistant_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_assistant__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClienteDetailComponent = (function () {
    function ClienteDetailComponent(_route, _router, _clienteService, _turnoService, _assistantService, _eventoService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._turnoService = _turnoService;
        this._assistantService = _assistantService;
        this._eventoService = _eventoService;
        this.showoptions = 0;
        this.is_edit = true;
        this.asistencia = new __WEBPACK_IMPORTED_MODULE_7__models_assistant__["a" /* Assistant */]('', '', null);
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
    }
    ClienteDetailComponent.prototype.GeneraAsistencia = function (turno) {
        var _this = this;
        console.log(turno);
        this.asistencia.cliente = this.cliente._id;
        this.asistencia.turno = turno._id;
        this._assistantService.addAssistant(this.token, this.asistencia).subscribe(function (response) {
            if (!response.asistSaved) {
                var body = response._body;
                _this.alertMessage = body;
                console.log(response);
                _this.alertMessage = 'Ya te habias inscrito anteriormente';
            }
            else {
                _this.asistencia = response.asistSaved;
                _this.alertMessage = 'Asistencia creada Correctamente';
                _this.oculto = null;
                _this.getCliente();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    ClienteDetailComponent.prototype.mostrarEventos = function () {
        this.oculto = true;
        this.getEventos();
    };
    ClienteDetailComponent.prototype.mostrarTurnos = function (event) {
        this.selected = true;
        var id = event._id;
        console.log(event);
        this.obtenerTurnos(id);
    };
    ClienteDetailComponent.prototype.ngOnInit = function () {
        console.log('artistedit.component.cargado');
        //lamar evento por id
        this.getCliente();
    };
    ClienteDetailComponent.prototype.getCliente = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._clienteService.getCliente(_this.token, id).subscribe(function (response) {
                if (!response.cliente) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.cliente = response.cliente;
                    console.log(_this.cliente);
                    //sac-ar los turnos del evento
                    _this._assistantService.getAsistenciasCliente(_this.token, id).subscribe(function (response) {
                        if (!response.asist) {
                            _this.alertMessage = 'Este usuario no tiene Inscripciones';
                            alert('No hay asistencias');
                        }
                        else {
                            _this.asistencias = response.asist;
                        }
                    }, function (error) {
                        var errorMessage = error;
                        if (errorMessage != null) {
                            // this.alertMessage=body.message
                            console.log(error);
                        }
                    });
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    // this.alertMessage=body.message
                    console.log(error);
                }
            });
        });
    };
    ClienteDetailComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
        this.showoptions = 1;
    };
    ClienteDetailComponent.prototype.onCancelAsistencia = function () {
        this.confirmado = null;
        this.showoptions = 0;
    };
    ClienteDetailComponent.prototype.onDeleteAsistencia = function (id) {
        var _this = this;
        this.showoptions = 0;
        this._assistantService.deleteAsistencia(this.token, id).subscribe(function (response) {
            if (!response.asist) {
                _this.alertMessage('Error en el Servidor');
            }
            else {
                _this.getCliente();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    ClienteDetailComponent.prototype.getEventos = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page == 0) {
                    _this.prev_page = 1;
                }
            }
            _this._eventoService.getEventos(_this.token, page).subscribe(function (response) {
                if (!response.event) {
                    _this.alertMessage = 'Error en el Servidor';
                    console.log('entro aqui');
                }
                else {
                    _this.eventos = response.event;
                    console.log(_this.eventos);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    ClienteDetailComponent.prototype.obtenerTurnos = function (id) {
        var _this = this;
        this._turnoService.getTurnos(this.token, id).subscribe(function (response) {
            if (!response.turnos) {
                _this.alertMessage = 'Este evento no tiene turnos';
            }
            else {
                _this.turnos = response.turnos;
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                // this.alertMessage=body.message
                console.log(error);
            }
        });
    };
    ClienteDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'detalle-cliente',
            template: __webpack_require__(713),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */], __WEBPACK_IMPORTED_MODULE_6__services_assistant_service__["a" /* AssistantService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_assistant_service__["a" /* AssistantService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_assistant_service__["a" /* AssistantService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]) === 'function' && _f) || Object])
    ], ClienteDetailComponent);
    return ClienteDetailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/detallecliente.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteEditarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteEditarComponent = (function () {
    function ClienteEditarComponent(_route, _router, _clienteService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._uploadService = _uploadService;
        this.title = 'EDITAR CLIENTE';
        this.boton = 'Actualizar ';
        this.is_edit = true;
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url;
        this.cliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ROLE_USER', '');
        this.token = _clienteService.getToken();
        this.identity = _clienteService.getidentity();
        if (this.identity.role == 'ROLE_ADMIN') {
            this.admin = true;
            console.log(this.identity);
        }
        else {
            this.admin = null;
            console.log(this.identity);
        }
    }
    ClienteEditarComponent.prototype.fileChangeCliente = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    ClienteEditarComponent.prototype.ngOnInit = function () {
        this.token = this._clienteService.getToken();
        this.identity = this._clienteService.getidentity();
        console.log('clienteedit.component.cargado');
        //lamar usuario por id
        this.getUsuario();
    };
    ClienteEditarComponent.prototype.handleChange = function (e) {
        var isChecked = e.target.checked;
        if (isChecked) {
            console.log(isChecked);
            this.checked = true;
        }
        else {
            console.log(isChecked);
            this.checked = null;
        }
    };
    ClienteEditarComponent.prototype.getUsuario = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._clienteService.getCliente(_this.token, id).subscribe(function (response) {
                if (!response.cliente) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.cliente = response.cliente;
                    response.cliente.password = '';
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    // this.alertMessage=body.message
                    console.log(error);
                }
            });
        });
    };
    ClienteEditarComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            if (_this.cliente.password == "") {
                delete _this.cliente.password;
            }
            _this._clienteService.editCliente(_this.token, id, _this.cliente).subscribe(function (response) {
                if (!response.cliente) {
                    _this.errorMessage = 'Error en el Servidor';
                }
                else {
                    // this.evento = response.event;
                    //this._router.navigate(['/editar-evento'],response.evento._id);
                    console.log(_this.cliente);
                    _this.errorMessage = 'Cliente Actualizado Correctamente';
                    //subir foto
                    if (_this.filesToUpload) {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-ficha/' + id, [], _this.filesToUpload, _this.token, 'file')
                            .then(function (result) {
                            _this._router.navigate(['/panel-admin']);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.errorMessage = body.message;
                    console.log(error);
                }
            });
        });
        console.log(this.cliente);
    };
    ClienteEditarComponent.prototype.makeFileRequest = function (url, params, files) {
        var token = this.token;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('image', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    ClienteEditarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'editarcliente',
            template: __webpack_require__(400),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]) === 'function' && _d) || Object])
    ], ClienteEditarComponent);
    return ClienteEditarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/editarclienteadmin.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditespComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditespComponent = (function () {
    function EditespComponent(_route, _router, _clienteService, _espacioService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._espacioService = _espacioService;
        this._uploadService = _uploadService;
        this.titulo = 'Editar Espacio';
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.is_edit = true;
    }
    EditespComponent.prototype.ngOnInit = function () {
        console.log('Editespacio.components.ts cargado');
        //Llamar metodo api para traer Espacio por su id
        this.getEspacio();
    };
    EditespComponent.prototype.getEspacio = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._espacioService.getEspacio(_this.token, id).subscribe(function (response) {
                if (!response.evento) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.evento = response.evento;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    // this.alertRegister = body.message;
                    console.log(error);
                }
            });
        });
    };
    EditespComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.evento);
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._espacioService.editEspacio(_this.token, id, _this.evento).subscribe(function (response) {
                if (!response.evento) {
                    _this.alertMessage = 'Error en el servidor';
                }
                else {
                    _this.alertMessage = 'El Evento se ha actualizado correctamente';
                    _this._uploadService.makeFileRequest(_this.url + '/upload-image-event/' + id, [], _this.filesToUpload, _this.token, 'image')
                        .then(function (result) {
                        _this._router.navigate(['/evento', 1]);
                    }, function (error) {
                        console.log(error);
                    });
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    //this.alertRegister = body.message;
                    console.log(error);
                }
            });
        });
    };
    EditespComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    EditespComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'edit-espacio',
            template: __webpack_require__(399),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */], __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]) === 'function' && _e) || Object])
    ], EditespComponent);
    return EditespComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/editespacio.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspacioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EspacioComponent = (function () {
    function EspacioComponent(_route, _router, _clienteService, _espacioService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._espacioService = _espacioService;
        this.titulo = 'Nuevo Evento';
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.prev_page = 1;
        this.next_page = 1;
    }
    EspacioComponent.prototype.ngOnInit = function () {
        console.log('espacio.components.ts cargado');
        this.getEspacios();
        this.identity = this._clienteService.getidentity();
        console.log(this.identity);
        //Conseguir listado de artistas
    };
    EspacioComponent.prototype.getEspacios = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page == 0) {
                    _this.prev_page = 1;
                }
            }
            _this._espacioService.getEspacios(_this.token, page).subscribe(function (response) {
                if (!response.event) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.evento = response.event;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    //this.alertRegister = body.message;
                    console.log(error);
                }
            });
        });
    };
    EspacioComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
    };
    EspacioComponent.prototype.onCancelEspacio = function () {
        this.confirmado = null;
    };
    EspacioComponent.prototype.onDeleteEspacio = function (id) {
        var _this = this;
        this._espacioService.borrarEspacio(this.token, id).subscribe(function (response) {
            if (!response.event) {
                _this._router.navigate(['/evento', 1]);
            }
            _this.getEspacios();
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                //this.alertRegister = body.message;
                console.log(error);
            }
        });
    };
    EspacioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'evento',
            template: __webpack_require__(714),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_espacio_service__["a" /* EventoService */]) === 'function' && _d) || Object])
    ], EspacioComponent);
    return EspacioComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/espacio.components.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_evento__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventaddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventaddComponent = (function () {
    function EventaddComponent(_route, _router, _clienteService, _eventService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._eventService = _eventService;
        this.titulo = 'AÑADIR EVENTO';
        this.boton = 'Añadir Evento';
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.evento = new __WEBPACK_IMPORTED_MODULE_4__models_evento__["a" /* Evento */]('', '', '', '', '', '', '', '', '', '', '', '', '');
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
    }
    EventaddComponent.prototype.ngOnInit = function () {
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        console.log('eventadd.component.cargado');
        //GetEventos
    };
    EventaddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.evento);
        this._eventService.addEvento(this.token, this.evento).subscribe(function (response) {
            if (!response.event) {
                _this.alertMessage = 'Error en el Servidor';
            }
            else {
                _this.evento = response.event;
                _this.alertMessage = 'Evento Creado Correctamente';
                _this._router.navigate(['/eventedit', response.event._id]);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    EventaddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'eventadd',
            template: __webpack_require__(401),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === 'function' && _d) || Object])
    ], EventaddComponent);
    return EventaddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/eventadd.componenet.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_turno_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponente; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventDetailComponente = (function () {
    function EventDetailComponente(_route, _router, _clienteService, _eventService, _turnoService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._eventService = _eventService;
        this._turnoService = _turnoService;
        this.acciones = null;
        this.showoptions = 0;
        this.is_edit = true;
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
    }
    EventDetailComponente.prototype.ngOnInit = function () {
        console.log('artistedit.component.cargado');
        //lamar evento por id
        this.getEvento();
    };
    EventDetailComponente.prototype.getEvento = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._eventService.getEvento(_this.token, id).subscribe(function (response) {
                if (!response.event) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.evento = response.event;
                    //sacar los turnos del evento
                    _this._turnoService.getTurnos(_this.token, id).subscribe(function (response) {
                        if (!response.turnos) {
                            _this.alertMessage = 'Este evento no tiene turnos';
                        }
                        else {
                            _this.turnos = response.turnos;
                        }
                    }, function (error) {
                        var errorMessage = error;
                        if (errorMessage != null) {
                            var body = JSON.parse(error._body);
                            // this.alertMessage=body.message
                            console.log(error);
                        }
                    });
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    // this.alertMessage=body.message
                    console.log(error);
                }
            });
        });
    };
    EventDetailComponente.prototype.MostrarAcciones = function (id) {
        this.acciones = id;
    };
    EventDetailComponente.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
        this.showoptions = 1;
    };
    EventDetailComponente.prototype.onCancelTurno = function () {
        this.confirmado = null;
        this.showoptions = 0;
        this.acciones = null;
    };
    EventDetailComponente.prototype.onDeleteTurno = function (id) {
        var _this = this;
        this.acciones = null;
        this.showoptions = 0;
        this._turnoService.deleteTurno(this.token, id).subscribe(function (response) {
            if (!response.turno) {
                _this.alertMessage('Error en el Servidor');
            }
            else {
                _this.getEvento();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    EventDetailComponente = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'eventdetail',
            template: __webpack_require__(715),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */]) === 'function' && _e) || Object])
    ], EventDetailComponente);
    return EventDetailComponente;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/eventdetail.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_evento__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__(161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventeditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventeditComponent = (function () {
    function EventeditComponent(_route, _router, _clienteService, _eventService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._eventService = _eventService;
        this._uploadService = _uploadService;
        this.titulo = 'EDITAR EVENTO';
        this.boton = 'Actualizar';
        this.is_edit = true;
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.evento = new __WEBPACK_IMPORTED_MODULE_4__models_evento__["a" /* Evento */]('', '', '', '', '', '', '', '', '', '', '', '', '');
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
    }
    EventeditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    EventeditComponent.prototype.ngOnInit = function () {
        console.log('artistedit.component.cargado');
        //lamar evento por id
        this.getEvento();
    };
    EventeditComponent.prototype.getEvento = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._eventService.getEvento(_this.token, id).subscribe(function (response) {
                if (!response.event) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.evento = response.event;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    // this.alertMessage=body.message
                    console.log(error);
                }
            });
        });
    };
    EventeditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._eventService.editEvento(_this.token, id, _this.evento).subscribe(function (response) {
                if (!response.event) {
                    _this.alertMessage = 'Error en el Servidor';
                }
                else {
                    // this.evento = response.event;
                    //this._router.navigate(['/editar-evento'],response.evento._id);
                    _this.alertMessage = 'Evento Actualizado Correctamente';
                    //subir foto
                    _this._uploadService.makeFileRequest(_this.url + 'upload-image-event/' + id, [], _this.filesToUpload, _this.token, 'image')
                        .then(function (result) {
                        _this._router.navigate(['/evento/1']);
                    }, function (error) {
                        console.log(error);
                    });
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
        console.log(this.evento);
    };
    EventeditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'eventedit',
            template: __webpack_require__(401),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */]) === 'function' && _e) || Object])
    ], EventeditComponent);
    return EventeditComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/eventedit.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventlistComponent = (function () {
    function EventlistComponent(_route, _router, _clienteService, _eventoService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._eventoService = _eventoService;
        this.showoptions = 0;
        this.titulo = 'Eventos';
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.next_page = 1;
        this.prev_page = 1;
        this.visible = 'visible';
    }
    EventlistComponent.prototype.ngOnInit = function () {
        console.log('eventlist.component.cargado');
        this.getEventos();
        //GetEventos
    };
    EventlistComponent.prototype.getEventos = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page == 0) {
                    _this.prev_page = 1;
                }
            }
            _this._eventoService.getEventos(_this.token, page).subscribe(function (response) {
                if (!response.event) {
                    _this.alertMessage = 'Error en el Servidor';
                    console.log('entro aqui');
                }
                else {
                    _this.eventos = response.event;
                    console.log(_this.eventos);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    EventlistComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
        this.showoptions = 1;
    };
    EventlistComponent.prototype.onCancelEvento = function () {
        this.confirmado = null;
        this.showoptions = 0;
    };
    EventlistComponent.prototype.onDeleteEvento = function (id) {
        var _this = this;
        this.showoptions = 0;
        this._eventoService.deleteEvento(this.token, id).subscribe(function (response) {
            if (!response.event) {
                _this.alertMessage('Error en el Servidor');
            }
            else {
                _this.getEventos();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    EventlistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'eventlist',
            template: __webpack_require__(716),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]) === 'function' && _d) || Object])
    ], EventlistComponent);
    return EventlistComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/eventlist.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.titulo = 'home';
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home.components.ts cargado');
        //Conseguir listado de artistas
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'home',
            template: __webpack_require__(717)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/home.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_assistant_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return misEventosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var misEventosComponent = (function () {
    function misEventosComponent(_route, _router, _clienteService, _eventoService, _asistantService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._eventoService = _eventoService;
        this._asistantService = _asistantService;
        this.showoptions = 0;
        this.titulo = 'Mis Eventos';
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.next_page = 1;
        this.prev_page = 1;
    }
    misEventosComponent.prototype.ngOnInit = function () {
        console.log('eventlist.component.cargado');
        this.getMisEventos();
        //GetEventos
    };
    misEventosComponent.prototype.getMisEventos = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page == 0) {
                    _this.prev_page = 1;
                }
            }
            _this._asistantService.getAsistenciasCliente(_this.token, _this.identity._id).subscribe(function (response) {
                if (!response.asist) {
                    _this.alertMessage = 'Error en el Servidor';
                    console.log('entro aqui');
                }
                else {
                    _this.asistencias = response.asist;
                    console.log(_this.asistencias);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    misEventosComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
        this.showoptions = 1;
    };
    misEventosComponent.prototype.onCancelAsistencia = function () {
        this.confirmado = null;
        this.showoptions = 0;
    };
    misEventosComponent.prototype.onDeleteAsistencia = function (id) {
        var _this = this;
        this.showoptions = 0;
        this._asistantService.deleteAsistencia(this.token, id).subscribe(function (response) {
            if (!response.asist) {
                _this.alertMessage('Error en el Servidor');
            }
            else {
                _this.getMisEventos();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    misEventosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'eventlist',
            template: __webpack_require__(718),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_4__services_assistant_service__["a" /* AssistantService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_assistant_service__["a" /* AssistantService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_assistant_service__["a" /* AssistantService */]) === 'function' && _e) || Object])
    ], misEventosComponent);
    return misEventosComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/miseventos.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_turno__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_turno_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_assistant_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_email__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_cliente__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnodetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TurnodetailComponent = (function () {
    function TurnodetailComponent(_route, _router, _clienteService, _turnoservice, _assistanService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._turnoservice = _turnoservice;
        this._assistanService = _assistanService;
        this.titulo = 'Detalle del Turno';
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.turno = new __WEBPACK_IMPORTED_MODULE_4__models_turno__["a" /* Turno */]('', '', '', '', '', 0, '');
        this.email = new __WEBPACK_IMPORTED_MODULE_7__models_email__["a" /* email */]('', '', '', '', '', '', '');
        this.cliente = new __WEBPACK_IMPORTED_MODULE_8__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
    }
    TurnodetailComponent.prototype.ngOnInit = function () {
        console.log('turnodetail.component.cargado');
        this.getTurno();
        //GetEventos
        console.log(this.turno);
        console.log(this.assistant);
    };
    TurnodetailComponent.prototype.getReporte = function (idturno) {
        var _this = this;
        var id = idturno;
        this._assistanService.getReporteAsistencia(this.token, id).subscribe(function (response) {
            if (!response) {
                alert('No se pudo descargar reporte');
            }
            else {
                alert('Descargando reporte');
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    TurnodetailComponent.prototype.getTurno = function () {
        var _this = this;
        console.log('funciona el metodo');
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._turnoservice.getTurno(_this.token, id).subscribe(function (response) {
                if (!response.turno) {
                    _this._router.navigate(['/mis-eventos']);
                }
                else {
                    _this.turno = response.turno;
                    console.log('else turno');
                    //Sacar asistencias
                    _this._assistanService.getAsistencias(_this.token, response.turno._id).subscribe(function (response) {
                        if (!response.asistencias) {
                            _this.alertMessage = 'Este turno no tiene asistencias';
                            console.log('if');
                        }
                        else {
                            _this.assistant = response.asistencias;
                            console.log(_this.assistant);
                            console.log('else asistencia');
                        }
                    }, function (error) {
                        var errorMessage = error;
                        if (errorMessage != null) {
                            var body = JSON.parse(error._body);
                            _this.alertMessage = body.message;
                            console.log(error);
                        }
                    });
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    TurnodetailComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n          <html>\n            <head>\n              <title>Detalle de Asistencias Evento</title>\n                            <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n                    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n                    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\n                    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n                    <link rel=\"stylesheet\" href=\"assets/css/styles.css\"><link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n                    \n                    <link rel=\"icon\" href=\"https://www.loreal-paris.com.mx/img/favicon.png\" type=\"image/png\">\n                    <link rel=\"stylesheet\"\n                href=\"https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css\">\n                <!-- or -->\n                <link rel=\"stylesheet\"\n                href=\"https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css\"\n                integrity=\"sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw\"\n                crossorigin=\"anonymous\">\n                <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">\n                <style>\n                input{\n                    visibility:hidden;\n                    display:none;\n                    \n                }\n                </style>\n                                \n            </head>\n            <body onload=\"window.print();window.close()\"><br><br>" + printContents + "</body>\n          </html>");
        popupWin.document.close();
    };
    TurnodetailComponent.prototype.onSubmit = function () {
        // console.log(this.assistant);
        // console.log('eventlist.component.cargado');
        this.ActualizaAsistencia();
        //GetEventos
    };
    TurnodetailComponent.prototype.ActualizaAsistencia = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            for (var i in _this.assistant) {
                console.log(_this.assistant[i]._id);
                _this._assistanService.ActulizaAsist(_this.token, _this.assistant[i]._id, _this.assistant[i]).subscribe(function (response) {
                    if (!response.asist) {
                        _this.alertMessage = 'Error en el Servidor';
                    }
                    else {
                        // this.evento = response.event;
                        //this._router.navigate(['/editar-evento'],response.evento._id);
                        _this.alertMessage = 'Asistencia Actualizado Correctamente';
                        console.log(_this.assistant[i] + 'enviada');
                    }
                }, function (error) {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        var body = JSON.parse(error._body);
                        _this.alertMessage = body.message;
                        console.log(error);
                    }
                });
            }
            //perro aqui obtienes el id pero del turno y es el que se manda por eso da el error 
            //y ya cheqeu el modelo y pues no hay forma de sacar el id del turno 
            //seria agregar el campo pero tendrias que actualizar el turno por cada asistencia no?
            //entonces estoy chatito por que no se como sacar el id de la asistencia para actualizar
            // creo es lo unico que falta para que funcione
            // intente haciendo un this.assistant._id y puro nepe
        });
        this.getTurno();
    };
    TurnodetailComponent.prototype.enviarMail = function () {
        var _this = this;
        for (var i in this.assistant) {
            this.email.username = this.assistant[i].cliente.name + ' ' + this.assistant[i].cliente.surname;
            this.email.evento = this.assistant[i].turno.event.title;
            this.email.fecha = this.assistant[i].turno.event.dateS;
            this.email.lugar = this.assistant[i].turno.event.lugar;
            this.email.gmaps = this.assistant[i].turno.event.gmaps;
            this.email.direccion = this.assistant[i].turno.event.direccion;
            this.email.destino = this.assistant[i].cliente.email;
            this._assistanService.enviarMail(this.token, this.email).subscribe(function (response) {
                if (!response.info) {
                    _this.alertMessage = null;
                }
                else {
                    console.log(i + " correos enviados;");
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error.body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        }
        this.alertMessage = 'Lista de correo enviada correctamente!';
    };
    TurnodetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'turno-detail',
            template: __webpack_require__(719),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */], __WEBPACK_IMPORTED_MODULE_6__services_assistant_service__["a" /* AssistantService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_turno_service__["a" /* TurnoService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_assistant_service__["a" /* AssistantService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_assistant_service__["a" /* AssistantService */]) === 'function' && _e) || Object])
    ], TurnodetailComponent);
    return TurnodetailComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/turno-detail.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_turno__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_turno_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnoAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TurnoAddComponent = (function () {
    function TurnoAddComponent(_route, _router, _clienteService, _eventService, _turnoservice) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._eventService = _eventService;
        this._turnoservice = _turnoservice;
        this.titulo = 'AGREGAR TURNO';
        this.boton = 'Agregar Turno';
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.turno = new __WEBPACK_IMPORTED_MODULE_5__models_turno__["a" /* Turno */]('', '', '', '', '', 0, '');
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
    }
    TurnoAddComponent.prototype.ngOnInit = function () {
        console.log('turno.component.cargado');
        //GetEventos
    };
    TurnoAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var event_id = params['evento'];
            _this.turno.event = event_id;
            console.log(_this.turno);
            _this._turnoservice.addTurno(_this.token, _this.turno).subscribe(function (response) {
                if (!response.turno) {
                    _this.alertMessage = 'Error en el servidor';
                }
                else {
                    _this.alertMessage = 'El turno se creo correctamente!';
                    _this.turno = response.turno;
                    _this._router.navigate(['/detalle-evento', response.turno.event]);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error.body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    TurnoAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'turnoadd',
            template: __webpack_require__(402),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_6__services_turno_service__["a" /* TurnoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_turno_service__["a" /* TurnoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_turno_service__["a" /* TurnoService */]) === 'function' && _e) || Object])
    ], TurnoAddComponent);
    return TurnoAddComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/turnoadd.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_turno__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_turno_service__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TurnoEditComponent = (function () {
    function TurnoEditComponent(_route, _router, _clienteService, _eventService, _turnoservice) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._eventService = _eventService;
        this._turnoservice = _turnoservice;
        this.is_edit = true;
        this.titulo = 'EDITAR TURNO';
        this.boton = 'Actualizar';
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.turno = new __WEBPACK_IMPORTED_MODULE_5__models_turno__["a" /* Turno */]('', '', '', '', '', 50, '');
        this.identity = this._clienteService.getidentity();
        this.token = this._clienteService.getToken();
    }
    TurnoEditComponent.prototype.ngOnInit = function () {
        console.log('turno.component.cargado');
        this.getTurno();
        //conseguir el album
    };
    TurnoEditComponent.prototype.getTurno = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._turnoservice.getTurno(_this.token, id).subscribe(function (response) {
                if (!response.turno) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.turno = response.turno;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error.body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    TurnoEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            console.log(_this.turno);
            _this._turnoservice.editTurno(_this.token, id, _this.turno).subscribe(function (response) {
                if (!response.turno) {
                    _this.alertMessage = 'Error en el servidor';
                }
                else {
                    _this.alertMessage = 'El turno se actualizo correctamente!';
                    _this._router.navigate(['/detalle-evento', response.turno.event]);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error.body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    TurnoEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'turnoedit',
            template: __webpack_require__(402),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_6__services_turno_service__["a" /* TurnoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_turno_service__["a" /* TurnoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_turno_service__["a" /* TurnoService */]) === 'function' && _e) || Object])
    ], TurnoEditComponent);
    return TurnoEditComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/turnoedit.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assistant; });
var Assistant = (function () {
    function Assistant(cliente, turno, check) {
        this.cliente = cliente;
        this.turno = turno;
        this.check = check;
    }
    return Assistant;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/assistant.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN'\">\r\n    <h1>{{titulo}}</h1>\r\n\r\n    <div *ngIf=\"alertMessage\">\r\n        <div class=\"alert alert-info\">\r\n            {{alertMessage}}\r\n        </div>\r\n    </div>\r\n\r\n    <form #formEspacio=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 col-xs-6 \">\r\n                <p><br>\r\n                    <label>Titulo:</label>\r\n                    <input type=\"text\" #title=\"ngModel\" name=\"title\" [(ngModel)]=\"evento.title\" required class=\"form-control\" />\r\n                    <span *ngIf=\"!title.valid && title.touched\"> El titulo es obligatorio</span>\r\n                </p>\r\n\r\n            </div>\r\n            <div class=\"col-md-4 col-xs-6 \">\r\n                <p>\r\n                    <label>Descripción</label>\r\n                    <input type=\"text\" #description=\"ngModel\" name=\"description\" [(ngModel)]=\"evento.description\" required class=\"form-control\" />\r\n                    <span *ngIf=\"!description.valid && description.touched\">La descripcion es obligatoria</span>\r\n\r\n                </p>\r\n\r\n\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-4 col-xs-6\">\r\n                <p>\r\n                    <label  for=\"province\">Brand:</label>\r\n<<<<<<< HEAD\r\n<<<<<<< HEAD\r\n\r\n                    <select class=\"form-control\" id=\"brand\">\r\n                    <select #brand=\"ngModel\" id=\"brand\" class=\"form-control\" > \r\n\r\n                    <select class=\"form-control\" id=\"province\" #brand=\"ngModel\" name=\"brand\" [(ngModel)]=\"evento.brand\" required>\r\n\r\n=======\r\n                    <select class=\"form-control\" id=\"province\" #brand=\"ngModel\" name=\"brand\" [(ngModel)]=\"evento.brand\" required>\r\n>>>>>>> 2738e4ea0d7d081ee9f6fbd279de385f6efc1e70\r\n=======\r\n                    <select class=\"form-control\" id=\"province\" #brand=\"ngModel\" name=\"brand\" [(ngModel)]=\"evento.brand\" required>\r\n>>>>>>> 2738e4ea0d7d081ee9f6fbd279de385f6efc1e70\r\n                        <option selected>Selecciona...</option>\r\n                        <option value=\"Vicky\">Vicky</option>\r\n                        <option value=\"La Roche\">La Roche</option>\r\n                        <option value=\"Skinceuticals\">Skinceuticals</option>\r\n                        <option value=\"Roger&Gallet\"> Roger & Gallet</option>\r\n                    </select>\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-xs-6\">\r\n\r\n                <p>\r\n                    <label  for=\"province\">Provincia:</label>\r\n                    <select class=\"form-control\" id=\"province\">\r\n                        <option selected>Selecciona...</option>\r\n                        <option value=\"Albacete\">Albacete</option>\r\n                        <option value=\"Alicante/Alacant\">Alicante/Alacant</option>\r\n                        <option value=\"Almería\">Almería</option>\r\n                        <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                        <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                        <option value=\"Asturias\"> Asturias</option>\r\n                        <option value=\"Ávila\"> Ávila</option>\r\n                        <option value=\"Badajoz\"> Badajoz</option>\r\n                        <option value=\"Balears, Illes\"> Balears, Illes</option>\r\n                        <option value=\"Barcelona\"> Barcelona</option>\r\n                        <option value=\"Bizkaia\"> Bizkaia</option>\r\n                        <option value=\"Burgos\"> Burgos</option>\r\n                        <option value=\"Cáceres\"> Cáceres</option>\r\n                        <option value=\"Cádiz\"> Cádiz</option>\r\n                        <option value=\"Cantabria\"> Cantabria</option>\r\n                        <option value=\"Castellón/Castelló\"> Castellón/Castelló</option>\r\n                        <option value=\"Ceuta\"> Ceuta</option>\r\n                        <option value=\"Ciudad Real\"> Ciudad Real</option>\r\n                        <option value=\"Córdoba\"> Córdoba</option>\r\n                        <option value=\"Coruña,A\"> Coruña,A</option>\r\n                        <option value=\"Cuenca\"> Cuenca</option>\r\n                        <option value=\"Gipuzkoa\"> Gipuzkoa</option>\r\n                        <option value=\"Girona\"> Girona</option>\r\n                        <option value=\"Granada\"> Granada</option>\r\n                        <option value=\"Guadalajara\"> Guadalajara</option>\r\n                        <option value=\"Huelva\"> Huelva</option>\r\n                        <option value=\"Huesca\"> Huesca</option>\r\n                        <option value=\"Jaén\"> Jaén</option>\r\n                        <option value=\"León\"> León</option>\r\n                        <option value=\"Lleidra\"> Lleidra</option>\r\n                        <option value=\"Lugo\"> Lugo</option>\r\n                        <option value=\"Madrid\"> Madrid</option>\r\n                        <option value=\"Málaga\"> Málaga</option>\r\n                        <option value=\"Melilla\"> Melilla</option>\r\n                        <option value=\"Murcia\"> Murcia</option>\r\n                        <option value=\"Navarra\"> Navarra</option>\r\n                        <option value=\"Ourense\"> Ourense</option>\r\n                        <option value=\"Palencia\"> Palencia</option>\r\n                        <option value=\"Palmas, Las\"> Palmas, Las</option>\r\n                        <option value=\"Pontevedra\"> Pontevedra</option>\r\n                        <option value=\"Rioja, La\"> Rioja, La</option>\r\n                        <option value=\"Salamanca\"> Salamanca</option>\r\n                        <option value=\"Santa Cruz de Tenerife\"> Santa Cruz de Tenerife</option>\r\n                        <option value=\"Segovia\"> Segovia</option>\r\n                        <option value=\"Sevilla\"> Sevilla</option>\r\n                        <option value=\"Soria\"> Soria</option>\r\n                        <option value=\"Tarragona\"> Tarragona</option>\r\n                        <option value=\"Teruel\"> Teruel</option>\r\n                        <option value=\"Toledo\"> Toledo</option>\r\n                        <option value=\"Valencia/Valéncia\"> Valencia/Válencia</option>\r\n                        <option value=\"Valladolid\"> Valladolid</option>\r\n                        <option value=\"Zamora\"> Zamora</option>\r\n                        <option value=\"Zaragoza\"> Zaragoza</option>\r\n                    </select>\r\n                </p>\r\n\r\n            </div> -->\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-7\"></div>\r\n        <div class=\"col-md-5\" *ngIf=\"is_edit\">\r\n            <div class=\"espacio_image-for-edit\" *ngIf=\"evento.image && evento.image != 'null'\">\r\n                <img src=\"{{url +'get-image-event/'+ event.image}}\" />\r\n            </div>\r\n\r\n            <p>\r\n                <label>Sube la imagen del Evento</label>\r\n                <input type=\"file\" placeholder=\"Subir imagen..\" (change)=\"fileChangeEvent($event)\" />\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n\r\n            <input type=\"submit\" value=\"{{titulo}}\" class=\"btn btn-success\" />\r\n        </div>\r\n    </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"col-lg-4\" *ngIf=\"!identity || identity.role != 'ROLE_ADMIN'\">\r\n    <h1>Error</h1>\r\n    <p>No tienes acceso a esta parte del curso</p>\r\n\r\n</div>"

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row card2\">\r\n        <h1 class= \"capital\"> {{title}} </h1>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-success\">\r\n        <strong>{{errorMessage}}</strong>\r\n    </div> \r\n    \r\n    \r\n    <div class=\"row card2 \" >\r\n            \r\n        <!-- <div class=\"row\" > -->\r\n            <div class=\"col-md-4\">\r\n                <form #regiterForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\r\n                    \r\n                    <p>\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/nombre.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Nombre:\r\n                        </FONT>\r\n                        <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"cliente.name\"\r\n                        class=\"form-control\" required placeholder=\"Introduce el nombre\" />\r\n                        <span *ngIf=\"!name.valid && name.touched\">\r\n                            El nombre es obligatorio!\r\n                        </span>\r\n                    </p>\r\n                    <p>\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/nombre.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Apellido:\r\n                        </FONT>\r\n                        <input type=\"text\" #surname=\"ngModel\" name=\"surname\" [(ngModel)]=\"cliente.surname\" class=\"form-control\"\r\n                            required placeholder=\"Introduce  apellidos\"\r\n                        />\r\n                        <span *ngIf=\"!surname.valid && surname.touched\">\r\n                            El Apellido es obligatorio!\r\n                        </span>\r\n                    </p>\r\n                    <p>\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/telefono.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Teléfono:\r\n                        </FONT>\r\n                        <input type=\"text\" #phone=\"ngModel\" name=\"phone\" [(ngModel)]=\"cliente.phone\" class=\"form-control\"\r\n                            required placeholder=\"Introduce el Teléfono\"       />\r\n                        <span *ngIf=\"!code.valid && code.touched\">\r\n                            El Teléfono es obligatorio!\r\n                        </span>\r\n                    </p>\r\n                    <p *ngIf=\"!is_edit\">\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/email.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Email:\r\n                        </FONT>\r\n                        <input  type=\"email\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"cliente.email\" class=\"form-control\"\r\n                        required placeholder=\"Introduce tu e-mail\" />\r\n                        <span *ngIf=\"!email.valid && email.touched\">\r\n                            El email es obligatorio!\r\n                        </span>\r\n                    </p>\r\n                    <p>\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/nombre.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        CIF/NIF:\r\n                        </FONT>\r\n                        <input type=\"text\" #nifCif=\"ngModel\" name=\"nifCif\" [(ngModel)]=\"cliente.nifCif\" class=\"form-control\"\r\n                            required placeholder=\"Introduce el nifCif\"       />\r\n                        <span *ngIf=\"!nifCif.valid && nifCif.touched\">\r\n                            El nif/cif es obligatorio!\r\n                        </span>\r\n                    </p>\r\n                    <p>\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/farmacia.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Farmacia:\r\n                        </FONT>\r\n                        <br>\r\n                        <input type=\"text\" #nameEstablishment=\"ngModel\" name=\"nameEstablishment\" [(ngModel)]=\"cliente.nameEstablishment\" \r\n                        class=\"form-control\" required placeholder=\"Introduce el nombre del establecimiento\"\r\n                        />\r\n                        <span *ngIf=\"!nameEstablishment.valid && nameEstablishment.touched\">\r\n                            El nombre del establecimiento es obligatorio!\r\n                        </span>\r\n                    </p>\r\n                    <p>\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/codigo.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Código de Farmacia:\r\n                        </FONT>\r\n                        <br>\r\n                        <input type=\"text\" #code=\"ngModel\" name=\"code\" [(ngModel)]=\"cliente.code\" class=\"form-control\"\r\n                        required placeholder=\"Introduce el codigo\"       />\r\n                        <span *ngIf=\"!code.valid && code.touched\">\r\n                            El codigo de la farmacia es obligatorio!\r\n                        </span>\r\n                    </p>\r\n                    <!-- <p > -->\r\n                        <!-- <input type=\"checkbox\" id=\"edit\" /> Editar contraseña -->\r\n                        <!-- <input type=\"checkbox\" (change)=\"handleChange($event)\"/>\r\n                               Editar contraseña \r\n                    </p> -->\r\n                    <!-- <label class=\"container\">    \r\n                            <input type=\"checkbox\" [(ngModel)]=\"theCheckbox\"  data-md-icheck \r\n                             (change)=\"toggleVisibility($event)\"/>\r\n                               Checkbox is <span *ngIf=\"marked\">checked</span><span \r\n                              *ngIf=\"!marked\">unchecked</span>\r\n                              <span class=\"checkmark\"></span>\r\n                         </label> -->\r\n                    <p >\r\n                        <!-- <img id=\"kDMY_0\" src=\"../../assets/images/mapa_grande.png\" class=\"img-register\"> -->\r\n                        <!-- <img id=\"kDMY_0\" class=\"img-register\"> -->\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Contraseña:\r\n                        </FONT>\r\n                        <input  type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"cliente.password\" \r\n                        class=\"form-control\" required placeholder=\"Introduce la contraseña\"/>\r\n                       \r\n                    </p>       \r\n                </form>\r\n            </div>\r\n       \r\n            <div class=\"col-md-4\" >\r\n                <form #regiterForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" > \r\n                    <div >\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/mapa_grande.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Provincia:\r\n                        </FONT>\r\n                        <select class=\"form-control\" #province=\"ngModel\" name=\"province\" [(ngModel)]=\"cliente.province\" required id=\"province\">\r\n                            <option selected=\"selected\">Selecciona...</option>\r\n                            <option value=\"Albacete\">Albacete</option>\r\n                            <option value=\"Alicante/Alacant\">Alicante/Alacant</option>\r\n                            <option value=\"Almería\">Almería</option>\r\n                            <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                            <option value=\"Asturias\"> Asturias</option>\r\n                            <option value=\"Ávila\"> Ávila</option>\r\n                            <option value=\"Badajoz\"> Badajoz</option>\r\n                            <option value=\"Balears, Illes\"> Balears, Illes</option>\r\n                            <option value=\"Barcelona\"> Barcelona</option>\r\n                            <option value=\"Bizkaia\"> Bizkaia</option>\r\n                            <option value=\"Burgos\"> Burgos</option>\r\n                            <option value=\"Cáceres\"> Cáceres</option>\r\n                            <option value=\"Cádiz\"> Cádiz</option>\r\n                            <option value=\"Cantabria\"> Cantabria</option>\r\n                            <option value=\"Castellón/Castelló\"> Castellón/Castelló</option>\r\n                            <option value=\"Ceuta\"> Ceuta</option>\r\n                            <option value=\"Ciudad Real\"> Ciudad Real</option>\r\n                            <option value=\"Córdoba\"> Córdoba</option>\r\n                            <option value=\"Coruña,A\"> Coruña,A</option>\r\n                            <option value=\"Cuenca\"> Cuenca</option>\r\n                            <option value=\"Gipuzkoa\"> Gipuzkoa</option>\r\n                            <option value=\"Girona\"> Girona</option>\r\n                            <option value=\"Granada\"> Granada</option>\r\n                            <option value=\"Guadalajara\"> Guadalajara</option>\r\n                            <option value=\"Huelva\"> Huelva</option>\r\n                            <option value=\"Huesca\"> Huesca</option>\r\n                            <option value=\"Jaén\"> Jaén</option>\r\n                            <option value=\"León\"> León</option>\r\n                            <option value=\"Lleidra\"> Lleidra</option>\r\n                            <option value=\"Lugo\"> Lugo</option>\r\n                            <option value=\"Madrid\"> Madrid</option>\r\n                            <option value=\"Málaga\"> Málaga</option>\r\n                            <option value=\"Melilla\"> Melilla</option>\r\n                            <option value=\"Murcia\"> Murcia</option>\r\n                            <option value=\"Navarra\"> Navarra</option>\r\n                            <option value=\"Ourense\"> Ourense</option>\r\n                            <option value=\"Palencia\"> Palencia</option>\r\n                            <option value=\"Palmas, Las\"> Palmas, Las</option>\r\n                            <option value=\"Pontevedra\"> Pontevedra</option>\r\n                            <option value=\"Rioja, La\"> Rioja, La</option>\r\n                            <option value=\"Salamanca\"> Salamanca</option>\r\n                            <option value=\"Santa Cruz de Tenerife\"> Santa Cruz de Tenerife</option>\r\n                            <option value=\"Segovia\"> Segovia</option>\r\n                            <option value=\"Sevilla\"> Sevilla</option>\r\n                            <option value=\"Soria\"> Soria</option>\r\n                            <option value=\"Tarragona\"> Tarragona</option>\r\n                            <option value=\"Teruel\"> Teruel</option>\r\n                            <option value=\"Toledo\"> Toledo</option>\r\n                            <option value=\"Valencia/Valéncia\"> Valencia/Válencia</option>\r\n                            <option value=\"Valladolid\"> Valladolid</option>\r\n                            <option value=\"Zamora\"> Zamora</option>\r\n                            <option value=\"Zaragoza\"> Zaragoza</option>\r\n                        </select>\r\n                        <br>\r\n                    </div>\r\n                    <p>\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/direccion.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Dirección:\r\n                        </FONT>\r\n                        <input type=\"text\" #street=\"ngModel\" name=\"street\" [(ngModel)]=\"cliente.street\" class=\"form-control\"\r\n                            required placeholder=\"Introduce la direccion\"       />\r\n                        <span *ngIf=\"!street.valid && street.touched\">\r\n                            La Dirección es obligatoria!\r\n                        </span>\r\n                    </p>\r\n                    <p>\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/zip.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Código Postal:\r\n                        </FONT>\r\n                        <input type=\"text\" #zip=\"ngModel\" name=\"zip\" [(ngModel)]=\"cliente.zip\" class=\"form-control\"\r\n                            required placeholder=\"Introduce el Zip\"       />\r\n                        <span *ngIf=\"!zip.valid && zip.touched\">\r\n                            El Codigo Postal es obligatorio!\r\n                        </span>\r\n                    </p>\r\n                    <!-- <p> -->\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/marca.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                        Vichy:\r\n                        </FONT>\r\n                    <!-- </p> -->\r\n                    <select class=\"form-control\" id=\"brandV\" #brandV=\"ngModel\" name=\"brandV\"\r\n                    [(ngModel)]=\"cliente.brandV\" required>\r\n                        <option ng-selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"1\">Si</option>\r\n                        <option value=\"0\">No</option>\r\n                    </select>\r\n                    <br>\r\n                    <!-- <p> -->\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/marca.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                            La Roche-Posay:\r\n                        </FONT>\r\n                    <!-- </p> -->\r\n                    <select class=\"form-control\" id=\"brandLR\" #brandLR=\"ngModel\" name=\"brandLR\"\r\n                    [(ngModel)]=\"cliente.brandLR\" required>\r\n                        <option ng-selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"1\">Si</option>\r\n                        <option value=\"0\">No</option>\r\n                    </select>\r\n                    <br>\r\n                    <!-- <p> -->\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/marca.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                            Roger&Gallet:\r\n                        </FONT>\r\n                    <!-- </p> -->\r\n                    <select class=\"form-control\" id=\"brandRG\" #brandRG=\"ngModel\" name=\"brandRG\"\r\n                    [(ngModel)]=\"cliente.brandRG\" required>\r\n                        <option ng-selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"1\">Si</option>\r\n                        <option value=\"0\">No</option>\r\n                    </select>\r\n                    <br>\r\n                    <!-- <p> -->\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/marca.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                            SkinCeuticals:\r\n                        </FONT>\r\n                    <!-- </p> -->\r\n                    <select class=\"form-control\" id=\"brandSK\" #brandSK=\"ngModel\" name=\"brandSK\"\r\n                    [(ngModel)]=\"cliente.brandSK\" required>\r\n                        <option ng-selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"1\">Si</option>\r\n                        <option value=\"0\">No</option>\r\n                    </select>\r\n                    <br>\r\n                    <!-- <p> -->\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/marca.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                            CeraVe:\r\n                        </FONT>\r\n                    <!-- </p> -->\r\n                    <select class=\"form-control\" id=\"brandCV\" #brandCV=\"ngModel\" name=\"brandCV\"\r\n                    [(ngModel)]=\"cliente.brandCV\" required>\r\n                        <option ng-selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"1\">Si</option>\r\n                        <option value=\"0\">No</option>\r\n                    </select>\r\n                    <br>\r\n                    <div *ngIf=\"admin\">\r\n                        <img id=\"kDMY_0\" src=\"../../assets/images/rol.png\" class=\"img-register\">\r\n                        <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                            Rol:\r\n                        </FONT>    \r\n                        <select class=\"form-control\" #role=\"ngModel\" name=\"role\" [(ngModel)]=\"cliente.role\" required id=\"role\">\r\n                            <option selected=\"selected\" value=\"\">Selecciona...</option>\r\n                            <option value=\"ROLE_ADMIN\">Administrador</option>\r\n                            <option value=\"ROLE_USER\">Usuario</option>\r\n                            <option value=\"ROLE_AGENTE\">Agente</option>\r\n                            <option value=\"ROLE_ENCARGADO\"> Encargado</option>\r\n                        </select>\r\n                        <br>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"col-md-4\" style=\"text-align: right\">\r\n                <form #regiterForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" > \r\n\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <div  *ngIf=\"is_edit\">\r\n                        <p style=\"text-align: center\">\r\n                            <FONT SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                                Subir Ficha:\r\n                            </FONT>\r\n                        </p>\r\n                        \r\n                        <p>\r\n                            <input type=\"file\" placeholder=\"Subir imagen..\" (change)=\"fileChangeCliente($event)\" />\r\n                        </p>\r\n                    </div>\r\n                    <br>\r\n                    <button (click)=\"submit\" class=\"btn btn-secondary\" >\r\n                        {{boton}} <i class=\"fa fa-plus-circle\"></i></button>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <a [routerLink]=\"['/panel-admin']\" class=\"btn btn-md btn-primary\">\r\n                        Volver\r\n                        <i class=\"fas fa-arrow-circle-left\"></i>\r\n                    </a>\r\n                </form>\r\n            <br>\r\n            </div>\r\n    </div>\r\n \r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>"

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<div class= \"container\" *ngIf=\"identity && identity.role=='ROLE_ADMIN' || identity.role=='ROLE_AGENTE' || identity.role=='ROLE_ENCARGADO'\">\r\n    <br>\r\n    <div class=\"card2\">\r\n        <h1>{{titulo}}</h1>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"alertMessage\">\r\n        <div class=\"alert alert-info\">\r\n            {{alertMessage}}\r\n        </div>\r\n    </div>\r\n    <div class=\"card2\">\r\n        <form #formEvento=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\" >\r\n                <div class = \"col-md-6\">\r\n                    <p>\r\n                        <br>\r\n                        <label ><img id=\"kDMY_0\"   src=\"../../assets/images/titulo_evento.png\" class=\"img-card\"> Titulo:</label>\r\n                        <input style=\"width: 50%;\" type=\"text\" #title=\"ngModel\" name=\"title\" [(ngModel)]=\"evento.title\" required class=\"form-control\" />\r\n                        <span *ngIf=\"!title.valid && title.touched\"> El Titulo es obligatorio</span>\r\n                    </p>\r\n                    <br>\r\n\r\n                    <label for=\"brand\"> <img id=\"kDMY_0\"   src=\"../../assets/images/marca.png\" class=\"img-card\"> Marca:</label>\r\n\r\n\r\n                    <select style=\"width: 50%;\" class=\"form-control\" id=\"brand\" #brand=\"ngModel\" name=\"brand\" [(ngModel)]=\"evento.brand\" required>\r\n\r\n                        <option ng-selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"Vichy\">Vichy</option>\r\n                        <option value=\"La Roche\">La Roche-Posay</option>\r\n                        <option value=\"Skinceuticals\">Skinceuticals</option>\r\n                        <option value=\"RogerGallet\"> Roger Gallet</option>\r\n                        <option value=\"CeraVe\"> CeraVe</option>\r\n                    </select>\r\n\r\n                <!-- </div> -->\r\n\r\n\r\n                <!-- <div class=\"col-md-2 col-xs-6\">\r\n                    <br>\r\n\r\n                    <label for=\"brand\">Marca:</label>\r\n\r\n\r\n                    <select class=\"form-control\" id=\"brand\" #brand=\"ngModel\" name=\"brand\" [(ngModel)]=\"evento.brand\" required>\r\n\r\n                        <option ng-selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"Vichy\">Vichy</option>\r\n                        <option value=\"La Roche\">La Roche-Posay</option>\r\n                        <option value=\"Skinceuticals\">Skinceuticals</option>\r\n                        <option value=\"RogerGallet\"> Roger Gallet</option>\r\n                    </select>\r\n\r\n                </div> -->\r\n\r\n                <!-- <div class=\"col-md-4 col-xs-6\"> -->\r\n                    <br>\r\n\r\n\r\n                    <label for=\"province\"> <img id=\"kDMY_0\"   src=\"../../assets/images/mapa_grande.png\" class=\"img-card\"> Provincia:</label>\r\n                    <select style=\"width: 50%;\" class=\"form-control\" #province=\"ngModel\" name=\"province\" [(ngModel)]=\"evento.province\" required id=\"province\">\r\n                        <option selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"Albacete\">Albacete</option>\r\n                        <option value=\"Alicante/Alacant\">Alicante/Alacant</option>\r\n                        <option value=\"Almería\">Almería</option>\r\n                        <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                        <option value=\"Asturias\"> Asturias</option>\r\n                        <option value=\"Ávila\"> Ávila</option>\r\n                        <option value=\"Badajoz\"> Badajoz</option>\r\n                        <option value=\"Balears, Illes\"> Balears, Illes</option>\r\n                        <option value=\"Barcelona\"> Barcelona</option>\r\n                        <option value=\"Bizkaia\"> Bizkaia</option>\r\n                        <option value=\"Burgos\"> Burgos</option>\r\n                        <option value=\"Cáceres\"> Cáceres</option>\r\n                        <option value=\"Cádiz\"> Cádiz</option>\r\n                        <option value=\"Cantabria\"> Cantabria</option>\r\n                        <option value=\"Castellón/Castelló\"> Castellón/Castelló</option>\r\n                        <option value=\"Ceuta\"> Ceuta</option>\r\n                        <option value=\"Ciudad Real\"> Ciudad Real</option>\r\n                        <option value=\"Córdoba\"> Córdoba</option>\r\n                        <option value=\"Coruña,A\"> Coruña,A</option>\r\n                        <option value=\"Cuenca\"> Cuenca</option>\r\n                        <option value=\"Gipuzkoa\"> Gipuzkoa</option>\r\n                        <option value=\"Girona\"> Girona</option>\r\n                        <option value=\"Granada\"> Granada</option>\r\n                        <option value=\"Guadalajara\"> Guadalajara</option>\r\n                        <option value=\"Huelva\"> Huelva</option>\r\n                        <option value=\"Huesca\"> Huesca</option>\r\n                        <option value=\"Jaén\"> Jaén</option>\r\n                        <option value=\"León\"> León</option>\r\n                        <option value=\"Lleidra\"> Lleidra</option>\r\n                        <option value=\"Lugo\"> Lugo</option>\r\n                        <option value=\"Madrid\"> Madrid</option>\r\n                        <option value=\"Málaga\"> Málaga</option>\r\n                        <option value=\"Melilla\"> Melilla</option>\r\n                        <option value=\"Murcia\"> Murcia</option>\r\n                        <option value=\"Navarra\"> Navarra</option>\r\n                        <option value=\"Ourense\"> Ourense</option>\r\n                        <option value=\"Palencia\"> Palencia</option>\r\n                        <option value=\"Palmas, Las\"> Palmas, Las</option>\r\n                        <option value=\"Pontevedra\"> Pontevedra</option>\r\n                        <option value=\"Rioja, La\"> Rioja, La</option>\r\n                        <option value=\"Salamanca\"> Salamanca</option>\r\n                        <option value=\"Santa Cruz de Tenerife\"> Santa Cruz de Tenerife</option>\r\n                        <option value=\"Segovia\"> Segovia</option>\r\n                        <option value=\"Sevilla\"> Sevilla</option>\r\n                        <option value=\"Soria\"> Soria</option>\r\n                        <option value=\"Tarragona\"> Tarragona</option>\r\n                        <option value=\"Teruel\"> Teruel</option>\r\n                        <option value=\"Toledo\"> Toledo</option>\r\n                        <option value=\"Valencia/Valéncia\"> Valencia/Válencia</option>\r\n                        <option value=\"Valladolid\"> Valladolid</option>\r\n                        <option value=\"Zamora\"> Zamora</option>\r\n                        <option value=\"Zaragoza\"> Zaragoza</option>\r\n                    </select>\r\n                </div>\r\n            \r\n            <!-- <div class=\"row\"> -->\r\n                <div class = \"col-md-6\">\r\n                    <p>\r\n                        <br>\r\n                        <label><img id=\"kDMY_0\"   src=\"../../assets/images/marca.png\" class=\"img-card\"> Campaña:</label>\r\n                        <input style=\"width: 50%;\" type=\"text\" #campana=\"ngModel\" name=\"campana\" [(ngModel)]=\"evento.campana\" required class=\"form-control\" />\r\n                        <span *ngIf=\"!campana.valid && campana.touched\"> La Campaña es obligatoria</span>\r\n                    </p>\r\n                    <p>\r\n                        <label><img id=\"kDMY_0\"   src=\"../../assets/images/descripcion.png\" class=\"img-card\"> Descripción:</label>\r\n                        <textarea style=\"width: 90%;\" class=\"form-control\" #description=\"ngModel\" name=\"description\" [(ngModel)]=\"evento.description\" rows=\"3\"></textarea>\r\n\r\n\r\n                        <span *ngIf=\"!description.valid && description.touched\">La Descripción es obligatoria</span>\r\n\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">    \r\n                <div class=\"col-md-6 col-xs-6\">\r\n                    <p>\r\n                            <br>\r\n                            <label> <img id=\"kDMY_0\"   src=\"../../assets/images/direccion.png\" class=\"img-card\"> Dirección:</label>\r\n                            <input type=\"text\" #direccion=\"ngModel\" name=\"direccion\" [(ngModel)]=\"evento.direccion\" required class=\"form-control\" />\r\n                            <span *ngIf=\"!direccion.valid && direccion.touched\"> La Dirección es obligatoria</span>\r\n                        </p>\r\n                    <br>\r\n                </div>\r\n                <div class=\"col-md-6\" *ngIf=\"is_edit\" >\r\n                    <div class=\"espacio_image-for-edit\" *ngIf=\"evento.image && evento.image != 'null'\">\r\n                        <img src=\"{{url +'get-image-event/'+ evento.image}}\" />\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                    <p>\r\n                        <label >Sube la imagen del Evento</label>\r\n                        <br>\r\n                        <input type=\"file\" placeholder=\"Subir imagen..\" (change)=\"fileChangeEvent($event)\" />\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <p>\r\n                        <label ><img id=\"kDMY_0\"   src=\"../../assets/images/lugar.png\" class=\"img-card\"> Lugar:</label>\r\n                        <input  type=\"text\" #lugar=\"ngModel\" name=\"lugar\" [(ngModel)]=\"evento.lugar\" required class=\"form-control\" />\r\n                        <span *ngIf=\"!lugar.valid && lugar.touched\"> El Lugar es obligatorio</span>\r\n                    </p>\r\n                    <p>\r\n                        <label ><img id=\"kDMY_0\"   src=\"../../assets/images/fecha.png\" class=\"img-card\"> Fecha Inicio:</label>\r\n                        <!-- <input  type=\"text\" #title=\"ngModel\" name=\"title\" [(ngModel)]=\"evento.title\" required class=\"form-control\" /> -->\r\n                        <!-- <input [ngModel]=\"startDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"startDate = $event\" type=\"date\" name=\"startDate\" class=\"form-control\"/> -->\r\n                        <input [ngModel]=\"evento.dateS | date:'yyyy-MM-dd'\" (ngModelChange)=\"evento.dateS = $event\" type=\"date\" name=\"dateS\" class=\"form-control\"/>\r\n                        <!-- <span *ngIf=\" dateS.touched\"> La fecha es obligatoria</span> -->\r\n                    </p>\r\n                    <label for=\"visible\"> <img id=\"kDMY_0\"   src=\"../../assets/images/visible.png\" class=\"img-card\"> Visible:</label>\r\n\r\n\r\n                    <select   class=\"form-control\" id=\"visible\" #visible=\"ngModel\" name=\"visible\" [(ngModel)]=\"evento.visible\" >\r\n\r\n                        <option ng-selected=\"selected\">Selecciona...</option>\r\n                        <option value=\"visible\">Visible</option>\r\n                        <option value=\"oculto\">Oculto</option>\r\n                    </select>\r\n                    <br>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <p>\r\n                        <label ><img id=\"kDMY_0\"   src=\"../../assets/images/lugar.png\" class=\"img-card\"> Googlemaps:</label>\r\n                        <input  type=\"text\" #gmaps=\"ngModel\" name=\"gmaps\" [(ngModel)]=\"evento.gmaps\" required class=\"form-control\" />\r\n                        <span *ngIf=\"!gmaps.valid && gmaps.touched\"> El Lugar es obligatorio</span>\r\n                    </p>\r\n                    <p>\r\n                        <label ><img id=\"kDMY_0\"   src=\"../../assets/images/fecha.png\" class=\"img-card\"> Fecha Fin:</label>\r\n                        <input [ngModel]=\"evento.dateE | date:'yyyy-MM-dd'\"  (ngModelChange)=\"evento.dateE = $event\" \r\n                            type=\"date\" name=\"dateE\" class=\"form-control\"/>\r\n                    </p>\r\n                    <p>\r\n                        <label ><img id=\"kDMY_0\"   src=\"../../assets/images/valor.png\" class=\"img-card\"> Valor formación:</label>\r\n                        <input  type=\"text\" #value=\"ngModel\" name=\"value\" [(ngModel)]=\"evento.value\" required class=\"form-control\" />\r\n                        <span *ngIf=\"!value.valid && value.touched\"> El Valor formación es obligatorio</span>\r\n                    </p>\r\n                    <br>\r\n                </div>\r\n            <!-- </div> -->\r\n            <!-- </div> -->\r\n            <!-- <div class=\"row\"> -->\r\n                <div class=\"col-md-3\">\r\n\r\n                </div>\r\n                \r\n                <div class=\"col-md-2\" style=\"text-align: right;\" >\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>    \r\n                    <button (click)=\"submit\" class=\"btn btn-secondary\" >\r\n                        {{boton}} <i class=\"fa fa-plus-circle\"></i></button>\r\n                    <br>\r\n                    <br>\r\n                    <button class=\"btn btn-primary\" [routerLink]=\"['/evento',1]\">\r\n                        Volver   <i class=\"fas fa-arrow-circle-left\"></i> \r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\"*ngIf=\"!identity && !identity.role=='ROLE_ADMIN' || !identity.role=='ROLE_AGENTE' || !identity.role=='ROLE_ENCARGADO'\">\r\n        <h1>Error</h1>\r\n        <p>No tienes acceso a esta parte del curso</p>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br>\r\n    <div class=\"col-lg-12 \" *ngIf=\"identity&& identity.role=='ROLE_ADMIN' || identity.role=='ROLE_AGENTE' || identity.role=='ROLE_ENCARGADO'\">\r\n        <div class=\"card2 row\">\r\n            <h1>{{titulo}}</h1>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"alertMessage\">\r\n            <div class=\"alert alert-info\">\r\n                {{alertMessage}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row card2\">\r\n\r\n            <div class=\"col-lg-12\">\r\n\r\n                <form #formTurno=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3 col-xs-6 \">\r\n                            <p>\r\n                                <br>\r\n                                <label><img src=\"../../assets/images/nombre.png\" width=\"25px\">\r\n                                </label>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    Nombre:\r\n                                </FONT>\r\n                                <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"turno.name\" required class=\"form-control\" />\r\n                                <span *ngIf=\"!name.valid && name.touched\"> El Nombre es obligatorio</span>\r\n                            </p>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-3 col-xs-6 \">\r\n                            <br>\r\n                            <label for=\"start_h\"><img src=\"../../assets/images/tiempo pequeño.png\" width=\"25px\"> </label>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                Hora Inicio:\r\n                            </FONT>\r\n\r\n                            <input type=\"time\" class=\"form-control\" id=\"start_h\" #start_h=\"ngModel\" name=\"start_h\" [(ngModel)]=\"turno.start_h\" required>\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"col-md-3 col-xs-6\">\r\n                            <br>\r\n\r\n                            <label for=\"date_start\"><img src=\"../../assets/images/calendario pequeño.png\" width=\"25px\">  </label>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                Fecha Inicio:\r\n                            </FONT>\r\n\r\n\r\n                            <input type=\"date\" class=\"form-control\" id=\"date_start\" #date_start=\"ngModel\" name=\"date_start\" [(ngModel)]=\"turno.date_start\"\r\n                                required>\r\n\r\n\r\n\r\n                        </div>\r\n\r\n                        \r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <br>\r\n                            <label for=\"aforo\"><img src=\"../../assets/images/aforo pequeño.png\" width=\"25px\">  </label>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                Aforo:\r\n                            </FONT>\r\n                            <input type=\"text\" class=\"form-control\" id=\"aforo\" #aforo=\"ngModel\" name=\"aforo\" [(ngModel)]=\"turno.aforo\" required>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <br>\r\n                            <label for=\"end_h\"><img src=\"../../assets/images/tiempo pequeño.png\" width=\"25px\">  </label>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                Hora Fin:\r\n                            </FONT>\r\n                            <input type=\"time\" class=\"form-control\" id=\"end_h\" #end_h=\"ngModel\" name=\"end_h\" [(ngModel)]=\"turno.end_h\" required>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-xs-6\">\r\n                            <br>\r\n                            <label for=\"date_end\"><img src=\"../../assets/images/calendario pequeño.png\" width=\"25px\"> </label>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                Fecha Fin:\r\n                            </FONT>\r\n                            <input type=\"date\" class=\"form-control\" id=\"date_end\" #date_end=\"ngModel\" name=\"date_end\" [(ngModel)]=\"turno.date_end\" required>\r\n                        </div>\r\n                        <div class=\"col-md-3\" style=\"text-align: right\">\r\n                            <div class=\"col-lg-12\" >\r\n                                <br>\r\n                                <button (click)=\"submit\" [disabled]=\"!formTurno.form.valid\" class=\"btn btn-secondary\" >\r\n                                    {{boton}} <i class=\"fas fa-ban\"></i></button>\r\n                                <br>\r\n\r\n                            </div>\r\n                            <br>\r\n\r\n                            <div class=\"col-lg-12\" >\r\n                                <button class=\"btn btn-primary\" [routerLink]=\"['/evento',1]\">\r\n                                     Volver <i class=\"fas fa-arrow-circle-left\"> </i>\r\n                                </button>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row card2\">\r\n            \r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/vichy.jpeg\">\r\n            </div>\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roche.jpeg\">\r\n            </div>\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/skins.jpeg\">\r\n            </div>\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roger.jpeg\">\r\n            </div>\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/CERAVE.png\">\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-lg-4\" *ngIf=\"showoptions==0 && identity.role=='ROLE_ADMIN' || identity.role=='ROLE_AGENTE' || identity.role=='ROLE_ENCARGADO'\">\r\n            <h1>Error</h1>\r\n            <p>No tienes acceso a esta parte del curso</p>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 424;


/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(543);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/main.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = (function () {
    function EventService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    EventService.prototype.addEvento = function (token, evento) {
        var params = JSON.stringify(evento);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + '/event', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    EventService.prototype.getEventos = function (token, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'events/' + page, options).map(function (res) { return res.json(); });
    };
    EventService.prototype.getEvento = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'event/' + id, options).map(function (res) { return res.json(); });
    };
    EventService.prototype.editEvento = function (token, id, evento) {
        var params = JSON.stringify(evento);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'event/' + id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    EventService.prototype.deleteEvento = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'event/' + id, options).map(function (res) { return res.json(); });
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EventService);
    return EventService;
    var _a;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/event.service.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    //para development
    //url: 'http://localhost:3977/api/',
    //para produccion
    url: 'http://formacionescae.disolutionsmx.com:3977/api/',
    ip: '127.0.0.1'
};
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/global.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notificaciones_service__ = __webpack_require__(551);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(_route, _router, _clienteService, _notificationService) {
        this._route = _route;
        this._router = _router;
        this._clienteService = _clienteService;
        this._notificationService = _notificationService;
        this.title = 'Formaciones';
        this.subtitle = 'CAE';
        this.cliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ROLE_USER', '', 'no subida..');
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.clientHeight = window.innerHeight;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.token = this._clienteService.getToken();
        this.identity = this._clienteService.getidentity();
        console.log(this.token);
        console.log(this.identity);
        this.getNotificaciones();
    };
    AppComponent.prototype.UpdateNotificacion = function () {
        this.getNotificaciones();
    };
    AppComponent.prototype.getNotificaciones = function () {
        var _this = this;
        this._notificationService.getNoty(this.token).subscribe(function (response) {
            if (!response.notificaciones) {
                alert('Error en el Servidor');
                console.log('entro aqui');
            }
            else {
                _this.notificacion = response.notificaciones;
                console.log(_this.notificacion);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                console.log(error);
            }
        });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.cliente);
        //conseguir los datos del user identificado
        this._clienteService.signup(this.cliente).subscribe(function (response) {
            console.log(response);
            var identity = response.cliente;
            _this.identity = identity;
            if (!_this.identity._id) {
                alert("El usuario no esta identificado");
            }
            else {
                localStorage.setItem('identity', JSON.stringify(identity));
                _this._clienteService.signup(_this.cliente, 'true').subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    console.log(response);
                    if (_this.token.length <= 0) {
                        alert("El token no se genero correctamente");
                    }
                    else {
                        localStorage.setItem('token', token);
                        //Dirigir a home al loguearse
                        _this._router.navigate(['/evento', 1]);
                    }
                }, function (error) {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        var body = JSON.parse(error._body);
                        _this.errorMessage = body.message;
                        console.log(error);
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.errorMessage = body.message;
                console.log(error);
            }
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.identity = null;
        this.token = null;
        this.cliente = new __WEBPACK_IMPORTED_MODULE_3__models_cliente__["a" /* Cliente */]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'ROLE_USER', '', 'no subida..');
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(707),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5__services_notificaciones_service__["a" /* NotificationsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_cliente_service__["a" /* ClienteService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_notificaciones_service__["a" /* NotificationsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_notificaciones_service__["a" /* NotificationsService */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/app.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cliente_edit_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_espacio_components__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_addespacio_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_editespacio_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_detailespacio_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filter_pipe__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__safe_pipe__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_eventlist_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_eventadd_componenet__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_eventedit_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_eventdetail_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_turnoadd_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_turnoedit_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_asistencia_add_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_miseventos_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_turno_detail_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_adminpanel_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_cliente_add_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_detallecliente_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_editarclienteadmin_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_addconsulta_component__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_cliente_edit_component__["a" /* ClienteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_espacio_components__["a" /* EspacioComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_addespacio_component__["a" /* AddespComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_addconsulta_component__["a" /* addConsultaComponent */],
                //    EventListComponent,
                __WEBPACK_IMPORTED_MODULE_15__components_eventadd_componenet__["a" /* EventaddComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_editespacio_component__["a" /* EditespComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_detailespacio_component__["a" /* DetailespacioComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_eventdetail_component__["a" /* EventDetailComponente */],
                __WEBPACK_IMPORTED_MODULE_19__components_turnoedit_component__["a" /* TurnoEditComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_miseventos_component__["a" /* misEventosComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_detallecliente_component__["a" /* ClienteDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_eventlist_component__["a" /* EventlistComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_eventedit_component__["a" /* EventeditComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_turnoadd_component__["a" /* TurnoAddComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_asistencia_add_component__["a" /* AssistantaddComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_turno_detail_component__["a" /* TurnodetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_adminpanel_component__["a" /* adminPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_cliente_add_component__["a" /* ClienteaddComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_editarclienteadmin_component__["a" /* ClienteEditarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__safe_pipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* appRoutingProviders */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/app.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cliente_edit_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_cliente_add_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_editarclienteadmin_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_espacio_components__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_addespacio_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_editespacio_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_detailespacio_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_eventlist_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_eventedit_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_eventadd_componenet__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_eventdetail_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_turnoadd_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_turnoedit_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_asistencia_add_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_turno_detail_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_miseventos_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_adminpanel_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_detallecliente_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_addconsulta_component__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_cliente_edit_component__["a" /* ClienteEditComponent */] },
    { path: 'editar-turno/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_turnoedit_component__["a" /* TurnoEditComponent */] },
    { path: 'detalle-cliente/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_detallecliente_component__["a" /* ClienteDetailComponent */] },
    { path: 'panel-admin', component: __WEBPACK_IMPORTED_MODULE_18__components_adminpanel_component__["a" /* adminPanelComponent */] },
    { path: 'mis-eventos', component: __WEBPACK_IMPORTED_MODULE_17__components_miseventos_component__["a" /* misEventosComponent */] },
    { path: 'turno-detail/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_turno_detail_component__["a" /* TurnodetailComponent */] },
    { path: 'consulta-add', component: __WEBPACK_IMPORTED_MODULE_20__components_addconsulta_component__["a" /* addConsultaComponent */] },
    { path: 'eventedit/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_eventedit_component__["a" /* EventeditComponent */] },
    // {path:'espacio/:page',component:EspacioComponent},
    { path: 'detalle-evento/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_eventdetail_component__["a" /* EventDetailComponente */] },
    { path: 'evento/:page', component: __WEBPACK_IMPORTED_MODULE_8__components_eventlist_component__["a" /* EventlistComponent */] },
    { path: 'espacio/:page', component: __WEBPACK_IMPORTED_MODULE_4__components_espacio_components__["a" /* EspacioComponent */] },
    { path: 'add-espacio', component: __WEBPACK_IMPORTED_MODULE_5__components_addespacio_component__["a" /* AddespComponent */] },
    { path: 'edit-espacio/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_editespacio_component__["a" /* EditespComponent */] },
    { path: 'detail-espacio/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_detailespacio_component__["a" /* DetailespacioComponent */] },
    { path: 'mis-datos', component: __WEBPACK_IMPORTED_MODULE_1__components_cliente_edit_component__["a" /* ClienteEditComponent */] },
    // {path:'evento/:page',component: EventListComponent},   
    { path: 'cliente-edit', component: __WEBPACK_IMPORTED_MODULE_1__components_cliente_edit_component__["a" /* ClienteEditComponent */] },
    { path: 'editarcliente/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_editarclienteadmin_component__["a" /* ClienteEditarComponent */] },
    { path: 'event-add', component: __WEBPACK_IMPORTED_MODULE_10__components_eventadd_componenet__["a" /* EventaddComponent */] },
    { path: 'crear-turno/:evento', component: __WEBPACK_IMPORTED_MODULE_13__components_turnoadd_component__["a" /* TurnoAddComponent */] },
    { path: 'assistant-add/:turno', component: __WEBPACK_IMPORTED_MODULE_15__components_asistencia_add_component__["a" /* AssistantaddComponent */] },
    { path: 'cliente-add', component: __WEBPACK_IMPORTED_MODULE_2__components_cliente_add_component__["a" /* ClienteaddComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__components_home_component__["a" /* HomeComponent */] },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
console.log(__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]);
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/app.routing.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term, brand, dateS, visible, campana, name, email, establecimiento, phone, cliente) {
        if (items && items.length) {
            return items.filter(function (item) {
                if (item.code) {
                    if (establecimiento && item.code.toLowerCase().indexOf(establecimiento.toLowerCase()) === -1) {
                        return false;
                    }
                }
                if (item.province) {
                    if (term && item.province.toLowerCase().indexOf(term.toLowerCase()) === -1) {
                        return false;
                    }
                }
                if (item.brand) {
                    if (brand && item.brand.toLowerCase().indexOf(brand.toLowerCase()) === -1) {
                        return false;
                    }
                }
                if (item.dateS) {
                    if (dateS && item.dateS.indexOf(dateS) === -1) {
                        return false;
                    }
                }
                if (item.visible) {
                    if (visible && item.visible.toLowerCase().indexOf(visible.toLowerCase()) === -1) {
                        return false;
                    }
                }
                if (item.campana) {
                    if (campana && item.campana.toLowerCase().indexOf(campana.toLowerCase()) === -1) {
                        return false;
                    }
                }
                if (item.name) {
                    if (name && item.name.toLowerCase().indexOf(name.toLowerCase()) === -1) {
                        return false;
                    }
                }
                if (item.email) {
                    console.log(email);
                    if (email && item.email.toLowerCase().indexOf(email.toLowerCase()) === -1) {
                        return false;
                    }
                }
                if (item.phone) {
                    if (phone && item.phone.indexOf(phone) === -1) {
                        return false;
                    }
                }
                if (item.cliente) {
                    if (cliente && item.cliente.toLowerCase().indexOf(cliente.toLowerCase()) === -1) {
                        return false;
                    }
                }
                if (item.turno) {
                    if (item.turno.event.brand) {
                        if (brand && item.turno.event.brand.toLowerCase().indexOf(brand.toLowerCase()) === -1) {
                            return false;
                        }
                    }
                    if (item.turno.event.campana) {
                        console.log(campana);
                        if (campana && item.turno.event.campana.toLowerCase().indexOf(campana.toLowerCase()) === -1) {
                            return false;
                        }
                    }
                    if (item.turno.event.province) {
                        if (term && item.turno.event.province.toLowerCase().indexOf(term.toLowerCase()) === -1) {
                            return false;
                        }
                    }
                    if (item.turno.event.dateS) {
                        if (dateS && item.turno.event.dateS.indexOf(dateS) === -1) {
                            return false;
                        }
                    }
                }
                return true;
            });
        }
        else {
            return items;
        }
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/filter.pipe.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consulta; });
var Consulta = (function () {
    function Consulta(title, cliente, date) {
        this.title = title;
        this.cliente = cliente;
        this.date = date;
    }
    return Consulta;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/consulta.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return email; });
var email = (function () {
    function email(username, evento, fecha, lugar, gmaps, direccion, destino) {
        this.username = username;
        this.evento = evento;
        this.fecha = fecha;
        this.lugar = lugar;
        this.gmaps = gmaps;
        this.direccion = direccion;
        this.destino = destino;
    }
    return email;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/email.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Respuesta; });
var Respuesta = (function () {
    function Respuesta(consulta, cliente, body, date) {
        this.consulta = consulta;
        this.cliente = cliente;
        this.body = body;
        this.date = date;
    }
    return Respuesta;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/respuesta.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({ name: 'safe' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/safe.pipe.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsultaService = (function () {
    function ConsultaService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    ConsultaService.prototype.getConsultaC = function (token, cliente) {
        if (cliente === void 0) { cliente = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (cliente == null) {
            return this._http.get(this.url + 'consultasc/', options).map(function (res) { return res.json(); });
        }
        else {
            return this._http.get(this.url + 'consultasc/' + cliente, options).map(function (res) { return res.json(); });
        }
    };
    ConsultaService.prototype.getConsulta = function (token, cliente) {
        if (cliente === void 0) { cliente = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (cliente == null) {
            return this._http.get(this.url + 'consultas/', options).map(function (res) { return res.json(); });
        }
        else {
            return this._http.get(this.url + 'consultas/' + cliente, options).map(function (res) { return res.json(); });
        }
    };
    ConsultaService.prototype.getRespuestasH = function (token, consulta) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'respuestash/' + consulta, options).map(function (res) { return res.json(); });
    };
    ConsultaService.prototype.addconsulta = function (token, consulta) {
        var params = JSON.stringify(consulta);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + '/consulta', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConsultaService.prototype.addRespuesta = function (token, respuesta) {
        var params = JSON.stringify(respuesta);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + '/respuesta', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ConsultaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ConsultaService);
    return ConsultaService;
    var _a;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/consulta.service.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsService = (function () {
    function NotificationsService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    NotificationsService.prototype.getNoty = function (token, eventId) {
        if (eventId === void 0) { eventId = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (eventId == null) {
            return this._http.get(this.url + 'notify/', options).map(function (res) { return res.json(); });
        }
        else {
            return this._http.get(this.url + 'notify/' + eventId, options).map(function (res) { return res.json(); });
        }
    };
    NotificationsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], NotificationsService);
    return NotificationsService;
    var _a;
}());
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/notificaciones.service.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/users/saul_/desktop/Loreal/client/src/environment.js.map

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"identity\" class=\"navigation col-lg-12 col-xs-12\" style=\"padding: 0px;\">\r\n    <nav  id=\"navigation\" style=\"width:100%; z-index: 1;box-shadow: 0px -1px 6px rgba(0,0,0,.2);\" class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n        <!-- <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n                    Inicio\r\n                </a> -->\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" style=\"margin-right: 11%;\" id=\"navbarText\">\r\n\r\n            <span class=\"navbar-text\">\r\n\r\n\r\n                <ul class=\"navbar-nav \">\r\n                    <ul class=\"navbar-nav my-2 my-lg-0\">\r\n\r\n                        <li class=\"nav-item\">\r\n\r\n                            <a class=\"nav-link\" [routerLink]=\"['/evento',1]\" [routerLinkActive]=\"['actived']\">\r\n\r\n                                Eventos\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n\r\n                            <a [routerLink]=\"['/mis-eventos']\" [routerLinkActive]=\"['actived']\" class=\"nav-link\">\r\n\r\n                                Mis Eventos\r\n                            </a>\r\n\r\n                        </li>\r\n                        <li class=\"nav-item\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN' || identity.role =='ROLE_AGENTE' || identity.role=='ROLE_ENCARGADO'\">\r\n\r\n                            <a [routerLink]=\"['/panel-admin']\" [routerLinkActive]=\"['actived']\" class=\"nav-link\">\r\n\r\n                                Clientes\r\n                            </a>\r\n\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n\r\n                            <a [routerLink]=\"['/mis-datos']\" class=\"nav-link\" [routerLinkActive]=\"['actived']\">\r\n\r\n\r\n                                Mi Perfil\r\n                                <!-- {{identity.name}} -->\r\n\r\n                            </a>\r\n\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a [routerLink]=\"['/consulta-add']\" class=\"nav-link\" [routerLinkActive]=\"['actived']\">Consultas</a>\r\n                        </li>\r\n                        <li (mouseover)=\"UpdateNotificacion();\" class=\"nav-item\" *ngIf=\"identity.role==='ROLE_ADMIN'\">\r\n\r\n                            <a  class=\"nav-link\" id=\"example\" rel=\"popover\" data-content=\"\" data-original-title=\"Notificaciones\" data-placement=\"bottom\">\r\n                                Notificaciones <span class=\"badge badge-light\">+</span>\r\n                            </a>\r\n\r\n                            <div id=\"popover_content_wrapper\" style=\"display: none\">\r\n                                    <ul class=\"list-group\">\r\n                                            <li *ngFor=\"let notificaciones of notificacion\" class=\"list-group-item\">{{notificaciones.body}}<br><label style=\"font-size: 9px\">{{notificaciones.date}}</label></li>\r\n                                            \r\n                                          </ul>\r\n                            </div>\r\n\r\n                        </li>\r\n                        <li class=\"nav-item\" *ngIf=\"identity && identity.role == 'ROLE_USER'\">\r\n\r\n                            <a href=\"http://canalfarma.com\"  (click)=\"logout()\" [routerLinkActive]=\"['actived']\" class=\"nav-link\">\r\n\r\n                                Canal Farma\r\n                            </a>\r\n\r\n                        </li>\r\n\r\n\r\n                        <li class=\"nav-item\">\r\n\r\n                            <a class=\"nav-link btn-logout\" (click)=\"logout()\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN' || identity.role =='ROLE_AGENTE' || identity.role=='ROLE_ENCARGADO'\">\r\n\r\n                                Salir\r\n                            </a>\r\n\r\n                        </li>\r\n                    </ul>\r\n                </ul>\r\n            </span>\r\n        </div>\r\n    </nav>\r\n</div>\r\n<div [style.display]=\"!identity?'none':'inherit'\" class=\"central col-lg-12\" style=\"background: #f2f2f2; height: 100%; padding: 0px;\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row\" style=\"width: 100% ;height:50%; margin-left: 0px;\" *ngIf=\"!identity\">\r\n    <div id=\"over\" style=\"height: 100%;\">\r\n        <img style=\"max-height: 130px;\" class=\"img-responsive\" src=\"../assets/images/COSMÉTICA ACTIVA.png\" />\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"row justify-content-center align-items-center loginform\" style=\"height: 47%; font-family: Gotham-Book;\" *ngIf=\"!identity\">\r\n\r\n\r\n    <div class=\"col-lg-3\">\r\n\r\n\r\n\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n            <strong>Ups!</strong>{{errorMessage}}\r\n        </div>\r\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-12\">\r\n            <p>\r\n                <label>Correo:</label>\r\n                <input type=\"email\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"cliente.email\" class=\"form-control\" required placeholder=\"Introduce tu e-mail\"\r\n                />\r\n                <span *ngIf=\"!email.valid && email.touched\">\r\n                    El campo email es obligatorio!\r\n                </span>\r\n\r\n            </p>\r\n            <p>\r\n                <label>Contraseña:</label>\r\n                <input type=\"Password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"cliente.password\" class=\"form-control\" placeholder=\"Introduce tu password\"\r\n                />\r\n\r\n            </p>\r\n            <br>\r\n            <p style=\"text-align: right;\">\r\n            <input type=\"submit\" value=\"Entrar\" class=\"btn btn-primary\" >\r\n            </p>\r\n        </form>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<div class=\"row card2\">\r\n    <div class=\"col-lg-3\">\r\n    <h1>Lista de Consultas</h1>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n\r\n  </div>\r\n  <div class=\"col-lg-2\"><br><br>\r\n   <!-- Button trigger modal -->\r\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n    Agregar Consulta\r\n  </button>\r\n  \r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ponle un titulo a tu consulta</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form #formAssistant=\"ngForm\" >\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\"></div>\r\n                   \r\n                    <div class=\"col-md-6 col-xs-6 \">\r\n                        <p>\r\n                            <br>\r\n                            <label>Titulo de la consulta:</label>\r\n                            <input type=\"text\" #nameEstablishment=\"ngModel\" name=\"nameEstablishment\" [(ngModel)]=\"consult.title\" required\r\n                                class=\"form-control form-control-lg\"  />\r\n    \r\n                        </p>\r\n    \r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"col-md-4\"></div>\r\n                    <div class=\"col-md-4\">\r\n                        <button type=\"button\" (click)='onSubmit()' data-dismiss=\"modal\" value=\"{{'Agregar'}}\" class=\"btn btn-primary\" >Continuar</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-secondary\" >salir</button>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row card2\" *ngIf=\"identity.role=='ROLE_USER'\">\r\n  <div class=\"messaging\">\r\n    <div class=\"inbox_msg\">\r\n      <div class=\"inbox_people\">\r\n        <div class=\"headind_srch\">\r\n          <div class=\"recent_heading\">\r\n            <h4>Consultas</h4>\r\n          </div>\r\n         \r\n        </div>\r\n        <div class=\"inbox_chat\" >\r\n          <div class=\"chat_list active_chat\"(click)=\"getRespuestas(consultas._id)\" *ngFor=\"let consultas of consultasc\">\r\n            <div class=\"chat_people\" >\r\n              <div class=\"chat_img\"> <img src=\"{{url +'get-image-user/'+consultas.cliente.image}}\" alt=\"sunil\"> </div>\r\n              <div class=\"chat_ib\">\r\n                  <label>{{consultas.cliente.name+' '+consultas.cliente.surname+' '}}</label><span class=\"chat_date\"><a href=\"{{'mailto:'+consultas.cliente.email}}\"> <i class=\"fas fa-envelope\"></i></a></span> <span class=\"chat_date\"><a href=\"{{'tel:'+consultas.cliente.phone}}\"> <i class=\"fas fa-phone\"></i></a></span>\r\n                 <p>{{consultas.title}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      <div class=\"mesgs\">\r\n        <div class=\"msg_history\" #container>\r\n\r\n            \r\n          <div [class.incoming_msg]=\"respuestas.cliente._id!=identity._id\" [class.outgoing_msg]=\"identity._id==respuestas.cliente._id\" *ngFor=\"let respuestas of respuestas\">\r\n              <div *ngIf=\"respuestas.cliente._id!=identity._id\" class=\"incoming_msg_img\"> <img src=\"{{url+'get-image-user/'+respuestas.cliente.image}}\" alt=\"sunil\"> </div>\r\n            <div  [class.received_msg]=\"respuestas.cliente._id!=identity._id\" [class.sent_msg]=\"identity._id==respuestas.cliente._id\">\r\n              <div [class.received_withd_msg]=\"respuestas.cliente._id!=identity._id\">\r\n                <p>{{respuestas.body}}</p>\r\n                <span class=\"time_date\"> {{respuestas.date}}</span></div>\r\n            </div>\r\n          </div>\r\n          \r\n          <hr>\r\n        </div>\r\n        <div class=\"type_msg\">\r\n          <div class=\"input_msg_write\"><form  #formAssistant=\"ngForm\" (ngSubmit)=\"onSubmitResponse()\">\r\n              <input type=\"text\" placeholder=\"Escribe Aqui\" #body=\"ngModel\" name=\"body\" [(ngModel)]=\"respuesta.body\" required\r\n              class=\"form-control form-control-lg\"  (keyup.enter)=\"onSubmitResponse()\" />\r\n              <button class=\"msg_send_btn\" type=\"submit\"><i class=\"fas fa-paper-plane\" aria-hidden=\"true\"></i></button>\r\n             \r\n\r\n          </form>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n  </div>\r\n</div>\r\n<div class=\"row card2\" *ngIf=\"identity.role!='ROLE_USER'\">\r\n    <div class=\"messaging\">\r\n      <div class=\"inbox_msg\">\r\n        <div class=\"inbox_people\">\r\n          <div class=\"headind_srch\">\r\n            <div class=\"recent_heading\">\r\n              <h4>Consultas</h4>\r\n            </div>\r\n           \r\n          </div>\r\n          <div class=\"inbox_chat\" >\r\n            <div class=\"chat_list active_chat\"(click)=\"getRespuestas(consultas._id)\" *ngFor=\"let consultas of consultas\">\r\n              <div class=\"chat_people\" >\r\n                <div class=\"chat_img\"> <img src=\"{{url +'get-image-user/'+consultas.cliente.image}}\" alt=\"sunil\"> </div>\r\n                <div class=\"chat_ib\">\r\n                    <label>{{consultas.cliente.name+' '+consultas.cliente.surname+' '}}</label><span class=\"chat_date\"><a href=\"{{'mailto:'+consultas.cliente.email}}\"> <i class=\"fas fa-envelope\"></i></a></span> <span class=\"chat_date\"><a href=\"{{'tel:'+consultas.cliente.phone}}\"> <i class=\"fas fa-phone\"></i></a></span>\r\n                   <p>{{consultas.title}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"mesgs\">\r\n          <div class=\"msg_history\" #container>\r\n  \r\n              \r\n            <div [class.incoming_msg]=\"respuestas.cliente._id!=identity._id\" [class.outgoing_msg]=\"identity._id==respuestas.cliente._id\" *ngFor=\"let respuestas of respuestas\">\r\n                <div *ngIf=\"respuestas.cliente._id!=identity._id\" class=\"incoming_msg_img\"> <img src=\"{{url+'get-image-user/'+respuestas.cliente.image}}\" alt=\"sunil\"> </div>\r\n              <div  [class.received_msg]=\"respuestas.cliente._id!=identity._id\" [class.sent_msg]=\"identity._id==respuestas.cliente._id\">\r\n                <div [class.received_withd_msg]=\"respuestas.cliente._id!=identity._id\">\r\n                  <p>{{respuestas.body}}</p>\r\n                  <span class=\"time_date\"> {{respuestas.date}}</span></div>\r\n              </div>\r\n            </div>\r\n            \r\n            <hr>\r\n          </div>\r\n          <div class=\"type_msg\">\r\n            <div class=\"input_msg_write\"><form  #formAssistant=\"ngForm\" (ngSubmit)=\"onSubmitResponse()\">\r\n                <input type=\"text\" placeholder=\"Escribe Aqui\" #body=\"ngModel\" name=\"body\" [(ngModel)]=\"respuesta.body\" required\r\n                class=\"form-control form-control-lg\"  (keyup.enter)=\"onSubmitResponse()\" />\r\n                <button class=\"msg_send_btn\" type=\"submit\"><i class=\"fas fa-paper-plane\" aria-hidden=\"true\"></i></button>\r\n               \r\n  \r\n            </form>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n<div class=\"row card2\">\r\n\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roche.jpeg\">\r\n    </div>\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roger.jpeg\">\r\n    </div>\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/skins.jpeg\">\r\n    </div>\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/vichy.jpeg\">\r\n    </div>\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/CERAVE.png\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row card2\">\r\n        <h1>CLIENTES</h1>\r\n    </div>\r\n    <br>\r\n    <div class=\"row card2\">\r\n\r\n        <div class=\"col-lg-3\">\r\n            <h1>BUSCAR</h1>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-lg-9\">\r\n            <div class=\"row\">\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-8 col-md-2\">\r\n                    <label>Nombre</label>\r\n                    <input [(ngModel)]=\"name\" type=\"text\" [placeholder]=\"'Por Nombre'\" class=\"form-control\">\r\n\r\n\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-8 col-md-2\">\r\n                    <label>Mail</label>\r\n\r\n\r\n                    <input [ngModel]=\"email\" [placeholder]=\"'Por e-Mail'\" (ngModelChange)=\"email = $event\" type=\"text\" name=\"email\" class=\"form-control\"\r\n                    />\r\n\r\n\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <label>Provincia</label>\r\n                    <select class=\"form-control\" name=\"term\" [(ngModel)]=\"term\">\r\n                        <option selected=\"selected\" value=\"\">Selecciona...</option>\r\n                        <option value=\"Albacete\">Albacete</option>\r\n                        <option value=\"Alicante/Alacant\">Alicante/Alacant</option>\r\n                        <option value=\"Almería\">Almería</option>\r\n                        <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                        <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                        <option value=\"Asturias\"> Asturias</option>\r\n                        <option value=\"Ávila\"> Ávila</option>\r\n                        <option value=\"Badajoz\"> Badajoz</option>\r\n                        <option value=\"Balears, Illes\"> Balears, Illes</option>\r\n                        <option value=\"Barcelona\"> Barcelona</option>\r\n                        <option value=\"Bizkaia\"> Bizkaia</option>\r\n                        <option value=\"Burgos\"> Burgos</option>\r\n                        <option value=\"Cáceres\"> Cáceres</option>\r\n                        <option value=\"Cádiz\"> Cádiz</option>\r\n                        <option value=\"Cantabria\"> Cantabria</option>\r\n                        <option value=\"Castellón/Castelló\"> Castellón/Castelló</option>\r\n                        <option value=\"Ceuta\"> Ceuta</option>\r\n                        <option value=\"Ciudad Real\"> Ciudad Real</option>\r\n                        <option value=\"Córdoba\"> Córdoba</option>\r\n                        <option value=\"Coruña,A\"> Coruña,A</option>\r\n                        <option value=\"Cuenca\"> Cuenca</option>\r\n                        <option value=\"Gipuzkoa\"> Gipuzkoa</option>\r\n                        <option value=\"Girona\"> Girona</option>\r\n                        <option value=\"Granada\"> Granada</option>\r\n                        <option value=\"Guadalajara\"> Guadalajara</option>\r\n                        <option value=\"Huelva\"> Huelva</option>\r\n                        <option value=\"Huesca\"> Huesca</option>\r\n                        <option value=\"Jaén\"> Jaén</option>\r\n                        <option value=\"León\"> León</option>\r\n                        <option value=\"Lleidra\"> Lleidra</option>\r\n                        <option value=\"Lugo\"> Lugo</option>\r\n                        <option value=\"Madrid\"> Madrid</option>\r\n                        <option value=\"Málaga\"> Málaga</option>\r\n                        <option value=\"Melilla\"> Melilla</option>\r\n                        <option value=\"Murcia\"> Murcia</option>\r\n                        <option value=\"Navarra\"> Navarra</option>\r\n                        <option value=\"Ourense\"> Ourense</option>\r\n                        <option value=\"Palencia\"> Palencia</option>\r\n                        <option value=\"Palmas, Las\"> Palmas, Las</option>\r\n                        <option value=\"Pontevedra\"> Pontevedra</option>\r\n                        <option value=\"Rioja, La\"> Rioja, La</option>\r\n                        <option value=\"Salamanca\"> Salamanca</option>\r\n                        <option value=\"Santa Cruz de Tenerife\"> Santa Cruz de Tenerife</option>\r\n                        <option value=\"Segovia\"> Segovia</option>\r\n                        <option value=\"Sevilla\"> Sevilla</option>\r\n                        <option value=\"Soria\"> Soria</option>\r\n                        <option value=\"Tarragona\"> Tarragona</option>\r\n                        <option value=\"Teruel\"> Teruel</option>\r\n                        <option value=\"Toledo\"> Toledo</option>\r\n                        <option value=\"Valencia/Valéncia\"> Valencia/Válencia</option>\r\n                        <option value=\"Valladolid\"> Valladolid</option>\r\n                        <option value=\"Zamora\"> Zamora</option>\r\n                        <option value=\"Zaragoza\"> Zaragoza</option>\r\n                    </select>\r\n\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-8 col-md-2\">\r\n                    <label>Código Farmacia</label>\r\n                    <input [(ngModel)]=\"establecimiento\" [placeholder]=\"'Por Codigo Farmacia'\" type=\"text\" class=\"form-control\">\r\n\r\n\r\n                </div>\r\n                <!-- <div class=\"col-md-2\"><label>Provincia</label>\r\n                                <select class=\"form-control\" name=\"term\" [(ngModel)]=\"term\">\r\n                                        <option selected=\"selected\">Selecciona...</option>\r\n                                        <option value=\"Albacete\">Albacete</option>\r\n                                        <option value=\"Alicante/Alacant\">Alicante/Alacant</option>\r\n                                        <option value=\"Almería\">Almería</option>\r\n                                        <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                                        <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                                        <option value=\"Asturias\"> Asturias</option>\r\n                                        <option value=\"Ávila\"> Ávila</option>\r\n                                        <option value=\"Badajoz\"> Badajoz</option>\r\n                                        <option value=\"Balears, Illes\"> Balears, Illes</option>\r\n                                        <option value=\"Barcelona\"> Barcelona</option>\r\n                                        <option value=\"Bizkaia\"> Bizkaia</option>\r\n                                        <option value=\"Burgos\"> Burgos</option>\r\n                                        <option value=\"Cáceres\"> Cáceres</option>\r\n                                        <option value=\"Cádiz\"> Cádiz</option>\r\n                                        <option value=\"Cantabria\"> Cantabria</option>\r\n                                        <option value=\"Castellón/Castelló\"> Castellón/Castelló</option>\r\n                                        <option value=\"Ceuta\"> Ceuta</option>\r\n                                        <option value=\"Ciudad Real\"> Ciudad Real</option>\r\n                                        <option value=\"Córdoba\"> Córdoba</option>\r\n                                        <option value=\"Coruña,A\"> Coruña,A</option>\r\n                                        <option value=\"Cuenca\"> Cuenca</option>\r\n                                        <option value=\"Gipuzkoa\"> Gipuzkoa</option>\r\n                                        <option value=\"Girona\"> Girona</option>\r\n                                        <option value=\"Granada\"> Granada</option>\r\n                                        <option value=\"Guadalajara\"> Guadalajara</option>\r\n                                        <option value=\"Huelva\"> Huelva</option>\r\n                                        <option value=\"Huesca\"> Huesca</option>\r\n                                        <option value=\"Jaén\"> Jaén</option>\r\n                                        <option value=\"León\"> León</option>\r\n                                        <option value=\"Lleidra\"> Lleidra</option>\r\n                                        <option value=\"Lugo\"> Lugo</option>\r\n                                        <option value=\"Madrid\"> Madrid</option>\r\n                                        <option value=\"Málaga\"> Málaga</option>\r\n                                        <option value=\"Melilla\"> Melilla</option>\r\n                                        <option value=\"Murcia\"> Murcia</option>\r\n                                        <option value=\"Navarra\"> Navarra</option>\r\n                                        <option value=\"Ourense\"> Ourense</option>\r\n                                        <option value=\"Palencia\"> Palencia</option>\r\n                                        <option value=\"Palmas, Las\"> Palmas, Las</option>\r\n                                        <option value=\"Pontevedra\"> Pontevedra</option>\r\n                                        <option value=\"Rioja, La\"> Rioja, La</option>\r\n                                        <option value=\"Salamanca\"> Salamanca</option>\r\n                                        <option value=\"Santa Cruz de Tenerife\"> Santa Cruz de Tenerife</option>\r\n                                        <option value=\"Segovia\"> Segovia</option>\r\n                                        <option value=\"Sevilla\"> Sevilla</option>\r\n                                        <option value=\"Soria\"> Soria</option>\r\n                                        <option value=\"Tarragona\"> Tarragona</option>\r\n                                        <option value=\"Teruel\"> Teruel</option>\r\n                                        <option value=\"Toledo\"> Toledo</option>\r\n                                        <option value=\"Valencia/Valéncia\"> Valencia/Válencia</option>\r\n                                        <option value=\"Valladolid\"> Valladolid</option>\r\n                                        <option value=\"Zamora\"> Zamora</option>\r\n                                        <option value=\"Zaragoza\"> Zaragoza</option>\r\n                                    </select>\r\n\r\n                        </div> -->\r\n                <div class=\"col-md-2\">\r\n                    <label>Teléfono</label>\r\n                    <input [(ngModel)]=\"phone\" [placeholder]=\"'Por Telefono'\" type=\"text\" class=\"form-control\">\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n    </div>\r\n    <div class=\"row card2\">\r\n        <table class=\"table table-black\">\r\n            <thead>\r\n                <tr>\r\n\r\n                    <th scope=\"col\">Foto</th>\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Apellidos</th>\r\n                    <th scope=\"col\">Código Farmacia</th>\r\n                    <th scope=\"col\">Teléfono</th>\r\n                    <th scope=\"col\"> Mail</th>\r\n                    <th scope=\"col\"> Acciones</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr class=\"animated bounceInRight\" *ngFor=\"let cliente of clientes | filter:term:brand:dateS:visible:campana:name:email:establecimiento:phone\">\r\n                    <td scope=\"row\">\r\n                        <img src=\"{{url+'get-image-user/'+cliente.image}}\" class=\"useravatarnav\">\r\n                    </td>\r\n                    <td>{{cliente.name}}</td>\r\n                    <td>{{cliente.surname}}</td>\r\n                    <td>{{cliente.code}}</td>\r\n                    <td>{{cliente.phone}}</td>\r\n                    <td>\r\n                        <a href=\"mailto:{{cliente.email}}\">{{cliente.email}}</a>\r\n                    </td>\r\n\r\n                    <td>\r\n                        <a class=\"btn btn-primary btn-md\" [routerLink]=\"['/detalle-cliente',cliente._id] \"> Más\r\n                            <i class=\"fas fa-plus-circle\"></i>\r\n                        </a>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"buttons animated fadeIn\" *ngIf=\"identity.role=='ROLE_ADMIN' && showoptions==0\">\r\n\r\n                            <!-- <a [routerLink]=\"['/editarcliente',cliente._id] \" class=\"btn btn-md btn-warning\">\r\n                                    <i class=\"fas fa-edit\"></i>Editar</a>\r\n                                <a (click)=\"onDeleteConfirm(cliente._id)\" class=\"btn btn-md btn-danger\">\r\n                                    <i class=\"fas fa-window-close\"></i>\r\n                                    Borrar</a> -->\r\n\r\n                        </div>\r\n                        <!-- <div class=\"seguro animated fadeIn\" *ngIf=\"confirmado==cliente._id\">\r\n                                    <a (click)=\"onDeleteEvento(cliente._id)\" class=\"btn btn-md btn-danger\"><i class=\"fas fa-window-close\"></i> Borrar</a>\r\n                                    <a  (click)=\"onCancelEvento()\" class=\"btn btn-md btn-secondary\"><i class= \"fas fa-ban\"></i> Cancelar</a>\r\n                                </div> -->\r\n                    </td>\r\n\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n\r\n\r\n\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\" style=\"margin-left:-15px;\">\r\n            <a class=\"btn btn-secondary\" href=\"{{url+'getreporte'}}\">\r\n                Reporte csv\r\n                <i class=\"fa fa-plus-circle\"></i>\r\n            </a>\r\n            <br>\r\n            <br>\r\n            <button class=\"btn btn-primary\" [routerLink]=\"['/evento',1]\">\r\n                Volver\r\n                <i class=\"fas fa-arrow-circle-left\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-md-6\" style=\"text-align: right;\">\r\n            <br>\r\n            <br>\r\n            <a [routerLink]=\"['/cliente-add']\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN'\" class=\"btn btn-secondary\">\r\n                Añadir cliente\r\n                <i class=\"fa fa-plus-circle\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row card2\">\r\n\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roche.jpeg\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roger.jpeg\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/skins.jpeg\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/vichy.jpeg\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/CERAVE.png\">\r\n        </div>\r\n\r\n    </div>\r\n    <br><br><br>\r\n\r\n</div>"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"identity\">\r\n    \r\n    <div class=\"row card2\">\r\n        \r\n    <h1>{{titulo}}</h1>\r\n\r\n    </div>\r\n\r\n<div *ngIf=\"alertMessage\" class=\"alert alert-warning\">\r\n    <strong>Respuesta:</strong>{{alertMessage}}\r\n</div>\r\n\r\n    <div class=\"row card2\">\r\n\r\n        <form #formAssistant=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-xs-6 \">\r\n                    <p>\r\n                        <br>\r\n                        <label>Cliente:</label>\r\n                        <input type=\"text\" #cliente=\"ngModel\" name=\"cliente\" [(ngModel)]=\"identity.name +' '+ identity.surname\" required class=\"form-control form-control-lg\"\r\n                            disabled />\r\n\r\n                    </p>\r\n\r\n                </div>\r\n                <div class=\"col-md-6 col-xs-6 \">\r\n                    <p>\r\n                        <br>\r\n                        <label>Establecimiento:</label>\r\n                        <input type=\"text\" #nameEstablishment=\"ngModel\" name=\"nameEstablishment\" [(ngModel)]=\"identity.nameEstablishment\" required\r\n                            class=\"form-control form-control-lg\" disabled />\r\n\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"submit\" value=\"{{'Inscribir'}}\" class=\"btn btn-primary\" />\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 \" style=\"margin: 15px;\" *ngIf=\"identity\">\r\n    <div class=\"container\">\r\n        <div class=\"row card2\" style=\"width: 100%\">\r\n            <h1> MI PERFIL </h1>\r\n        </div>\r\n        <div class=\"row card2\" style=\"width: 100%\">\r\n            <div class=\"col-lg-3\">\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"{{ url +'/get-image-user/' + cliente.image}}\" *ngIf=\"cliente.image && cliente.image!=='null'\"\r\n                        alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <FONT FACE=\"Gotham Light\" SIZE=4 style=\"color: rgb(17,152,184); text-transform: capitalize\">\r\n                            {{identity.name}}\r\n                        </FONT>\r\n                        <br>\r\n                        <FONT FACE=\"Gotham Light\" SIZE=4 style=\"color: rgb(17,152,184)\">\r\n                            {{identity.surname}}\r\n                        </FONT>\r\n                        <p class=\"card-text\">\r\n                            <a [routerLink]=\"['/editarcliente',cliente._id]\" class=\"btn btn-secondary\">\r\n                                Editar\r\n                                <i class=\"fas fa-plus-circle\"></i>\r\n                            </a>\r\n                            <br>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row \" style=\"width: 40%\">\r\n                <div class=\"col-lg-8\">\r\n                    <table class=\"egt\">\r\n                        <tr>\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Farmacia:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    {{identity.nameEstablishment}}\r\n                                </FONT>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <br>\r\n                        <tr>\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Código de Farmacia:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    &nbsp;{{identity.code}}\r\n                                </FONT>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <br>\r\n                        <tr>\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Email:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    {{identity.email}}\r\n                                </FONT>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <br>\r\n                        <tr>\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Teléfono:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    {{identity.phone}}\r\n                                </FONT>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <br>\r\n                        <tr>\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    NIF/CIF:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    {{identity.nifCif}}\r\n                                </FONT>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <br>\r\n                        <tr>\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Provincia:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    {{identity.province}}\r\n                                </FONT>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <br>\r\n                        <tr>\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Dirección:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    {{identity.street}}\r\n                                </FONT>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <br>\r\n                        <tr>\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Código Postal:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    {{identity.zip}}\r\n                                </FONT>\r\n                            </td>\r\n                        </tr>\r\n                        <br>\r\n                        <tr>\r\n\r\n\r\n                            <th>\r\n                                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Rol:\r\n                                </FONT>\r\n                            </th>\r\n\r\n                            <td>\r\n                                <FONT *ngIf=\"identity.role=='ROLE_ADMIN'\" FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    Administrador\r\n                                </FONT>\r\n                                <FONT *ngIf=\"identity.role=='ROLE_USER'\" FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    Usuario\r\n                                </FONT>\r\n                                <FONT *ngIf=\"identity.role=='ROLE_AGENTE'\" FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    Agente\r\n                                </FONT>\r\n                                <FONT *ngIf=\"identity.role=='ROLE_ENCARGADO'\" FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                    Encargado\r\n                                </FONT>\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <table class=\"egt\">\r\n\r\n                    <tr>\r\n\r\n                        <th>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                <p> Marcas:</p>\r\n                            </FONT>\r\n                        </th>\r\n\r\n                        <td>\r\n                            <ul class=\"list-group\">\r\n                                <li *ngIf=\"identity.brandV=='1'\" class=\"list-group-item\">\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                                        Vichy\r\n                                    </FONT>\r\n                                </li>\r\n                                <li  *ngIf=\"identity.brandSK=='1'\" class=\"list-group-item\">\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                                        SkinCeuticals\r\n                                    </FONT>\r\n                                </li>\r\n                                <li *ngIf=\"identity.brandLR=='1'\" class=\"list-group-item\">\r\n                                    <FONT  FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127); \">\r\n                                        La Roche-Posay\r\n                                    </FONT>\r\n                                </li>\r\n                                <li *ngIf=\"identity.brandRG=='1'\" class=\"list-group-item\">\r\n                                    <FONT  FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127); \">\r\n                                        Roger&Gallet\r\n                                    </FONT>\r\n                                </li>\r\n                                <li *ngIf=\"identity.brandCV=='1'\" class=\"list-group-item\">\r\n                                    <FONT  FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127); \">\r\n                                        CeraVE\r\n                                    </FONT>\r\n                                </li>\r\n                            </ul>\r\n\r\n\r\n\r\n\r\n\r\n                        </td>\r\n\r\n                    </tr>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <td style=\"text-align: right;\">\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                        <br>\r\n                      \r\n                        <a [routerLink]=\"['/evento/1']\" class=\"btn btn-md btn-primary\" style=\"text-align: right;\">\r\n                            Volver\r\n                            <i class=\"fas fa-arrow-circle-left\"></i>\r\n                        </a>\r\n                    </td>\r\n                </table>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <!-- <div class=\"row  animated fadeInRight\">\r\n            <div class=\"col-md-12 card2\">\r\n                <br>\r\n                <br>\r\n                <h2>{{titulo}}</h2>\r\n                <hr class=\"lineatitle\" />\r\n\r\n                <div *ngIf=\"AlertMessage\" class=\"alert alert-warning\">\r\n                    <strong>Respuesta:</strong>{{AlertMessage}}\r\n                </div>\r\n                <form #ClienteupdateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-11\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-sm-4\">\r\n                            <br>\r\n                            <br>\r\n                            <br>\r\n                            <br>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\" class=\"cols-sm-2 control-label\">Nombre:</label>\r\n                                <div class=\"cols-sm-10\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"fa fa-user fa\" aria-hidden=\"true\"></i>\r\n                                        </span>&nbsp;\r\n                                        <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"cliente.name\" class=\"form-control\" required placeholder=\"Introduce tu Nombre\"\r\n                                        />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <br>\r\n                            <br>\r\n                            <br>\r\n                            <br>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"surname\" class=\"cols-sm-2 control-label\">Apellidos:</label>\r\n                                <div class=\"cols-sm-10\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"fa fa-user fa\" aria-hidden=\"true\"> </i>\r\n                                        </span>&nbsp;\r\n                                        <input type=\"text\" #surname=\"ngModel\" name=\"surname\" [(ngModel)]=\"cliente.surname\" class=\"form-control\" required placeholder=\"Introduce tus Apellidos\"\r\n                                        />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"col-lg-12\">\r\n                                <div class=\"image_for_edit\" *ngIf=\"cliente.image && cliente.image !=null\">\r\n                                    <img src=\"{{url+'get-image-user/'+cliente.image}}\" class=\"useravatar\" />\r\n                                </div>\r\n                                <br>\r\n\r\n                            </div>\r\n                            <div class=\"col-lg-12\">\r\n\r\n                                <div class=\"upload-btn-wrapper\">\r\n                                    <button class=\"btno\">Seleccionar Foto</button>\r\n                                    <input type=\"file\" placeholder=\"Browse\" (change)=\"fileChangeEvent($event)\" />\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"phone\" class=\"cols-sm-2 control-label\">Telefono:</label>\r\n                                <div class=\"cols-sm-10\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"fas fa-mobile fa\"></i>\r\n                                        </span>&nbsp;\r\n                                        <input type=\"text\" #phone=\"ngModel\" name=\"phone\" [(ngModel)]=\"cliente.phone\" class=\"form-control\" placeholder=\"Introduce tu Telefono\"\r\n                                        />\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"nameEstablishment\" class=\"cols-sm-2 control-label\">Establecimiento:</label>\r\n                                <div class=\"cols-sm-10\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"fas fa-map fa\"></i>\r\n                                        </span>&nbsp;\r\n                                        <input type=\"text\" value=\"{{identity.nameEstablishment}}\" class=\"form-control\" disabled/>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\" class=\"cols-sm-2 control-label\">e-Mail:</label>\r\n                                <div class=\"cols-sm-10\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"fas fa-at fa\"></i>\r\n                                        </span>&nbsp;\r\n                                        <input type=\"text\" value=\"{{identity.email}}\" class=\"form-control\" disabled/>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"nameEstablishment\" class=\"cols-sm-2 control-label\">Dirección:</label>\r\n                                <div class=\"cols-sm-10\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"fas fa-road fa\"></i>\r\n                                        </span>&nbsp;\r\n                                        <input type=\"text\" value=\"{{identity.street}}\" class=\"form-control\" disabled/> </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            \r\n                                <label>Codigo Postal:</label>\r\n                                <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fas fa-envelope-square\"></i>\r\n                                </span>&nbsp;\r\n                                <input type=\"text\" value=\"{{identity.zip}}\" class=\"form-control\" disabled/>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"role\" class=\"cols-sm-2 control-label\">Provincia:</label>\r\n                                <div class=\"cols-sm-10\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\"><i class=\"fas fa-map-marker\"></i>\r\n                                        </span>&nbsp;\r\n                                        <input type=\"text\" value=\"{{identity.province}}\" class=\"form-control\" disabled/> </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                            <div class=\"col-sm-4\">\r\n        \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"email\" class=\"cols-sm-2 control-label\">Codigo de Farmacia:</label>\r\n                                    <div class=\"cols-sm-10\">\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                                    <i class=\"fab fa-periscope\"></i>\r\n                                            </span>&nbsp;\r\n                                            <input type=\"text\" value=\"{{identity.code}}\" class=\"form-control\" disabled/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4\">\r\n        \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"nameEstablishment\" class=\"cols-sm-2 control-label\">NIF/CIF:</label>\r\n                                    <div class=\"cols-sm-10\">\r\n                                        <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\"><i class=\"fas fa-id-card\"></i>\r\n                                            </span>&nbsp;\r\n                                            <input type=\"text\" value=\"{{identity.nifCif}}\" class=\"form-control\" disabled/> </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4\"><br>\r\n                                    <div  *ngIf=\"cliente.file && cliente.file !=null\">\r\n                                        <a class=\"btn btn-md btn-primary\" href=\"{{url+'get-ficha/'+identity.file}}\"> <i class=\"fas fa-file-download\"></i>&nbsp;Descargar Ficha</a>\r\n                                    </div>\r\n                                    <br>\r\n            \r\n                                </div>\r\n                            \r\n                        </div>\r\n                    \r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-11\"></div>\r\n                        <input type=\"submit\" value=\"Actualizar Perfil\" class=\"btn btn-primary\">\r\n                    </div>\r\n\r\n\r\n                </form>\r\n                \r\n                <br>\r\n                <br>\r\n\r\n\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"espacio\" class=\"espacio-box\"> -->\r\n<div>\r\n    <h1>{{espacio.name}}</h1>\r\n</div>"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cliente\" class=\"container\">\r\n    <br>\r\n    <div class=\"row card2\" >\r\n        <h1>PERFIL CLIENTE</h1>\r\n    </div>\r\n    <br>\r\n    <div class=\"row card2\" >\r\n        <div class=\"col-lg-3\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"{{ url +'/get-image-user/' + cliente.image}}\" *ngIf=\"cliente.image && cliente.image!=='null'\"\r\n                    alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <FONT FACE=\"Gotham Light\" SIZE=4 style=\"color: rgb(17,152,184); text-transform: capitalize\">\r\n                        {{cliente.name}}\r\n                    </FONT>\r\n                    <br>\r\n                    <FONT FACE=\"Gotham Light\" SIZE=4 style=\"color: rgb(17,152,184)\">\r\n                        {{cliente.surname}}\r\n                    </FONT>\r\n                    <p class=\"card-text\">\r\n\r\n                        <a [routerLink]=\"['/editarcliente',cliente._id]\" class=\"btn btn-secondary\">\r\n                        Editar <i class=\"fas fa-plus-circle\"></i></a>\r\n                        <br>\r\n                        <br>\r\n                        <a (click)=\"mostrarEventos()\" class=\"btn btn-primary\" *ngIf=\"identity.role=='ROLE_ADMIN'\">\r\n                         Inscribir a Evento <i class=\"fas fa-plus-circle\"></i></a>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row \" style=\"width: 40%\">\r\n            <div class=\"col-lg-8\">\r\n                <table class=\"egt\">\r\n                        <tr>\r\n        \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                            Farmacia:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                        {{cliente.nameEstablishment}}\r\n                                    </FONT>\r\n                                </td>\r\n        \r\n                            </tr>\r\n                            <br>\r\n                            <tr>\r\n        \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                        Código de Farmacia:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                        {{cliente.code}}\r\n                                    </FONT>  \r\n                                </td>\r\n        \r\n                            </tr>\r\n                            <br>\r\n                            <tr>\r\n        \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                            Email:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                        {{cliente.email}}\r\n                                    </FONT> \r\n                                </td>\r\n        \r\n                            </tr>\r\n                            <br>\r\n                            <tr>\r\n        \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                            Teléfono:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                        {{cliente.phone}}\r\n                                    </FONT> \r\n                                </td>\r\n        \r\n                            </tr>\r\n                            <br>\r\n                            <tr>\r\n        \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                        NIF/CIF:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                        {{cliente.nifCif}}\r\n                                    </FONT>\r\n                                </td>\r\n        \r\n                            </tr>\r\n                            <br>\r\n                            <tr>\r\n        \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                            Provincia:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                        {{cliente.province}}\r\n                                    </FONT>\r\n                                </td>\r\n        \r\n                            </tr>\r\n                            <br>\r\n                            <tr>\r\n        \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                            Dirección:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                        {{cliente.street}}\r\n                                    </FONT>\r\n                                </td>\r\n            \r\n                            </tr>\r\n                            <br>\r\n                            <tr>\r\n    \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                            Código Postal:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                        {{cliente.zip}}\r\n                                    </FONT>\r\n                                </td>\r\n                            </tr>\r\n                            <br>\r\n                            <tr>\r\n                            \r\n        \r\n                                <th>\r\n                                    <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                        Rol:\r\n                                    </FONT>\r\n                                </th>\r\n        \r\n                                <td>\r\n                                    <FONT *ngIf=\"cliente.role=='ROLE_ADMIN'\" FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                            Administrador\r\n                                    </FONT>\r\n                                    <FONT *ngIf=\"cliente.role=='ROLE_USER'\" FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                            Usuario\r\n                                    </FONT>\r\n                                    <FONT *ngIf=\"cliente.role=='ROLE_AGENTE'\" FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                            Agente\r\n                                    </FONT>\r\n                                    <FONT *ngIf=\"cliente.role=='ROLE_ENCARGADO'\" FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                                            Encargado\r\n                                    </FONT>\r\n                                </td>\r\n        \r\n                            </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <table class=\"egt\">\r\n                \r\n                    <tr>\r\n        \r\n                        <th>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(17,152,184)\">\r\n                                    Marcas:\r\n                            </FONT>\r\n                        </th>\r\n    \r\n                        <td >\r\n                            <FONT *ngIf=\"cliente.brandV=='1'\"  FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127); \">\r\n                                    Vichy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            </FONT>\r\n                            <FONT *ngIf=\"cliente.brandSK=='1'\"  FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                                    SkinCeuticals&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            </FONT>\r\n                            <FONT *ngIf=\"cliente.brandLR=='1'\"  FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127); \">\r\n                                    La Roche-Posay&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            </FONT>\r\n                            <FONT *ngIf=\"cliente.brandRG=='1'\"  FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127); \">\r\n                                    Roger&Gallet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            </FONT>\r\n                            <FONT *ngIf=\"cliente.brandCV=='1'\"  FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127); \">\r\n                                    CeraVE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                            </FONT>\r\n                        </td>\r\n    \r\n                    </tr>\r\n            </table>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div *ngIf=\"cliente.file && cliente.file !=null\">\r\n                        <a class=\"btn btn-md btn-primary\" href=\"{{url+'get-ficha/'+cliente.file}}\">\r\n                            <i class=\"fas fa-file-download\"></i>&nbsp;Descargar Ficha</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <br>\r\n    <div class=\"row card2\" *ngIf=\"oculto\">\r\n        <div *ngIf=\"!selected\">\r\n        <label for=\"Eventos\">Seleccionar Evento:</label>\r\n        <table class=\"table table-black\">\r\n            <thead>\r\n                <tr>\r\n\r\n                    <th scope=\"col\">Titulo del evento</th>\r\n                    <th scope=\"col\">Provincia</th>\r\n                    <th scope=\"col\">Seleccionar</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr class=\"animated bounceInRight\" *ngFor=\"let event of eventos | filter:term:brand:visible:name:email:establecimiento:phone\">\r\n\r\n                    <td scope=\"row\">{{event.title}}</td>\r\n                    <td>{{event.province}}</td>\r\n                    <td><a (click)=\"mostrarTurnos(event)\" class=\"btn btn-primary btn-md\">\r\n                            <i class=\"fas fa-info-circle\"></i> Seleccionar</a></td>\r\n                    \r\n\r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div *ngIf=\"selected\">\r\n        <label  for=\"turno\">Seleccionar Turno:</label>\r\n        <table class=\"table table-black\">\r\n            <thead>\r\n                <tr>\r\n\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Hora Inicio</th>\r\n                    <th scope=\"col\">Hora Fin</th>\r\n                    <th scope=\"col\">Fecha Inicio</th>\r\n                    <th scope=\"col\">Fecha Fin</th>\r\n                    <th scope=\"col\">Plazas disponibles</th>\r\n                    <th scope=\"col\">Inscribir</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr class=\"animated bounceInRight\" *ngFor=\"let turno of turnos | filter:term:brand:visible:name:email:establecimiento:phone\">\r\n\r\n                    <td scope=\"row\">{{turno.name}}</td>\r\n                    <td>{{turno.start_h}}</td>\r\n                    <td>{{turno.end_h}}</td>\r\n                    <td>{{turno.date_start}}</td>\r\n                    <td>{{turno.date_end}}</td>\r\n                    <td>{{turno.aforo}}</td>\r\n                    <td>\r\n                        <a (click)=\"GeneraAsistencia(turno)\" class=\"btn btn-primary btn-md\">\r\n                                <i class=\"fas fa-plus-circle\"></i> Inscribir</a>\r\n                    </td>\r\n                   \r\n                </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row card2\" >\r\n        <div class=\"col-lg-12\">\r\n            <h2 style=\"text-transform: capitalize;\">EVENTOS DE {{cliente.name}} </h2>\r\n        </div>\r\n        <hr>\r\n\r\n\r\n                <table  class=\"table table-black\">\r\n                        <thead>\r\n                          <tr>\r\n                            \r\n                            <th scope=\"col\">Imagen</th>\r\n                            <th scope=\"col\">Título del Evento</th>\r\n                            <th scope=\"col\">Campaña</th>\r\n                            <th scope=\"col\">Fecha Inicio</th>\r\n                            <th scope=\"col\">Fecha Fin</th>\r\n                            <th scope=\"col\"> Turno</th>\r\n                            <th scope=\"col\"> Acciones</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                       <tr class=\"animated bounceInRight\" *ngFor=\"let asist of asistencias \">\r\n                            <td scope=\"row\"><img src=\"{{url+'get-image-user/'+cliente.image}}\" class=\"useravatarnav\"></td>\r\n                            <td>{{asist.turno.event.title}}</td>\r\n                            <td>{{asist.turno.event.campana}}</td>\r\n                            <td>{{asist.turno.date_start}}</td>\r\n                            <td>{{asist.turno.date_end}}</td>\r\n                            <td>{{asist.turno.name}}</td>\r\n                            <td><div class=\"buttons animated fadeIn\" *ngIf=\"showoptions==0\">\r\n\r\n                                    <a (click)=\"onDeleteConfirm(asist._id)\" *ngIf=\"identity.role=='ROLE_ADMIN'\" class=\"btn btn-md btn-primary\">\r\n                                        <i class=\"fas fa-window-close\"></i>\r\n                                        Dar de Baja</a>\r\n        \r\n                                </div>\r\n                                <div class=\"seguro animated fadeIn\" *ngIf=\"confirmado==asist._id\">\r\n                                    <a (click)=\"onDeleteAsistencia(asist._id)\" class=\"btn btn-md btn-danger\">\r\n                                        <i class=\"fas fa-window-close\"></i> confirmado</a>\r\n                                    <a (click)=\"onCancelAsistencia()\" class=\"btn btn-md btn-secondary\">\r\n                                        <i class=\"fas fa-ban\"></i> Cancelar</a>\r\n                                </div></td>\r\n                            \r\n                          </tr>\r\n              \r\n                        </tbody>\r\n                      </table>\r\n\r\n    </div>\r\n    <!-- <div class=\"row card2\" >\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/vichy.jpeg\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roche.jpeg\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/skins.jpeg\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roger.jpeg\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n            <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/CERAVE.png\">\r\n        </div>\r\n    \r\n    </div> -->\r\n        <br><br><br>\r\n    </div>\r\n\r\n    <br>\r\n    \r\n    <hr>"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <hr>\r\n    <div class=\"row card2\">\r\n\r\n        <div class=\"col-lg-3\">\r\n            <h1>Eventos</h1>\r\n            <a [routerLink]=\"['/add-espacio']\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN'\" class=\"btn btn-primary\">\r\n                Añadir Evento\r\n                <i class=\"fa fa-plus-circle\"></i>\r\n            </a>\r\n\r\n        </div>\r\n        <div class=\"col-lg-9\">\r\n            <div class=\"row\">\r\n                Herramientas\r\n            </div>\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-md-6\">\r\n                    <h2>Por provincia</h2>\r\n                    <form id=\"filter\">\r\n                        <input #name=\"ngModel\" name=\"term\" type=\"text\" [(ngModel)]=\"term\" class=\"form-control\" />\r\n\r\n                    </form>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <h2>Por marca</h2>\r\n                    <div class=\"dropdown\">\r\n\r\n                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                            aria-expanded=\"false\">\r\n                            Seleccionar marca\r\n                        </button>\r\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                            <a class=\"dropdown-item\" href=\"#\">VICHY</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">ROGER & GALLET</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">SKINCEUTICALS</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">LA ROCHE</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"col-md-12\">\r\n                <br>\r\n                <ul class=\"pagination\">\r\n                    <li class=\"page-link\">\r\n                        <a [routerLink]=\"['/espacio',prev_page]\">\r\n                            <i class=\"fas fa-arrow-circle-left\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"page-link\">\r\n                        ...\r\n                    </li>\r\n                    <li class=\"page-link\">\r\n                        <a [routerLink]=\"['/espacio',next_page]\">\r\n                            <i class=\"fas fa-arrow-circle-right\"></i>\r\n                        </a>\r\n                    </li>\r\n\r\n                </ul>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n    </div>\r\n    <div class=\"row card2\">\r\n\r\n\r\n        <div class=\"page-item col-md-3 animated fadeInRight\" *ngFor=\"let espacio of espacios | filter:term\">\r\n            <!-- Card Projects -->\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                    <div class=\"coantainer\">\r\n                        <img src=\"{{ url +'/get-image-space/' + espacio.image}}\" alt=\"Avatar\" class=\"img-responsive imasge\" style=\"width:100%\">\r\n                        <div class=\"middles\">\r\n                            <div class=\"texto\">{{espacio.address}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"card-action\">\r\n                    <div class=\"alinear\">\r\n                        <a class=\"card-title\" [routerLink]=\"['/detail-espacio',espacio._id] \">\r\n                            {{espacio.name}}\r\n                        </a>\r\n\r\n                        <hr>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"buttons\" *ngIf=\"identity.role=='ROLE_ADMIN'\">\r\n\r\n                        <a [routerLink]=\"['/edit-espacio',espacio._id] \" class=\"btn btn-sm btn-warning\">\r\n                            <i class=\"fas fa-edit\"></i>Editar</a>\r\n                        <a (click)=\"onDeleteConfirm(espacio._id)\" class=\"btn btn-sm btn-danger\">\r\n                            <i class=\"fas fa-window-close\"></i>\r\n                            Borrar</a>\r\n\r\n                    </div>\r\n                    <div class=\"seguro\" *ngIf=\"confirmado==espacio._id\">\r\n                        <a (click)=\"onDeleteEspacio(espacio._id)\" class=\"btn btn-sm btn-danger\">Borrar</a>\r\n                        <a (click)=\"onCancelEspacio()\" class=\"btn btn-sm btn-warning\">Cancelar</a>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <div class=\"row\">\r\n\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;\" class=\"col-md-3 col-xs-3\">\r\n            <img id=\"kDMY_0\" style=\"width:80%;\" class=\"img-responsive\" src=\"http://formacionescae.com/public/common/img/VICHY.png\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;\" class=\"col-md-3 col-xs-3\">\r\n            <img id=\"kDMY_0\" style=\"width:80%;\" class=\"img-responsive\" src=\"http://formacionescae.com/public/common/img/LA_ROCHE-POSAY.png\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;\" class=\"col-md-3 col-xs-3\">\r\n            <img id=\"kDMY_0\" style=\"width:80%;\" class=\"img-responsive\" src=\"http://formacionescae.com/public/common/img/SKINCEUTICALS.png\">\r\n        </div>\r\n        <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;\" class=\"col-md-3 col-xs-3\">\r\n            <img id=\"kDMY_0\" style=\"width:80%;\" class=\"img-responsive\" src=\"http://formacionescae.com/public/common/img/ROGER_GALLET.png\">\r\n        </div>\r\n\r\n    </div>\r\n    <hr>\r\n\r\n</div>"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"evento\" class=\"container\" style=\"min-height: 75%\">\r\n  <div class=\"row card2 h-75\">\r\n    <!-- <div class=\"col-lg-3\"> -->\r\n    <div class=\"card col-lg-3\">\r\n      <div class=\"card-image\" style=\"margin-left:  -15px;\r\n            margin-right: -15px;    \">\r\n\r\n        <img src=\"{{ url +'/get-image-event/' + evento.image}}\" alt=\"Avatar\" class=\"img-responsive imasge\" style=\"width:100%\">\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"card-action\">\r\n        <div class=\"alinear\">\r\n          <a>\r\n            <FONT FACE=\"Gotham Light\" SIZE=4 style=\"color: rgb(17,152,184)\">\r\n              {{evento.title}}\r\n            </FONT>\r\n\r\n          </a>\r\n\r\n          <br>\r\n          <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"evento.brand=='Vichy'\">\r\n            VICHY\r\n          </FONT>\r\n          <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"evento.brand=='CeraVe'\">\r\n            CERAVE\r\n          </FONT>\r\n          <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"evento.brand=='Skinceuticals'\">\r\n\r\n            SKINCEUTICALS\r\n          </FONT>\r\n          <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"evento.brand=='La Roche'\">\r\n            LA ROCHE-POSAY\r\n          </FONT>\r\n          <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"evento.brand=='RogerGallet'\">\r\n            ROGER & GALLET\r\n          </FONT>\r\n          <hr>\r\n\r\n\r\n        </div>\r\n\r\n        <p>\r\n          <label>\r\n            <img id=\"kDMY_0\" src=\"../../assets/images/mapa_grande.png\" class=\"img-card\">\r\n          </label>\r\n          <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\">\r\n            {{evento.province}}\r\n          </FONT>\r\n        </p>\r\n        <p>\r\n          <label>\r\n            <img id=\"kDMY_0\" src=\"../../assets/images/fecha.png\" class=\"img-card\">\r\n          </label>\r\n          <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\">\r\n            {{evento.dateS}}\r\n          </FONT>\r\n        </p>\r\n\r\n        <div class=\"buttons animated fadeIn\" *ngIf=\"identity.role=='ROLE_ADMIN' && showoptions==0\">\r\n          <button [routerLink]=\"['/evento',1] \" class=\"btn btn-primary\">\r\n            Volver\r\n            <i class=\"fas fa-arrow-circle-left\"> </i>\r\n          </button> &nbsp;&nbsp;\r\n          <button [routerLink]=\"['/crear-turno',evento._id] \" class=\"btn btn-secondary\">\r\n            Agregar Turno\r\n            <i class=\"fas fa-plus-circle\"> </i>\r\n          </button>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-8\" style=\"margin-left: 15px;\">\r\n      <div class=\"row  card2\">\r\n        <div class=\"col-lg-6\">\r\n\r\n          <label>\r\n            Campaña:\r\n          </label>\r\n          <p>\r\n            {{evento.campana}}\r\n          </p>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n          <label>GoogleMaps:</label>\r\n\r\n          <!-- Button trigger modal -->\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n           Ver en Google Maps\r\n          </button>\r\n\r\n          <!-- Modal -->\r\n          <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Ubicacion en Maps</h5>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <iframe id='attachment' [src]=\"evento.gmaps | safe\" width='460' height='315' frameborder='0' allowfullscreen></iframe>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\r\n                  <a class=\"btn btn-primary\" href=\"{{evento.gmaps}}\">Link Aquí</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <label>Lugar:</label>\r\n          <p>\r\n            {{evento.lugar}}\r\n          </p>\r\n\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n\r\n\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <label>Dirección:</label>\r\n          <p>\r\n            {{evento.direccion}}\r\n          </p>\r\n\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n\r\n\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <label>Descripción:</label>\r\n          <p>\r\n            {{evento.description}}\r\n          </p>\r\n\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"row card2\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  Turno\r\n                </FONT>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  Fecha Inicio\r\n                </FONT>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  Fecha Fin\r\n                </FONT>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  Hora Inicio\r\n                </FONT>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  Hora Fin\r\n                </FONT>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  Plazas Disponibles\r\n                </FONT>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  Acción\r\n                </FONT>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngFor=\"let turno of turnos\">\r\n              <th scope=\"row\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  {{turno.name}}\r\n                </FONT>\r\n              </th>\r\n              <th>\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  {{turno.date_start}}\r\n                </FONT>\r\n              </th>\r\n              <th>\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  {{turno.date_end}}\r\n                </FONT>\r\n              </th>\r\n              <th>\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  {{turno.start_h}}\r\n                </FONT>\r\n              </th>\r\n              <th>\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  {{turno.end_h}}\r\n                </FONT>\r\n              </th>\r\n              <th>\r\n                <FONT FACE=\"Gotham Light\" SIZE=1 style=\"color: rgb(127,127,127)\">\r\n                  {{turno.aforo}}\r\n                </FONT>\r\n              </th>\r\n              <td>\r\n                <button *ngIf=\"!acciones\" class=\"btn btn-primary\" (click)=\"MostrarAcciones(turno._id)\" value=\"Acciones\">Más\r\n                  <i class=\"fas fa-plus-circle\"> </i>\r\n                </button>\r\n                <div *ngIf=\"acciones==turno._id\">\r\n                  <div class=\"btn-group animated fadeIn\" role=\"group\">\r\n                    <!-- <button (click)=\"aquivaeleventoquetematricula()\" *ngIf=\"showoptions==0\" type=\"button\" class=\"btn btn-primary\"> <i class=\"fas fa-plus-circle\"></i> -->\r\n                    <button [routerLink]=\"['/turno-detail',turno._id] \" *ngIf=\"showoptions==0 && identity.role=='ROLE_ADMIN' || identity.role=='ROLE_AGENTE' || identity.role=='ROLE_ENCARGADO'\"\r\n                      type=\"button\" class=\"btn btn-primary\">\r\n                      Detalle\r\n                      <i class=\"fas fa-plus-circle\"></i>\r\n                    </button>&nbsp;&nbsp;\r\n                    <button [routerLink]=\"['/assistant-add',turno._id] \" *ngIf=\"showoptions==0\" type=\"button\" class=\"btn btn-secondary\">\r\n\r\n                      Inscribirme\r\n                      <i class=\"fas fa-plus-circle\"></i>\r\n                    </button>&nbsp;&nbsp;\r\n                    <button [routerLink]=\"['/editar-turno',turno._id] \" type=\"button\" class=\"btn btn-primary\" *ngIf=\"identity.role=='ROLE_ADMIN' && showoptions==0\">\r\n                      Editar\r\n                      <i class=\"fas fa-plus-circle\"></i>\r\n                    </button>&nbsp;&nbsp;\r\n                    <button type=\"button\" (click)=\"onDeleteConfirm(turno._id)\" class=\"btn btn-secondary\" *ngIf=\"identity.role=='ROLE_ADMIN' && showoptions==0\">\r\n                      Borrar\r\n                      <i class=\"fas fa-minus-circle\"></i>\r\n                    </button>&nbsp;&nbsp;\r\n                  </div>\r\n                  <div class=\"btn-group animated fadeIn seguro\" role=\"group\" *ngIf=\"confirmado==turno._id\">\r\n                    <button class=\"btn btn-md btn-primary\" (click)=\"onDeleteTurno(turno._id)\">\r\n                      <i class=\"fas fa-window-close\"></i> Borrar</button>&nbsp;&nbsp;\r\n                    <button class=\"btn btn-md btn-secondary\" (click)=\"onCancelTurno()\">\r\n                      <i class=\"fas fa-ban\"></i> Cancelar </button>&nbsp;&nbsp;\r\n\r\n\r\n\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n\r\n\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  <!-- <hr>\r\n  <br>\r\n  <br>\r\n  <br> -->\r\n  <br>\r\n  <div class=\"row card2\">\r\n\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/vichy.jpeg\">\r\n    </div>\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roche.jpeg\">\r\n    </div>\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/skins.jpeg\">\r\n    </div>\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roger.jpeg\">\r\n    </div>\r\n    <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n      <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/CERAVE.png\">\r\n    </div>\r\n\r\n  </div>\r\n  <hr>"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n       <br>\r\n        <div class=\"row card2\">\r\n    \r\n            <div class=\"col-lg-2\">\r\n                <h1>EVENTOS</h1>\r\n    \r\n            </div>\r\n            <!-- <div class=\"col-lg-9\"> -->\r\n                <!-- <div class=\"row\">\r\n                    Filtrar:\r\n                </div> -->\r\n                <div class=\"row col-lg-10\">\r\n                    \r\n    \r\n                    <div class=\"col-md-2\">\r\n                        <p class=\"filtro\">Provincia</p>\r\n                        <form id=\"filter\">\r\n                                <select class=\"form-control\"#name=\"ngModel\" name=\"term\" [(ngModel)]=\"term\">\r\n                                    <option selected=\"selected\" value=\"\">Selecciona...</option>\r\n                                    <option value=\"Albacete\">Albacete</option>\r\n                                    <option value=\"Alicante/Alacant\">Alicante/Alacant</option>\r\n                                    <option value=\"Almería\">Almería</option>\r\n                                    <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                                    <option value=\"Asturias\"> Asturias</option>\r\n                                    <option value=\"Ávila\"> Ávila</option>\r\n                                    <option value=\"Badajoz\"> Badajoz</option>\r\n                                    <option value=\"Balears, Illes\"> Balears, Illes</option>\r\n                                    <option value=\"Barcelona\"> Barcelona</option>\r\n                                    <option value=\"Bizkaia\"> Bizkaia</option>\r\n                                    <option value=\"Burgos\"> Burgos</option>\r\n                                    <option value=\"Cáceres\"> Cáceres</option>\r\n                                    <option value=\"Cádiz\"> Cádiz</option>\r\n                                    <option value=\"Cantabria\"> Cantabria</option>\r\n                                    <option value=\"Castellón/Castelló\"> Castellón/Castelló</option>\r\n                                    <option value=\"Ceuta\"> Ceuta</option>\r\n                                    <option value=\"Ciudad Real\"> Ciudad Real</option>\r\n                                    <option value=\"Córdoba\"> Córdoba</option>\r\n                                    <option value=\"Coruña,A\"> Coruña,A</option>\r\n                                    <option value=\"Cuenca\"> Cuenca</option>\r\n                                    <option value=\"Gipuzkoa\"> Gipuzkoa</option>\r\n                                    <option value=\"Girona\"> Girona</option>\r\n                                    <option value=\"Granada\"> Granada</option>\r\n                                    <option value=\"Guadalajara\"> Guadalajara</option>\r\n                                    <option value=\"Huelva\"> Huelva</option>\r\n                                    <option value=\"Huesca\"> Huesca</option>\r\n                                    <option value=\"Jaén\"> Jaén</option>\r\n                                    <option value=\"León\"> León</option>\r\n                                    <option value=\"Lleidra\"> Lleidra</option>\r\n                                    <option value=\"Lugo\"> Lugo</option>\r\n                                    <option value=\"Madrid\"> Madrid</option>\r\n                                    <option value=\"Málaga\"> Málaga</option>\r\n                                    <option value=\"Melilla\"> Melilla</option>\r\n                                    <option value=\"Murcia\"> Murcia</option>\r\n                                    <option value=\"Navarra\"> Navarra</option>\r\n                                    <option value=\"Ourense\"> Ourense</option>\r\n                                    <option value=\"Palencia\"> Palencia</option>\r\n                                    <option value=\"Palmas, Las\"> Palmas, Las</option>\r\n                                    <option value=\"Pontevedra\"> Pontevedra</option>\r\n                                    <option value=\"Rioja, La\"> Rioja, La</option>\r\n                                    <option value=\"Salamanca\"> Salamanca</option>\r\n                                    <option value=\"Santa Cruz de Tenerife\"> Santa Cruz de Tenerife</option>\r\n                                    <option value=\"Segovia\"> Segovia</option>\r\n                                    <option value=\"Sevilla\"> Sevilla</option>\r\n                                    <option value=\"Soria\"> Soria</option>\r\n                                    <option value=\"Tarragona\"> Tarragona</option>\r\n                                    <option value=\"Teruel\"> Teruel</option>\r\n                                    <option value=\"Toledo\"> Toledo</option>\r\n                                    <option value=\"Valencia/Valéncia\"> Valencia/Válencia</option>\r\n                                    <option value=\"Valladolid\"> Valladolid</option>\r\n                                    <option value=\"Zamora\"> Zamora</option>\r\n                                    <option value=\"Zaragoza\"> Zaragoza</option>\r\n                                </select>\r\n                            \r\n    \r\n                        </form>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <p class=\"filtro\">Marca</p>\r\n                        <div class=\"dropdown\">\r\n                            <select class=\"form-control\"  [(ngModel)]=\"brand\" >\r\n    \r\n                                    <option [selected] ng-selected=\"selected\" value=\"\">Selecciona...</option>\r\n                                    <option value=\"Vichy\">Vichy</option>\r\n                                    <option value=\"La Roche\">La Roche-Posay</option>\r\n                                    <option value=\"Skinceuticals\">Skinceuticals</option>\r\n                                    <option value=\"RogerGallet\"> Roger Gallet</option>\r\n                                    <option value=\"CeraVe\"> CeraVe</option>\r\n                                </select>                            \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <p class=\"filtro\">Fecha</p>\r\n                        <input [ngModel]=\"dateS | date:'yyyy-MM-dd'\" (ngModelChange)=\"dateS = $event\" \r\n                        type=\"date\" name=\"dateS\" class=\"form-control\"/>\r\n                    </div>\r\n                    <div class=\"col-md-2\" *ngIf=\"identity.role=='ROLE_ADMIN'\">\r\n                            <p class=\"filtro\">Visibilidad</p>\r\n                            <div class=\"dropdown\">\r\n                                <select  class=\"form-control\"  [(ngModel)]=\"visible\" >\r\n        \r\n                                        <option ng-selected=\"selected\" value=\"\">Selecciona...</option>\r\n                                        <option value=\"oculto\">Ocultos</option>\r\n                                        <option value=\"visible\">Visibles</option>\r\n                                    </select>                            \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <p class=\"filtro\">Campaña</p>\r\n                            <input [ngModel]=\"campana\" (ngModelChange)=\"campana = $event\" \r\n                            type=\"text\" name=\"campana\" class=\"form-control\"/>\r\n                        </div>\r\n                    <div class=\"col-lg-2\">\r\n                        <br>\r\n                            <a [routerLink]=\"['/event-add']\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN' || identity.role =='ROLE_AGENTE' || identity.role=='ROLE_ENCARGADO'\" class=\"btn btn-primary btn-sm\">\r\n                                <FONT FACE=\"Gotham Light\" SIZE=3 COLOR=\"white\" >\r\n                                        Añadir Evento\r\n                                </FONT>\r\n                                \r\n                                <i class=\"fa fa-plus-circle\"></i>\r\n                            </a>\r\n                \r\n                        </div>\r\n                <!-- </div> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-9\">\r\n    \r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n    \r\n        </div>\r\n        <br>\r\n        <div class=\"row card2\">\r\n            <div class=\"page-item col-md-3 col-sm-4 animated fadeInRight\" *ngFor=\"let event of eventos | filter:term:brand:dateS:visible:campana\">\r\n                <!-- Card Projects -->\r\n    \r\n                <div class=\"card\">\r\n                    <div class=\"card-image\" [routerLink]=\"['/detalle-evento',event._id] \">\r\n                        <div class=\"coantainer\">\r\n                            <img src=\"{{ url +'/get-image-event/' + event.image}}\" alt=\"Avatar\" class=\"img-responsive imasge\" style=\"width:100%\">\r\n                            <div class=\"middles\">\r\n                               \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n    \r\n    \r\n                    <div class=\"card-action\">\r\n                        <div class=\"alinear\">\r\n                            <a  [routerLink]=\"['/detalle-evento',event._id]  \">\r\n                                <FONT FACE=\"Gotham Light\" SIZE=4 style=\"color: rgb(17,152,184)\">\r\n                                    {{event.title}} \r\n                                </FONT>\r\n                               \r\n                            </a>\r\n\r\n                            <br>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"event.brand=='Vichy'\">\r\n                                VICHY\r\n                            </FONT>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"event.brand=='CeraVe'\">\r\n                                CERAVE\r\n                            </FONT>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"event.brand=='Skinceuticals'\">\r\n                                \r\n                                SKINCEUTICALS\r\n                            </FONT>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"event.brand=='La Roche'\">\r\n                                LA ROCHE-POSAY\r\n                            </FONT>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"event.brand=='RogerGallet'\">\r\n                                ROGER & GALLET\r\n                            </FONT>\r\n                            <hr>\r\n    \r\n    \r\n                        </div>\r\n\r\n                        <p>\r\n                           <label><img id=\"kDMY_0\"   src=\"../../assets/images/mapa_grande.png\" class=\"img-card\">\r\n                            </label>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\" >\r\n                                    {{event.province}}\r\n                            </FONT> \r\n                        </p>\r\n                        <p>\r\n                            <label><img id=\"kDMY_0\"   src=\"../../assets/images/fecha.png\" class=\"img-card\">\r\n                            </label> \r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\" >\r\n                                {{event.dateS}}\r\n                            </FONT> \r\n                        </p>\r\n    \r\n                        <div  class=\"buttons animated fadeIn\" *ngIf=\"identity.role=='ROLE_ADMIN' && showoptions==0\">\r\n    \r\n                            <!-- <a [routerLink]=\"['/eventedit',event._id] \" class=\"btn btn-md btn-primary\">\r\n                            Editar  <i class=\"fa fa-plus-circle\"></i></a> -->\r\n                            <button [routerLink]=\"['/eventedit',event._id] \" class=\"btn btn-primary\" >\r\n                                Editar   <i class=\"fa fa-plus-circle\"></i>\r\n                            </button> &nbsp;&nbsp;&nbsp;\r\n                                <!-- <a (click)=\"onDeleteConfirm(event._id)\" class=\"btn btn-md btn-secondary\">\r\n                            Eliminar <i class=\"fa fa-minus-circle\"></i></a> -->\r\n                            <button (click)=\"onDeleteConfirm(event._id)\" class=\"btn btn-secondary\" >\r\n                                Eliminar   <i class=\"fa fa-minus-circle\"></i>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"seguro animated fadeIn\" *ngIf=\"confirmado==event._id\">\r\n                            <a (click)=\"onDeleteEvento(event._id)\" class=\"btn btn-md btn-primary\">\r\n                                <i class=\"fas fa-window-close\"></i> Borrar</a>\r\n                            <a (click)=\"onCancelEvento()\" class=\"btn btn-md btn-secondary\">\r\n                                <i class=\"fas fa-ban\"></i> Cancelar</a>\r\n                        </div>\r\n                    </div>\r\n    \r\n                </div>\r\n    \r\n    \r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\" *ngIf=\"identity.role=='ROLE_ADMIN'\">\r\n            <a class=\"btn btn-secondary\" href=\"{{url+'getreporte-asist/'}}\">\r\n                Reporte csv\r\n                <i class=\"fa fa-plus-circle\"></i>\r\n            </a>\r\n        </div>\r\n        <br>\r\n        <div class=\"row card2\">\r\n                <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n                    <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/vichy.jpeg\">\r\n                </div>\r\n                <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                  <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roche.jpeg\">\r\n                </div>\r\n                <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                  <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/skins.jpeg\">\r\n                </div>\r\n                <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                  <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roger.jpeg\">\r\n                </div>\r\n                <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n                  <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/CERAVE.png\">\r\n                </div>\r\n            \r\n              </div>\r\n\r\n              <hr>\r\n              <br>\r\n              <br>\r\n    </div>"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-log-8 col-log-offset-5\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4\">Hola! Bienvenido a Formaciones CAE </h1>\r\n        \r\n        <hr class=\"my-4\">\r\n        <p>Visita y disfruta de nuestros Eventos</p>\r\n        <a class=\"btn btn-primary btn-lg\"  [routerLink]=\"['/espacio',1]\" role=\"button\">Espacios</a>\r\n    </div>\r\n</div>\r\n<div [class.hidden]=\"!identity\" class=\"central col-lg-11\">\r\n        <router-outlet></router-outlet>\r\n</div>\r\n<script type=\"text/javascript\">\r\n    var _smartsupp = _smartsupp || {};\r\n    _smartsupp.key = '460ffceeb3c20ee708d3c2ac0bf8abc20739f890';\r\n    window.smartsupp||(function(d) {\r\n      var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];\r\n      s=d.getElementsByTagName('script')[0];c=d.createElement('script');\r\n      c.type='text/javascript';c.charset='utf-8';c.async=true;\r\n      c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);\r\n    })(document);\r\n    </script>"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <div class=\"row card2\">\r\n        <div class=\"col-md-3\">\r\n            <h1>{{titulo}}</h1>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <p class=\"filtro\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                    Provincia\r\n                </FONT>\r\n            </p>\r\n            <form id=\"filter\">\r\n                    <select class=\"form-control\"#name=\"ngModel\" name=\"term\" [(ngModel)]=\"term\">\r\n                        <option selected=\"selected\" value=\"\">Selecciona...</option>\r\n                        <option value=\"Albacete\">Albacete</option>\r\n                        <option value=\"Alicante/Alacant\">Alicante/Alacant</option>\r\n                        <option value=\"Almería\">Almería</option>\r\n                        <option value=\"Araba/Álava\"> Araba/Álava</option>\r\n                        <option value=\"Asturias\"> Asturias</option>\r\n                        <option value=\"Ávila\"> Ávila</option>\r\n                        <option value=\"Badajoz\"> Badajoz</option>\r\n                        <option value=\"Balears, Illes\"> Balears, Illes</option>\r\n                        <option value=\"Barcelona\"> Barcelona</option>\r\n                        <option value=\"Bizkaia\"> Bizkaia</option>\r\n                        <option value=\"Burgos\"> Burgos</option>\r\n                        <option value=\"Cáceres\"> Cáceres</option>\r\n                        <option value=\"Cádiz\"> Cádiz</option>\r\n                        <option value=\"Cantabria\"> Cantabria</option>\r\n                        <option value=\"Castellón/Castelló\"> Castellón/Castelló</option>\r\n                        <option value=\"Ceuta\"> Ceuta</option>\r\n                        <option value=\"Ciudad Real\"> Ciudad Real</option>\r\n                        <option value=\"Córdoba\"> Córdoba</option>\r\n                        <option value=\"Coruña,A\"> Coruña,A</option>\r\n                        <option value=\"Cuenca\"> Cuenca</option>\r\n                        <option value=\"Gipuzkoa\"> Gipuzkoa</option>\r\n                        <option value=\"Girona\"> Girona</option>\r\n                        <option value=\"Granada\"> Granada</option>\r\n                        <option value=\"Guadalajara\"> Guadalajara</option>\r\n                        <option value=\"Huelva\"> Huelva</option>\r\n                        <option value=\"Huesca\"> Huesca</option>\r\n                        <option value=\"Jaén\"> Jaén</option>\r\n                        <option value=\"León\"> León</option>\r\n                        <option value=\"Lleidra\"> Lleidra</option>\r\n                        <option value=\"Lugo\"> Lugo</option>\r\n                        <option value=\"Madrid\"> Madrid</option>\r\n                        <option value=\"Málaga\"> Málaga</option>\r\n                        <option value=\"Melilla\"> Melilla</option>\r\n                        <option value=\"Murcia\"> Murcia</option>\r\n                        <option value=\"Navarra\"> Navarra</option>\r\n                        <option value=\"Ourense\"> Ourense</option>\r\n                        <option value=\"Palencia\"> Palencia</option>\r\n                        <option value=\"Palmas, Las\"> Palmas, Las</option>\r\n                        <option value=\"Pontevedra\"> Pontevedra</option>\r\n                        <option value=\"Rioja, La\"> Rioja, La</option>\r\n                        <option value=\"Salamanca\"> Salamanca</option>\r\n                        <option value=\"Santa Cruz de Tenerife\"> Santa Cruz de Tenerife</option>\r\n                        <option value=\"Segovia\"> Segovia</option>\r\n                        <option value=\"Sevilla\"> Sevilla</option>\r\n                        <option value=\"Soria\"> Soria</option>\r\n                        <option value=\"Tarragona\"> Tarragona</option>\r\n                        <option value=\"Teruel\"> Teruel</option>\r\n                        <option value=\"Toledo\"> Toledo</option>\r\n                        <option value=\"Valencia/Valéncia\"> Valencia/Válencia</option>\r\n                        <option value=\"Valladolid\"> Valladolid</option>\r\n                        <option value=\"Zamora\"> Zamora</option>\r\n                        <option value=\"Zaragoza\"> Zaragoza</option>\r\n                    </select>\r\n            </form>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <p class=\"filtro\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                    Marca\r\n                </FONT>\r\n            </p>\r\n            <div class=\"dropdown\">\r\n                <select class=\"form-control\"  [(ngModel)]=\"brand\" >\r\n\r\n                        <option [selected] ng-selected=\"selected\" value=\"\">Selecciona...</option>\r\n                        <option value=\"Vichy\">Vichy</option>\r\n                        <option value=\"La Roche\">La Roche-Posay</option>\r\n                        <option value=\"Skinceuticals\">Skinceuticals</option>\r\n                        <option value=\"RogerGallet\"> Roger Gallet</option>\r\n                        <option value=\"CeraVe\"> CeraVe</option>\r\n                    </select>                            \r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <p class=\"filtro\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                    Fecha\r\n                </FONT>\r\n            </p>\r\n            <input [ngModel]=\"dateS | date:'yyyy-MM-dd'\" (ngModelChange)=\"dateS = $event\" \r\n            type=\"date\" name=\"dateS\" class=\"form-control\"/>\r\n        </div>\r\n        \r\n        <div class=\"col-md-2\">\r\n            <p class=\"filtro\">\r\n                <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127)\">\r\n                    Campaña\r\n                </FONT>\r\n            </p>\r\n            <input [ngModel]=\"campana\" (ngModelChange)=\"campana = $event\" \r\n            type=\"text\" name=\"campana\" class=\"form-control\"/>\r\n        </div>  \r\n    </div>\r\n <div class=\"row card2\">\r\n\r\n\r\n        <div class=\"page-item col-md-3 col-sm-4 animated fadeInRight\" *ngFor=\"let asist of asistencias | filter:term:brand:dateS:visible:campana\">\r\n            <!-- Card Projects -->\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-image\" [routerLink]=\"['/detalle-evento',asist.turno.event._id] \">\r\n                    <div class=\"coantainer\">\r\n                        <img src=\"{{ url +'/get-image-event/' + asist.turno.event.image}}\" alt=\"Avatar\" class=\"img-responsive imasge\" style=\"width:100%\">\r\n                        <div class=\"middles\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"card-action\">\r\n                    <div class=\"alinear\">\r\n                        <a>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=4 style=\"color: rgb(17,152,184)\">\r\n                                    {{asist.turno.event.title}}\r\n                            </FONT>\r\n                        </a>\r\n            \r\n                        <br>\r\n                        <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"asist.turno.event.brand=='Vichy'\">\r\n                        VICHY\r\n                        </FONT>\r\n                        <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"asist.turno.event.brand=='CeraVe'\">\r\n                        CERAVE\r\n                        </FONT>\r\n                        <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"asist.turno.event.brand=='Skinceuticals'\">\r\n            \r\n                        SKINCEUTICALS\r\n                        </FONT>\r\n                        <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"asist.turno.event.brand=='La Roche'\">\r\n                        LA ROCHE-POSAY\r\n                        </FONT>\r\n                        <FONT SIZE=3 style=\"color: rgb(127,127,127);\" *ngIf=\"asist.turno.event.brand=='RogerGallet'\">\r\n                        ROGER & GALLET\r\n                        </FONT> \r\n                        <hr>\r\n\r\n\r\n                    </div>\r\n\r\n                  \r\n\r\n                    <div class=\"buttons animated fadeIn\" *ngIf=\"showoptions==0\">\r\n                        <p>\r\n                            <label>\r\n                                <img id=\"kDMY_0\" src=\"../../assets/images/mapa_grande.png\" class=\"img-card\">\r\n                            </label>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                                {{asist.turno.event.province}}\r\n                            </FONT>\r\n                            </p>\r\n                            <p>\r\n                            <label>\r\n                                <img id=\"kDMY_0\" src=\"../../assets/images/fecha.png\" class=\"img-card\">\r\n                            </label>\r\n                            <FONT FACE=\"Gotham Light\" SIZE=2 style=\"color: rgb(127,127,127);\">\r\n                                {{asist.turno.event.dateS}}\r\n                            </FONT>\r\n                        </p>\r\n                        <!-- <a (click)=\"onDeleteConfirm(asist._id)\" class=\" btn btn-primary\">\r\n                            <i class=\"fas fa-window-close\"></i>\r\n                            Darme de Baja </a> -->\r\n                        <button (click)=\"onDeleteConfirm(asist._id)\" class=\"btn btn-secondary\" >\r\n                        Darme de Baja <i class=\"fas fa-minus-circle\"> </i></button>\r\n\r\n                    </div>\r\n                    <div class=\"seguro animated fadeIn\" *ngIf=\"confirmado==asist._id\">\r\n                        <!-- <a (click)=\"onDeleteAsistencia(asist._id)\" class=\"btn btn-md btn-danger\">\r\n                        <i class=\"fas fa-window-close\"></i> Confirmado</a> -->\r\n                        <button (click)=\"onDeleteAsistencia(asist._id)\" class=\"btn btn-primary\" >\r\n                        Confirmado <i class=\"fas fa-window-close\"></i></button>\r\n                        <button (click)=\"onCancelAsistencia()\" class=\"btn btn-secondary\" >\r\n                        Cancelar <i class=\"fas fa-ban\"></i></button>\r\n                        <!-- <a (click)=\"onCancelAsistencia()\" class=\"btn btn-md btn-secondary\">\r\n                            <i class=\"fas fa-ban\"></i> Cancelar</a> -->\r\n                            \r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row card2\">\r\n\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/vichy.jpeg\">\r\n            </div>\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roche.jpeg\">\r\n            </div>\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/skins.jpeg\">\r\n            </div>\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%; width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/roger.jpeg\">\r\n            </div>\r\n            <div id=\"kDMYz\" style=\"display:inline-block; padding-left: 3%; padding-right:3%;width: 20%;\">\r\n                <img id=\"kDMY_0\" style=\"width:100%;\" class=\"img-responsive\" src=\"../../assets/images/CERAVE.png\">\r\n            </div>\r\n\r\n        </div>\r\n      \r\n<br><br><br>\r\n\r\n</div>"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div class=\"turno-box\" *ngIf=\"turno\">\r\n\r\n  <div class=\"clearfix\"></div>\r\n  <div id=\"turno-detail\" *ngIf=\"assistant\">\r\n    <div class=\"container\">\r\n      <div id=\"print-section\">\r\n        <div class=\"row card2\">\r\n          <h1>LISTA ASISTENCIA</h1>\r\n\r\n        </div>\r\n        <div class=\"row card2 \">\r\n\r\n        <form #formAssistant=\"ngForm\" class=\"col-lg-12\" (ngSubmit)=\"onSubmit()\">\r\n          <table class=\"table table-black\">\r\n            <thead>\r\n              <tr>\r\n\r\n                <th scope=\"col\">Nombre</th>\r\n                <th scope=\"col\">Apellidos</th>\r\n                <th scope=\"col\">Campaña</th>\r\n                <th scope=\"col\">Turno</th>\r\n                <th scope=\"col\">Establecimiento</th>\r\n                <th scope=\"col\">Código Farmacia</th>\r\n                <th scope=\"col\">Teléfono</th>\r\n                <th scope=\"col\">e-Mail</th>\r\n                <th scope=\"col\">Asistencia</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let asistencias of assistant\">\r\n\r\n                <td scope=\"row\">{{asistencias.cliente.name}}</td>\r\n                <td>{{asistencias.cliente.surname}}</td>\r\n                <td>{{asistencias.turno.event.campana}}</td>\r\n                <td>{{asistencias.turno.name}}</td>\r\n                <td>{{asistencias.cliente.nameEstablishment}}</td>\r\n                <th>{{asistencias.cliente.code}}</th>\r\n                <th>{{asistencias.cliente.phone}}</th>\r\n                <th><a href=\"mailto:{{asistencias.cliente.email}}\">{{asistencias.cliente.email}}</a></th>\r\n                <th>\r\n                  <label>\r\n                    <i *ngIf=\"asistencias.check\" class=\"fas fa-check-circle\"></i>\r\n                  </label>\r\n                  <input type=\"checkbox\" [checked]=\"asistencias.check\" (change)=\"asistencias.check = !asistencias.check\" />\r\n\r\n                </th>\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n          <!-- <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n\r\n            </div>\r\n            <br>\r\n            <div class=\"col-md-2\">\r\n\r\n            </div>\r\n          </div> -->\r\n\r\n        </form>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <button class=\"btn btn-primary\" (click)=\"print()\">Imprimir Reporte /Generar PDF</button>\r\n          <br>\r\n          <br>\r\n          <a class=\"btn btn-secondary\" href=\"{{url}}getreporte-asist/{{turno._id}}\">\r\n          Reporte CSV <i class=\"fa fa-plus-circle\"> </i></a>\r\n          <br>\r\n          <br>\r\n          <a [routerLink]=\"['/detalle-evento',turno.event._id]\" class=\"btn btn-primary\">\r\n          Volver <i class=\"fas fa-arrow-circle-left\"> </i></a>\r\n          <br>\r\n          <br>\r\n          <div *ngIf=\"alertMessage\" class=\"alert alert-success\">\r\n            <strong>{{alertMessage}}</strong>\r\n          </div> \r\n        </div>\r\n        <div class=\"col-md-6\" style=\"text-align: right\">\r\n          <a class=\"btn btn-primary\" (click)=\"enviarMail();\">Enviar Mensaje</a>\r\n          <br>\r\n          <br>\r\n          <input type=\"submit\" value=\"Pasar Asistencia\" class=\"btn btn-secondary\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(425);


/***/ })

},[752]);
//# sourceMappingURL=main.bundle.map