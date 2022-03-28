
//CONSTRUCTOR
/*
	Es un metodo especial para dar un valor 
	inicial al atibuto o propiedad
	Nunca devuelve ningun dato
*/



export class Constructor{
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

var construc = new Constructor('rojo','nike','larga','L',14);
construc.setColor("purpura");
console.log(construc);


