'use strict'
window.addEventListener('load',()=>{
    document.getElementById("encabezado").innerHTML = "Curso JS - JSON";

//JSON - JS OBJECT NOTATION
/* Permite hacer como un array asociativo */

    //Crear un JSON
    var pelicula = {
        titulo: "Batman vs Superman",
        year: 2017,
        pais: "Estados Unidos"
    };

    //Acceder a JSON
    console.log(pelicula);
    console.log(pelicula.titulo);

    //Cambiar el valor 
    pelicula.titulo="Superman Begin";
    console.log(pelicula.titulo);

    //Se puede hacer un array de objetos 
    var peliculas = [
        {titulo: "La verdad duele", year: 2016, pais:"Francia"},
        pelicula
    ];
    var caja_peliculas = document.querySelector("#peliculas");
    
    var index;
    for(index in peliculas){
        var parrafo = document.createElement("p");
        parrafo.append(peliculas[index].titulo+' | '+peliculas[index].year);
        caja_peliculas.append(parrafo);
    
    }
});