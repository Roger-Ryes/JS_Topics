'use strict'
window.addEventListener('load',()=>{
    console.log("DOM cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display="none";
    

    formulario.addEventListener('submit',()=>{
        console.log("evento submit capturado");
        
        //RECOGIENDO DATOS 
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var edad = document.getElementById("edad").value;
        console.log(nombre, apellido, edad); // comprobar
        
        //VALIDAR LOS DATOS 
        if(nombre.trim() == null || nombre.trim().lenght == "undefined"){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }
        if(apellido.trim() == null || apellido.trim().lenght == 0){
            
            alert("El apellido no es valido");
            return false;
        }
        if(edad.trim() == null || edad.lenght == 0|| isNaN(edad)){
            alert("El numero no es valido");
            return false;
        }

        //MOSTRAR EL BLOQUE
        box_dashed.style.display = "block";
        //MOSTRAR LOS DATOS
        /* //Metodo 1
        console.log(nombre, apellido, edad);
        var datos = `
            Nombre = ${nombre}, 
            Apellidp = ${apellido},
            Edad = ${edad}
        `;
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(datos);
        parrafo.append(texto);
        box_dashed.append(parrafo);
        */
       //Metodo 2 
       var array = [nombre, apellido, edad];
       var indice;
       for(indice in array){
           var parrafo = document.createElement("p");
           var texto = document.createTextNode(array[indice]);
           parrafo.append(texto);
           box_dashed.append(parrafo);
       }
    });

});