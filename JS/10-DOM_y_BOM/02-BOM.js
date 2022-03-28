'use strict'
    var h1 = document.getElementById("encabezado");
    console.log(h1);
    h1.innerHTML = "Curso JS - BOM ";
    h1.prepend(h1.innerHTML);
//BOM - BROWSER OBJECT MODEL
/*
    Como puedo trabajar con los elementos que nos da el navegador 
*/ 

//Ver el tamaño de ventana
function getWindow(){
    console.log(window.innerHeight); // altura
    console.log(window.innerWidth); // anchura
}    
//Otra metodo
function getScreen(){
    console.log(screen.height); // altura
    console.log(screen.width); // anchura
}

//Sacar url
function getURL(){
    console.log(window.location);//Todo
    console.log(window.location.href);//Sacar un elemento del todo 
}

//Cambiar de direccion con url
function redireccion(url){
    window.location.href = url;   
}

//Abrir ventana del navegador
function abrirVentana(url){
    window.open(url,'','width=300, height=300');
}

