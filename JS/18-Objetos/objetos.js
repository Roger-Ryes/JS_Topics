'use strict'
//Los primeros elementos son elementos, se denominan "propiedades" del objeto.
//Los dos últimos elementos son funciones, se les denomina "métodos" del objeto.

var persona = {
	
	nombre: ['Bob','Smith'],
	cuidad:{
		pais: 'argentina',
		capital: 'argelia'
	}
	edad: 32,
	genero: 'masculino',
	intereses: ['musica','esqui'],
	//Propiedad: Metodo
	bio: function(){
		alert(this.nombre[0]+''+this.nombre[1]+'tiene'+this.edad+'años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
	},
	saludo: function(){
		//this se refiere al objeto actual en el que se está escribiendo el código, 
		//por lo que en este caso this es equivalente a la persona.
		alert('Hola, Soy '+this.nombre[0]+'.');
	}
}
//Para ingresar algunos de los siguientes en tu entrada de texto:
persona.nombre //Acceder al array
persona.cuidad.capital //Acceder al objeto dentro del objeto
persona.nombre[0] 
persona.edad
persona.intereses[1]
persona.bio()
persona.saludo()



