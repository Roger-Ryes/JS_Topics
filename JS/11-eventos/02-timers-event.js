'use strict'
window.addEventListener('load',()=>{
    var h1 = document.getElementsByTagName("h1");
    h1[0].innerHTML = "Curso JS - Evento timer";
    h1[0].prepend=h1[0].innerHTML;

//Timer
    //setInterval(function(), inteval);
    function interval(){
        let tiempo = setInterval(function(){
            var h1 = document.querySelector("h1");
            console.log("SetInterva ejecutado");
            
            if(h1.style.fontSize == "50px"){
                h1.style.fontSize = "30px";
            }else{
                h1.style.fontSize = "50px";
            }        
        }, 3000); //3000ms
        return tiempo;
    }
    
   

    //setTimeout(function(), time); - solo se ejecuta una vez
    var tiempo_unic = setTimeout(()=>{
        var h1 = document.querySelector("h1");
        console.log("SetTimeout ejecutado");
        
        if(h1.style.color == "red"){
            h1.style.color = "green";
        }else{
            h1.style.color = "red";
        }
    }, 2000);


    var tiempoInterval;

    //clearInterval(variable);
    var stop = document.getElementById('stop'); 
    stop.addEventListener("click",function(){
        console.log("Activado boton stop");
        alert("Se detuvo el parpadeo");
        clearInterval(tiempoInterval);         
    });

     //Iniciar Interval(variable);
     var start = document.getElementById('start'); 
     start.addEventListener("click",function(){
         console.log("Activado boton start");
         alert("Activado parpadeo");
         tiempoInterval = interval();
     });

});