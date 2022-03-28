//OBJETO HEREDERO
class ObjetoHeredero{
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

//OBJETO HEREDADO
class Herencia extends ObjetoHeredero{
	public capucha: boolean;

	public setCapucha(capucha:boolean){
		this.capucha = capucha
	}
	public getCapucha(){
		return this.capucha;
	}
}

var her = new Herencia('verde','larga','nike','M',15);
her.setCapucha(true);
console.log(her);



