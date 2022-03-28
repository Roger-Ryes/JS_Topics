window.addEventListener("load",()=>{
    document.getElementById("encabezado").innerHTML="Curso JS - LocalStorage";

    //LocaStorage 
    /* 
    Es como un tipo de session en donde va a almacenar informacion.
    */
   //COMPROBAR DISPONIBILIDAD DEL LOCALSTORAGE 
   if(typeof(Storage) != 'undefined'){
       console.log("LocalStorage Disponible!");
   }else{
    console.log("LocalStorage No! disponible");
   }

//Guardar datos en localStorage
localStorage.setItem("titulo","curso de symfony");// "key" , "valor"

//Recuperar elemento
document.querySelector("#contenedor").innerHTML =localStorage.getItem("titulo");

//Guardar objetos 
var usuarios ={
    nombre: "Roger Reyes",
    email: "roger@reyes.com",
    web: "rogerreyes.com"
}

//Es necesario convertir a String se se quiere guardar datos por localStorage

localStorage.setItem("usuario",JSON.stringify(usuarios)); //JSON.stringify("usuarios"); // Permite convertir un JSON a estring

//Recuperar un objeto JSON
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" "+userjs.nombre+' - '+userjs.email)

//Elimitar un localStorage
localStorage.removeItem("usuario");

//Elimitar todo de localStorage
localStorage.clear();

})

