'use strict'

var categorias = ["accion", "Terror", "Comedia"];
var peliculas = ["la verdad duele", "La vida es bella","torino"];

//Arrya multidimencional
var cine= [categorias, peliculas];
console.log(cine[0][1]); // cine[categoria][categoria[1]]
console.log(cine[1][0]); // cine[peliculas][peliculas[0]]