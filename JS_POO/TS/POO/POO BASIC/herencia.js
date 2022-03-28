var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//OBJETO HEREDERO
var ObjetoHeredero = /** @class */ (function () {
    function ObjetoHeredero(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    ObjetoHeredero.prototype.getColor = function () {
        return this.color;
    };
    ObjetoHeredero.prototype.setColor = function (color) {
        this.color = color;
    };
    return ObjetoHeredero;
}());
//OBJETO HEREDADO
var Herencia = /** @class */ (function (_super) {
    __extends(Herencia, _super);
    function Herencia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Herencia.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Herencia.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Herencia;
}(ObjetoHeredero));
var her = new Herencia('verde', 'larga', 'nike', 'M', 15);
her.setCapucha(true);
console.log(her);
