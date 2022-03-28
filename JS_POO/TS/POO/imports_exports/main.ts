//EXPORT
/*
	Se utiliza para exportar una clase a otra
	ejm
		export class Constructor{//Codigo}

*/
//IMPORT
/*
	Importa una clase
*/

import {Constructor} from '../constructor';//Se ve a profundidad en angular (Ahora no funciona el codigo)

class Main {
	constructor(){
		console.log("Aplicacion cargada");
	}
}

var main = new Main();