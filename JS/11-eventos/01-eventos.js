    function codigoJs(){
    'use strict'

    var h1 = document.getElementsByTagName("h1");
    h1[0].innerHTML = "Cursos JS - Eventos";

//EVENTOS
    //Eventos del raton
    var boton = document.querySelector("#boton");

    function cambiarColor(){
        var bt = boton.style.background;
        if(bt == "green"){
            boton.style.background = "red";
        }else{
            var bt = boton.style.background = "green";
        }
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    //Eventos dentro de js
    var boton2 = document.querySelector("#boton2");
    boton2.addEventListener('click',function(){
        console.log("boton2")
        var bt = this.style.background;
        if(bt == "green"){
            this.style.background = "red";
        }else{
            var bt = this.style.background = "green";
        }
    });

    //Mouse Over 
    boton.addEventListener("mouseover",function(){
        boton.style.background = "#ccc";
    });

    //Mouse Out
    boton.addEventListener("mouseout",function(){
        boton.style.background = "yellow";
    })

    //Teclado 
    //focus - Se activa cuando entramos
    var input = document.querySelector("#campo_nombre"); 
    input.addEventListener("focus",function(){
        console.log("[focus] Estas dentro del  input");
    });

    //blur - Se activa cuando salimos
    input.addEventListener("blur",function(){
        console.log("[blur] Estas fuera del  input");
    });

    //Keydown - Se activa cuando se pulsa teclas
    input.addEventListener("keydown",function(){
        console.log("[keydown] Estas pulsando tecla");
        console.log(String.fromCharCode(event.keyCode));
    });

    //Keypress - Se activa al precionar cualquier tecla
    input.addEventListener("keypress",function(){
        console.log("[keypress] Tecla presionado");
        console.log(String.fromCharCode(event.keyCode));
    });

    //Keyup - Se activa cuando levanto el dedo de la tecla
    input.addEventListener("keyup",function(){
        console.log("[keyup] Tecla soltado");
        console.log(String.fromCharCode(event.keyCode));
    });
};
    
//load - Cuando la pagina ya este cargada, se ejecutara todo el codigo dentr de load
window.addEventListener('load',()=>{
    //codigo a ejecutarse
    codigoJs();        
});
