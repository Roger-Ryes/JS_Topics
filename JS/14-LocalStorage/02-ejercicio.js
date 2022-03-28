'use strict'
window.addEventListener('load',()=>{
    document.querySelector('#encabezado').innerHTML = "Ejercicio - LocalStorage";

    /*Realiza un formario que permita agregar pelicuals*/

    var formulario = document.querySelector("#formpeliculas");

    formulario.addEventListener('submit', function(){
        var titulo = document.querySelector('#addpelicula').value;

        if(titulo.length >= 1){            
            localStorage.setItem(titulo,titulo);
        }
        
    });
 
    var borrar_pelicula = document.querySelector("#borrar-pelicula");
    
    borrar_pelicula.addEventListener("submit",function(){
         var titulo = document.querySelector("#delpelicula").value;
         if(titulo.length >= 1){
             localStorage.removeItem(titulo);
         }
    });
       /* //Metodo 1
    var ul = document.querySelector("#peliculas-list");
    for(var i in localStorage){
        //console.log(localStorage[i]); 
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
        console.log(localStorage[i]);
    }*/

    var peliculas = document.querySelector("#peliculas");
    for(var i in localStorage){
        if(typeof localStorage[i] == "string"){
            //console.log(localStorage[i]); 
            var p = document.createElement("p");
            p.append(localStorage[i]);
            peliculas.append(p);
            console.log(localStorage[i]);
        }        
    }

    




});
