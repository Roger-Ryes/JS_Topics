'use strict'

var categorias = ["accion", "Terror", "Comedia","drama"];

//Busqueda
var busqueda = "";
busqueda = categorias.find(function(elemento){
    return elemento == "terror";
});
console.log(busqueda);

//Reducir este codigo
busqueda = categorias.find (elemento=> elemento == "accion");

console.log(busqueda);

//Buscar la palabra y saca el index
busqueda = categorias.findIndex (elemento=> elemento == "accion");

console.log(busqueda);

//Identifica que tipos de valor hay en un Array
var precios = [10, 20, 50, 90, 12];
busqueda = precios.some(precio=> precio > 90);
console.log(busqueda); //Regresa valores booleanos

