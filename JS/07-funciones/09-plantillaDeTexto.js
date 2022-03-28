'use strict'

//Tradicional
var nombre = prompt("Ingrese su nombre");
var apellidos = prompt("Ingrese sus apellidos");

var texto = "Mi nombre es:"+nombre+" Mis apellidos son "+ apellidos;

document.write(texto);

//Plantillas de texto 
var texto =`
    <h1> Hola que tal </h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos} </h3>
`;
document.write(texto);
