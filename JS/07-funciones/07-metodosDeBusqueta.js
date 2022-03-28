'use strict'

/* METODOS DE BUSQUEDA */

var texto1 = "Bienvenido a curso de JS";

    // busca la palabra y da la posicion
    var busqueda = texto1.indexOf("curso");  
    console.log(busqueda);

    // Busca la ultima considencia 
    texto1 = "Bienvenido a curso de JS curso";
    busqueda = texto1.lastIndexOf("curso");
    console.log(busqueda);

    //Otro metodo de busqueda es
    busqueda = texto1.search("curso");
    console.log(busqueda);

    // El valor -1 significa que no encuenta
    busqueda = texto1.search("CSS");
    console.log(busqueda);

    //palabra buscada en un array
    busqueda = texto1.match("curso");
    console.log(busqueda);

    //palabras buscadas em un array 
    busqueda = texto1.match(/curso/g);
    console.log(busqueda);
    
    /*Saca la palabra de la posicion y el numero de caracteres*/ 
    busqueda = texto1.substr(13,5); //posicion,NumCaracteres
    console.log(busqueda);

    //Saca una letra en concreta
    busqueda = texto1.charAt(20);
    console.log(busqueda);

    //Busca un texto al inicio y envia TRUE o FALSE
    busqueda = texto1.startsWith("Bienvenido a");
    console.log(busqueda);

    //Busca un texto al final y envia TRUE o FALSE
    busqueda = texto1.endsWith("JS curso");
    console.log(busqueda);

    //Busca una palabra y devuelve TRUE o FALSE
    busqueda = texto1.includes("JS");
    console.log(busqueda);

    
    
 
 
