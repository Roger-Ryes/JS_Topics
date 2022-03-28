//POO
/*
  Clases(Molde del objeto)
    - Propiedades o atributos(Caracteristicas del objeto)
    - Metodos (Funciones o acciones del objeto)
*/
//la clase debe llamarse igual que el fichero (recomendado)
var Clases = /** @class */ (function () {
    function Clases() {
    }
    //public  protected private
    //Metodos
    Clases.prototype.setColor = function (color) {
        this.color = color;
    };
    Clases.prototype.getColor = function () {
        return this.color;
    };
    return Clases;
}());
var objeto = new Clases;
/* Si la propiedad fuera "public" si podria ejecutar esto
objeto.color = "rojo";
objeto.modelo = "manga larga";
objeto.marca = "Nike";
objeto.talla = 'L';
objeto.precio= 10;
*/
//Uso de Metodos
objeto.setColor("cafe");
console.log(objeto.getColor());
var objeto2 = new Clases;
/*
objeto2.color = "negro";
objeto2.modelo = "manga corta";
objeto2.marca = "Adidas";
objeto2.talla = 'N';
objeto2.precio= 15;
*/
//Uso de Metodos
objeto2.setColor("naranja");
console.log(objeto2.getColor());
