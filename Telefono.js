"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    //Constructor
    function Telefono(tipo, numero) {
        this.Tipo = tipo;
        this.numero = numero;
    }
    //Getter
    Telefono.prototype.getTipo = function () {
        return this.Tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    //Setter
    Telefono.prototype.setTipo = function (value) {
        this.Tipo = value;
    };
    Telefono.prototype.setNumero = function (value) {
        this.numero = value;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
