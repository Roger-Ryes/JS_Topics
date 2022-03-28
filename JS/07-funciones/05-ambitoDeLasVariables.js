'use strict'

/*
    Ambito de las variables
    las variables son locales si se definen dentro de una funcion y seran globales si los llamo de fuera de la funcion
*/

function holaMundo(texto){
    var hola_mundo = "texto dentro de funcion"
    console.log(texto);
    console.log(numero);    
    console.log(hola_mundo);
}

var numero =12;
var text = "Hola mundo soy una variable global";
holaMundo(text);
//console.log(hola_mundo);
console.log(typeof numero.toString());
