'use strict'
/*
    Hacer un programa que muestr todos los numeros entre dos numeros introducidos por el usuario
*/
document.write("<h2>Ejercicio 2</h2>");
var inicio = parseInt(prompt("Ingrese 1er valor",0));
var fin = parseInt(prompt("Ingrese valor final"));
document.write("<h3>Valores desde "+inicio+" hasta "+fin+"</h3>")

if(isNaN(inicio) && isNaN(fin)){
    alert("Ingresar solo numeros");
}
else{
    for(inicio; inicio<=fin; inicio++){
        console.log(inicio);
        document.write(inicio+'<br/>');
    }
}