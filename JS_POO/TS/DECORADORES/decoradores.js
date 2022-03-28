//DECORADORES
/*
    Es un patron de diseño, a hacer una copia de esa clase y
    modificalar para que haga alguna actividad en funcion a
    los parametros que se le ingresen
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con el logo de " + logo);
        };
    };
}
//Ahorra lo aplico el decorador a una clase
var ClaseAaplicar = /** @class */ (function () {
    function ClaseAaplicar(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    ClaseAaplicar.prototype.getColor = function () {
        return this.color;
    };
    ClaseAaplicar.prototype.setColor = function (color) {
        this.color = color;
    };
    ClaseAaplicar = __decorate([
        estampar("Nike") //No termina con punto y coma
    ], ClaseAaplicar);
    return ClaseAaplicar;
}());
var camisa = new ClaseAaplicar("Rojo", "manga", "Adidas", "L", 20);
console.log(camisa);
camisa.estampacion();
