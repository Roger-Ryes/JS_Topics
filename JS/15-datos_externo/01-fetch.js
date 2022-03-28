'use strict';
//Se va a utilizar como ayuda la pagina JSONPlaceholder ó reqres.in para obtener un REST API
// fetch es un sustitulo de "ajax" peticiones asincronas a un servidor  
// vamos a practica con fetch y peticiones a servicios / apis rest
var div_usuarios = document.querySelector('#usuarios');

var usuarios =[];
fetch('https://jsonplaceholder.typicode.com/users')//Esto es una promesa por ello usa "then"
.then(data => data.json())//en then se recoge datos
.then(data =>{ //en la variable "data" ya se tiene todos los datos recogidos
    usuarios = data; // lo guardamos en usuarios 
    console.log(usuarios);
    //para mostrar todo 
    usuarios.map((data,i)=>{ //.map es igual a foreach
        let nombre = document.createElement('h2');

        nombre.innerHTML = i +". "+data.name+" - "+data.phone;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    })

});
/* 
    .then(data => data.json()) 
    Es lo mismo hacer
    .then(data => {
        return data.json()
    })
    ó
    .then(function(data){
        return data.json()
    })
*/

