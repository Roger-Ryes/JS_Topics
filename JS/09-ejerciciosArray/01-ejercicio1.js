'use strict'
/*
    Hacer programa 
    1. pida 6 numeros por pantalla y meta en un array
    2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y la consola
    3. Sacar el array ordenado y mostrarlo
    4. Invertir su orden y mostrarlo
    5. Mostrar cuantos elementos tiene el array
    6. Busqueda de un valor introducido por el usuario y que no dija si lo encuentra y su indice 
*/

//Punto 1
var array = [];
var numero = parseInt(prompt("Ingresar valores"));
while((array.length)<6 && !isNaN(numero)){ 
    array.push(numero); 
    console.log(array); 
    console.log(array.length); 
    numero = parseInt(prompt("Ingresar valores"));   
}

if((array.length)==6){
    //Punto 2
    document.write("<h2>Elementos de Array</h2>"); 
    array.forEach(element => {
        document.write(element+'<br/>'); 
    });

    //Punto 3
    document.write("<h2>Elementos de Array Ordenado</h2>");
    document.write(array.sort(function(a,b){return a-b}));
    document.write("<br/>");

    //Punto 4
    document.write("<h2>Elementos de Array en Reverse</h2>");
    document.write(array.reverse());
    document.write("<br/>");

    //Punto 5 
    document.write("<h2>Numeros de Array</h2>");
    document.write("El numero de elementos son "+array.length+'<br/>');

    //Punto 6 
    document.write("<h2>Array a buscar</h2>");
    var buscar = parseInt(prompt("Valor a buscar"));
    var encontrar = array.findIndex(elemento => elemento == buscar);
    if(encontrar != -1){
        document.write('Encontrado!<br/>'+array[encontrar]);
    }else{
        document.write("No encontrado");
    }

   
    console.log('\n'+encontrar);

}
else if(isNaN(numero)) {
    document.write("Ingresar solo numeros");
} else {
    document.write("Ingresar numeros enteros mayores a cero");
}
    
    
