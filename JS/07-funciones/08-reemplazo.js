'use strict'
 
//FUNCIONES DE REEMPLAZO
    var texto1 = "Bienvenido a curso de JS";
    var texto2 = "Es un buen curso";

//Permite Reemplazar 
    var reemplazo = texto1.replace("JS","Symfony");
    console.log(reemplazo);

//Separar string
    var reemplazo = texto1.slice(14);
    console.log(reemplazo);

    var reemplazo = texto1.slice(10, 15);
    console.log(reemplazo);

//Recortar palabras y meterlo en un array
    var reemplazo = texto1.split();
    console.log(reemplazo);
    //separar por espacio
    var reemplazo = texto1.split(" ");
    console.log(reemplazo);
    
//Quita espacios
    var reemplazo = texto1.trim();
    console.log(reemplazo);
