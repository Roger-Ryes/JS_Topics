'use strict'

//Arrays o arreglos o matrices
    /*Es una coleccion de tipos de datos */

    var nombres = ["Antonio", "Pepe", "Sucre",72, true];

   

    //Los arrays contiene indices y cada indice empieza por cero
    
    //Acceder a un array especifico
    console.log(nombres[4]);
    console.log(nombres[2]);

//Arrays avanzados
    //longitud en arrays
    console.log(nombres.length);
    /*
    var elemento = parseInt(prompt("Que elementos de array deseas"));
    if(elemento > nombres.length) {
        alert("Introduce el numero correcto menor que "+nombres.length);
    }  
    else{
        alert('El user seleccionado es '+nombres[elemento]);
    }
    */

//RECORRER UN ARRAY
    document.write("<h1>Lenguajes de programacion<h1>");
    
    var lenguajes = new Array("php", "JS", "Go", "Java");
    document.write("<ol>");

    for(var i=0; i<lenguajes.length; i++){
        document.write('<li>'+lenguajes[i]+'</li>');
    }
    document.write("</ol>");

