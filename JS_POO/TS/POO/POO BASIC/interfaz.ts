//INTERFACES
/*
	Es un contrato que deteminamos que propiedaes
	y metodos son oblicagorios a tener en una 
	clase 
*/

interface Interfaces{
	getColor();
	setColor(color);	
}
//CUMPLE CON EL CONTRATO PORQUE CONTIENE getColor(); Y setColor(color);	
class Objeto implements Interfaces{
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	public getColor(){
		return this.color;
	}
	public setColor(color){
		this.color = color;
	}
}

/* //NO CUMPLE CON EL CONTRATO PORQUE NO CONTIENE getColor(); Y setColor(color);	
class Objeto implements Interfaces{
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}
 }
*/

var construc = new Objeto('rojo','nike','larga','L',14);
console.log(construc);


