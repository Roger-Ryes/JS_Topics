'use strict'

/*
FUNCIONES ANONIMAS
Es una funciones que no tiene nombre
*/

var peliculas = function(nombre){
    return "La pelicula es:" +nombre;
}
// Se lo llama por consola con: peliculas("nombre");
console.log(peliculas("rapidos"));

/*
CALLBACK
Es una funcion dentro de otra funcion
*/
function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}
sumame(5, 7, function(dato){
    console.log("La suma es:", dato);
},
function(dato){
    console.log("La suma es:", (dato*2));
});