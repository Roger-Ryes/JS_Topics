'use strict'

//Parametros REST y SPREAD

// REST
    // ...nombre -> Guardara los valores no definidos en los parametros en una array
    
function listadoFrutas (fruta1, fruta2, ...restoDeFrutas){
    console.log("fruta1="+fruta1);
    console.log("fruta2="+fruta2);
    console.log(restoDeFrutas);
}

listadoFrutas("Naranja", "Manzana","Sandia","Mango","Pera");

//SPREAD
var frutas = ["Kiwi", "Melon"];
    //Sin SPREAD, se pasa directamente el array al parametro
    listadoFrutas(frutas, "Banana", "Fresas", "Mango");
    //Con SPREAD, se les asigna un parametro para cada array
    listadoFrutas(...frutas, "Banana", "Fresas", "Mango");