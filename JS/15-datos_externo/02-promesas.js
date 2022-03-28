//LAS PROMESAS
/*
	Son utilis para evitar el callback held es decir tener
	un callback dentro de otro y dentro de otro y asi.
	En especial con API REST
	Por ello se usa FETCH que es una promesa por ello 
	devuelve promesas ".then"
*/

'use strict'
var div_usuarios = document.querySelector('#usuarios');
var div_profesor = document.querySelector('#profesor');
var div_janet = document.querySelector('#janet');

getUsuario() 
.then(data => data.json())//en then se recoge datos
.then(user =>{ //en la variable "data" ya se tiene todos los datos recogidos
  listadoUsuarios(user.data);//Aqui lista los users

  //Ahora quiero hacer una llamada que me devuelva otro
  //JSON
  return getJanet();	//Devuelve el otro usuario
})//Una vez se tenga el otro usuario se campura 
.then(datos=>datos.json())//que devuelve la peticion anterior
.then(janet=>{ //Una vez que se tenga los datos se guarda en "janet"
	 mostrarJanet(janet.data);
	 return getInfo();
})
.then(datos=>{
	console.log(datos);
	 mostrarProfesor(datos);
})
.catch(error=>{//Para capturar el error
	console.log(error);
	alert("Error en las peticiones");
}); 
//Esto que se creo es una chain promise o cadena de promesas 



function getUsuario(){
	return fetch('https://reqres.in/api/users');
}
//Devolver un user especifico
function getJanet(){
	return fetch('https://reqres.in/api/users/2');
}

//CREAR UN PROMESA 
function getInfo(){
	var profesor = {
		nombre: "Victor",
		apellidos: "Robles",
		url: "http://Victor_robles.com"
	};

	//Aqui se crea Promesa
	return new Promise((resolver, reject)=>{//resolver | rechazar
		var profesor_str = '';
		setTimeout(function(){
			profesor_str = JSON.stringify(profesor);
			if(typeof profesor_str != 'string' || profesor_str == '') return reject("error1");
			//else
			return resolver(profesor_str);			
		},2000);	
	})
}

function listadoUsuarios(usuarios){
	//para mostrar todo 
    usuarios.map((valor,i)=>{ //.map es igual a foreach
        let nombre = document.createElement('h2');

        nombre.innerHTML = i +". "+valor.first_name+" - "+valor.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    });
}

function mostrarJanet(janet){
    let nombre = document.createElement('h3');
    let avatar = document.createElement('img');

    nombre.innerHTML = janet.first_name+" - "+janet.last_name;
    div_janet.appendChild(nombre);
    avatar.src = janet.avatar;
    avatar.width = "200";
    div_janet.appendChild(avatar);

    document.querySelector("#janet .loading").style.display = "none";
}

function mostrarProfesor(profesor_div){
    let nombre = document.createElement('h3');
    
    nombre.innerHTML = profesor_div;
    div_profesor.appendChild(nombre);
    
    document.querySelector("#profesor .loading").style.display = "none";
}