'use strict'

var categorias = ["accion", "Terror", "Comedia"];
var peliculas = ["la verdad duele", "La vida es bella","torino"];


//OPERACIONES DE AGREGAR ELEMENTO A ARRAY
    //peliculas.push("batman");
    //console.log(peliculas)

    var elemento ="";
    do{
        elemento = prompt("Ingresa una pelicula");
        peliculas.push(elemento);    
    }
    while(elemento != "acabar");
    console.log(peliculas);

//OPERACION DE BORRAR UN ELEMENTO EN ARRAY
    peliculas.pop(); //elimino el ultimo elemento
    peliculas[0] = undefined;
    console.log(peliculas);

//ELIMINAR UNA OPERACION EN CONCRETO
    var indice = peliculas.indexOf("torino");
    if(indice > -1){
        peliculas.splice(indice,1); //En base a un indice borrar mas inidices a partir dese indice 
        console.log(peliculas);
    }

//CONVERTIR UN ARRAY A TEXTO
    var arrayToString = peliculas.join();
    console.log(arrayToString);
    
//Convertir de texto a array
    var cadena = "texto1, texto2, text3";
    var cadena_array = cadena.split(",");
    console.log(cadena_array);

//Ordenar un Array
   console.log(peliculas.sort()); //Ordena por orden alfabetico
    console.log(peliculas.reverse()); //Orden inverso al alfabetico
