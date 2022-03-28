'use strict'
    var h1 = document.getElementById("encabezado");
    console.log(h1);
    h1.innerHTML = "Curso JS - DOM";
    h1.prepend(h1.innerHTML);
    
//DOM - Document Object Model
var caja = document.getElementById("caja");
console.log(caja);
console.log("value caja:",caja.innerHTML);

//Podemos agregar atributo a nuestro elemento
caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

function cambiarColor(color){
    caja.style.background = color;
}

//Podemos agregar atributo HTML
    caja.className = "Hola";

//FORMAS DE SELECCIONAR ELEMENTOS
    var caja = document.querySelector("#caja"); //ID igual que CSS
    var caja = document.querySelector("div"); // 

//CONSEGUIR ELEMENTOS POR SU ETIQUETA
    var todosLosDivs = document.getElementsByTagName("div"); // Se almacena como array
    console.log("valor de todosLosDivs:",todosLosDivs);
    console.log(todosLosDivs[2].innerHTML);
    var cambioDeTexto = todosLosDivs[1];
    cambioDeTexto.innerHTML = "He cambiado mi contenido";
    console.log(cambioDeTexto.innerHTML);
    
    //Agregar elementos en cada div
    var seccion = document.querySelector("#miseccion");
    var hr = document.createElement("hr");
    
    var elemento;
    for (elemento in todosLosDivs) {
        if(typeof todosLosDivs[elemento].textContent == 'string'){
            var parrafo = document.createElement("p");
            var texto = document.createTextNode(todosLosDivs[elemento].textContent);
            parrafo.prepend(texto);
            seccion.append(parrafo);
        }    
    }

    seccion.append(hr);
   
    //prepend-> Añade antes del primer hijo
    //append -> Añade despues del ultimo hijo

//CONSEGUIR ELEMENTOS POR SU CLASE
    var divRojos = document.getElementsByClassName("rojo");
    console.log(divRojos);
    //divRojos[0].style.background = "red";
    //divRojos[1].style.background = "red";
    var elemento;
    for(elemento in divRojos){
        console.log(divRojos.textContent);
        if(divRojos[elemento].className == "rojo"){
            divRojos[elemento].style.background = "red";
        }        
    }
    
    //Ahora con QuerySelector
    var id = document.querySelector("#encabezado");
    console.log(id);
    var divRojos = document.querySelector("div.rojo");
    console.log(divRojos);
    var etiqueta = document.querySelector("div");
    console.log(etiqueta);
