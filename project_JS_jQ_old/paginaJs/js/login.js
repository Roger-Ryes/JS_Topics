'use strict'
var paginaDate = "date.html";
var paginaIndex = "index.html";
var rutaDate = new Rutas(paginaDate);
var rutaIndex = new Rutas(paginaIndex);

var urlDate = rutaDate.getRruta;
var urlIndex = rutaIndex.getRruta;

if(window.location.href==urlDate){
    var name = localStorage.getItem("username");
    var pass = localStorage.getItem("password");
    if(name!="admin" && pass != "admin"){
        window.location = urlIndex;
    }
}

function closeSession(){
    localStorage.clear();
    window.location = urlIndex;
}
