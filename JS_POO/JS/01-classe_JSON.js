'use strict';
/*
	OBJETOS CON JSON
	Una clase nos sirver para crear varios objetos de ese
	tipo.
	Para crear un objeto en JS
*/
var bicicleta={
	color: 'Rojo',
	modelo: 'bmx',
	frenos: 'Disco',
	velocidad: '60Km',
	cambiaColor: function(nuevo_color){
		//bicicleta.color = nuevo_color;
		this.color = nuevo_color; 
	}
};

console.log(bicicleta);
bicicleta.cambiaColor("negro");
console.log(bicicleta);
bicicleta.color = 'amarrilo';
console.log(bicicleta);

