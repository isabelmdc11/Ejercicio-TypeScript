"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
var Persona = /** @class */ (function () {
    //Constructor
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefono, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = [];
        this.mails = [];
        this.telefono = [];
        this.notas = notas;
    }
    //Getter
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    Persona.prototype.getCumpleano = function () {
        return this.cumpleanos;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getDireccion = function () {
        return this.direcciones;
    };
    Persona.prototype.getMail = function () {
        return this.mails;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    //Setter
    Persona.prototype.setNombre = function (valueNombre) {
        return this.nombre = valueNombre;
    };
    Persona.prototype.setApellidos = function (valueApellidos) {
        return this.apellidos = valueApellidos;
    };
    Persona.prototype.setEdad = function (valueEdad) {
        return this.edad = valueEdad;
    };
    Persona.prototype.setDNI = function (valueDNI) {
        return this.dni = valueDNI;
    };
    Persona.prototype.setCumpleano = function (valueCumpleano) {
        return this.cumpleanos = valueCumpleano;
    };
    Persona.prototype.setColorFavorito = function (valueColorFavorito) {
        return this.colorFavorito = valueColorFavorito;
    };
    Persona.prototype.setSexo = function (valueSexo) {
        return this.sexo = valueSexo;
    };
    Persona.prototype.setDireccion = function (valueDireccion) {
        return this.direcciones = valueDireccion;
    };
    Persona.prototype.setMail = function (valueMails) {
        return this.mails = valueMails;
    };
    Persona.prototype.setTelefono = function (valueTelefono) {
        return this.telefono = valueTelefono;
    };
    Persona.prototype.setNotas = function (valueNotas) {
        return this.notas = valueNotas;
    };
    Persona.prototype.mostrarDatos = function () {
        console.log(this.getNombre(), this.getApellidos() + "Edad: " + this.getEdad() + " Dni: " + this.getDNI() + " Cumpleaños:" + this.getCumpleano() + " Color Favorito:" + this.getColorFavorito() + "Sexo:" + this.getSexo(), this.getDireccion(), this.getMail(), this.getTelefono(), this.getNotas());
    };
    //Rellenar array de Direccion, Telefono y  Mail
    Persona.prototype.rellenarDireccion = function (cal, nu, pi, le, cp, po, pro) {
        var r = new Direccion_1.Direccion(cal, nu, pi, le, cp, po, pro);
        this.direcciones.push(r);
    };
    Persona.prototype.rellenarTelefono = function (a, b) {
        var r = new Telefono_1.Telefono(a, b);
        this.telefono.push(r);
    };
    Persona.prototype.rellenarMail = function (a, b) {
        var r = new Mail_1.Mail(a, b);
        this.mails.push(r);
    };
    /* */
    Persona.prototype.cambiar = function (dire, tel, ma) {
        //cambiar Direcciones
        dire[0].setCalle("Calle Torrecilla");
        dire[0].setNumero(15);
        dire[0].setPiso(2);
        dire[0].setLetra("M");
        dire[0].setCodigoPostal(25806);
        dire[0].setPoblacion("Barcelona");
        dire[0].setProvincia("Barcelona");
        //cambiar telefono
        tel[0].setTipo("movil fijo");
        tel[0].setNumero(927518252);
        //cambiar mail
        ma[0].setTipo["gmail"];
        ma[0].setDireccion["pepita@gmail.com"];
    };
    return Persona;
}());
exports.Persona = Persona;
