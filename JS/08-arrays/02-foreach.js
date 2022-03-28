'use strict'

//Recorrec array
    var lenguajes = new Array("php", "JS", "Go", "Java");
    document.write("<H1>Recorre array por foreach</H1>");
    lenguajes.forEach((elemento,index,data)=>{
        console.log(data);
    document.write('<li>'+index+' - '+elemento+'</li>');
    });
    //index y data pueden ser opcional

//for in
    for(let lenguaje in lenguajes){ // Asigna el indice de un array
        document.write('<li>'+lenguajes[lenguaje]+'</li>');
    }