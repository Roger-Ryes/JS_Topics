"use strict";
//CONSTRUCTOR
/*
    Es un metodo especial para dar un valor
    inicial al atibuto o propiedad
    Nunca devuelve ningun dato
*/
exports.__esModule = true;
exports.Constructor = void 0;
var Constructor = /** @class */ (function () {
    function Constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Constructor.prototype.getColor = function () {
        return this.color;
    };
    Constructor.prototype.setColor = function (color) {
        this.color = color;
    };
    return Constructor;
}());
exports.Constructor = Constructor;
var construc = new Constructor('rojo', 'nike', 'larga', 'L', 14);
construc.setColor("purpura");
console.log(construc);
