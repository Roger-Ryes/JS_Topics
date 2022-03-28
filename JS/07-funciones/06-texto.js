'use strict'

var numero = 444;
var texto1 = "Bienvenido a curso de JS";
var texto2 = "Es buen curso";

//Transformacion de texto
    var dato = numero.toString();
    console.log(typeof dato);

//Transformacion a mayusculas
    dato = texto1.toUpperCase();
    console.log(dato);

//Transformacion a minusculas
    dato = texto2.toLowerCase();
    console.log(dato);

//Calcular longitud
    // Con legth se puede recibir 0, undefined, null significa que no hay nada o no esta definido
    var nombre ="";
    console.log(nombre.length);
    dato = texto2.length;
    console.log(dato);

    var nombre = ["hola","mundo"]
    console.log(nombre.length);

//Contatenar - Une texto
var texto_total = texto1+' '+texto2;
console.log(texto_total);
texto_total= texto1.concat(" "+texto2);
console.log(texto_total);