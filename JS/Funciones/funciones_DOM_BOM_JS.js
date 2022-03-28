//JS en profundidad
//DOM - Document Object Model
    //SELECCION DE ELEMENTOS
    document.getElementById("id");
    document.getElementsByTagName("etiqueta");
    document.getElementsByClassName("clase");
        //Se escoje igual que en CSS
    document.querySelector("#id");
    document.querySelector(".class");
    document.querySelector("etiqueta");
    document.querySelectorAll("elemento"); //Seleccionar todo el array y no solo uno

    //AGREGAR ATRIBUTOS AL ELEMENTO
    elemento = document.getElementsByTagName("elemento");// Se almacena como array
    elemento[1].innerHTML = "Cambio el texto de un elemento";
    elemento.style.color="green";
    elemento.className = "NombreDeClase";

    //CREAR ELEMENTOS
    elemento = document.createElement("p");//Puede ser cualquier elemento  ejm <p>, <br/>, <div>, <hr/>, etc

    //CREAR TEXTO
    text = document.createTextNode("string");

    //AGREGAR TEXTO A ELEMETOS
    elemento.append(text); //Añade despues del ultimo hijo
    elemento.prepend(text); //Añade antes del primer hijo
    elemento.appendChild(text); 


////////////////////////////////////////////////////
//BOM - Browser Object Mode
    //Tamaño de ventana
    window.innerHeight; //Altura 
    window.innerWidth; //Anchura 
    screen.height; //Altura descartanto el inspector
    screen.width;//Anchura descartanto el inspector

    //Sacar url
    window.location; //Todo de la locacion del windows
    window.location.href; // Saca un elemento (URL) del todo
    //Asignacion 
    window.location.href = url; 

    //Abrir ventana del navegador
    window.open(url,'','width=300, height=300');


////////////////////////////////////////////////////
//EVENTOS
//Mouse
    //click - en html -> onClick =""
    elemento.addEventListener("click",function(){});
    //Mouse Over (sobre eventos)
    elemento.addEventListener("mouseover",function(){});
    //Mouse Out
    elemento.addEventListener("mouseout",function(){});
//Teclado
    //focus - Se activa cuando entramos a barra de texto
    elemento.addEventListener("focus",function(){});
    //blur - Se activa cuando salimos de barra de texto
    elemento.addEventListener("blur",function(){});
    //Keydown - Se activa cuando se pulsa teclas
    elemento.addEventListener("keydown",function(){});
    //Keypress - Se activa al precionar cualquier tecla
    elemento.addEventListener("keypress",function(){});
    //Keyup -  Se activa cuando soltamos la tecla
    elemento.addEventeListener("keyup",function(){});
    //Convert letters writen
    String.fromCharCode(event.keyCode);



////////////////////////////////////////////////////
//Load
    //Se activa cuando la pagina a cargado por completo
    window.addEventListener("load",()=>{
        //Codigo a ejecutar
    });



////////////////////////////////////////////////////
// Timer
    //setInterval(function(), inteval);
    variable = setInterval(function(){}, 3000); //3000ms
    //clearInterval(variable);
    clearInterval(variable);

    //setTimeout(function(), time); - Solo se ejecuta una vez
    variable = setTimeout(function(){}, 2000); // 2000ms


////////////////////////////////////////////////////
//this 
    //Sin "this"
    elemento.addEventeListener("click",()=>{
        elemento.style.background = "red";
    });
    //Con "this" -> Se puede usar para hacer referecia al elemento utilizado
    elemento.addEventeListener("click",()=>{
        this.style.background = "red";
    });



////////////////////////////////////////////////////
//JSON - JS OBJECT NOTATION
     //Crear un JSON
     var objeto = {
        atributo1: "propiedad1",
        atributo2: 2017,
        atributo3: "propiedad3"
    };

    //Acceder a JSON
    objeto.atributo1;

    //Se puede hacer un array de objetos 
    var arrayObjetos = [objeto1,objeto2,objeto3];

    //Recuperar un objeto JSON
    JSON.parse(localStorage.getItem("key"));
    //JSON.parse() -> convierte de string a objeto

    //Convertir de JSON a string
    JSON.stringify(usuarios)





////////////////////////////////////////////////////
//LocalStorage
    //COMPROBAR DISPONIBILIDAD DEL LOCALSTORAGE 
   if(typeof(Storage) != 'undefined'){
    console.log("LocalStorage Disponible!");
    }else{
    console.log("LocalStorage No! disponible");
    }

    //Guardar datos en localStorage
    localStorage.setItem("key","valor");

    //Recuperar datos del localStorage
    localStorage.getItem("key");

    //Guardar objetos JSON se debe convertir a String se quiere guardar datos por localStorage
    //JSON.string   xify(objeto_JSON); -> permite convertir a string
    localStorage.setItem("key",JSON.stringify(usuarios));

    //Elimitar un localStorage
    localStorage.removeItem("usuario");

    //Elimitar todo de localStorage
    localStorage.clear();




////////////////////////////////////////////////////
//fetch
    /* fetch es un sustitulo de "ajax" peticiones   asincronas a un servidor  
    Se practica con fetch y peticiones a servicios / apis rest*/

    fetch('http://aquivalaUrl.com')//.Esto es una promesa por ello se usa .then
        .then(data=>data.json)//.then recoge los datos
        .then(data=>{   //en data ya se tiene todos los datos recogidos
            variable = data; // es un objeto JSON
            console.log(variable); // se puede recorrer usando foreach, forin o map
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
    //map es parecido a foreach y for in
    variable.map((var2,index)=>{
        document.write(index+" "+var2);
    })
    




////////////////////////////////////////////////////
//CHAIN PROMISE o CADENA DE PROMESAS 
    fetch("https://reqres.in/api/users")
    .then(data => data.json())//en then se recoge datos
    .then(user =>{ //en la variable "data" ya se tiene todos los datos recogidos
      listadoUsuarios(user.data);//Aqui lista los users

      //Ahora quiero hacer una llamada que me devuelva otro
      //JSON
      return fetch('https://reqres.in/api/users/2');//Devuelve el otro usuario
    })//Una vez se tenga el otro usuario se campura 
    .then(datos=>datos.json())//que devuelve la peticion anterior
    .then(janet=>{ //Una vez que se tenga los datos se guarda en "janet"
         mostrarJanet(janet.data);
         return getInfo();
    })
    .then(datos=>{
         mostrarProfesor(datos); //JSON hechos por nosotros
    })
//PARA CAPTAR ERRORES (Va seguido de la cadena)
    .catch(error=>{//Para capturar el error
        console.log(error);
        alert("Error en las peticiones");
    }); 
    //Esto que se creo es una chain promise o cadena de promesas 

//CREAR UNA PROMESA
    //Aqui se crea Promesa
    return new Promise((resolver, reject)=>{//resolver | rechazar
        var profesor_str = '';
        profesor_str = JSON.stringify(profesor);
        if(typeof profesor_str != 'string' || profesor_str == '') return reject("error1");
        //else
        return resolver(profesor_str);  
    });






////////////////////////////////////////////////////
//TRY - CATCH --    captura un error para enviarlo al usuario
try{
    //Codigo
}catch(variable){ //captura el error
    console.log(error);
    alert("A ocurido un error en el codigo");
}