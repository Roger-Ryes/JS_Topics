//DECORADORES
/*
	Es un patron de diseño, a hacer una copia de esa clase y
	modificalar para que haga alguna actividad en funcion a
	los parametros que se le ingresen
*/

function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{ //void es vacio (no hay respuesta)
			console.log("camiseta estampada con el logo de "+logo);
		}

	}
}

//Ahorra lo aplico el decorador a una clase
@estampar("Nike") //No termina con punto y coma
class ClaseAaplicar{
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

var camisa = new ClaseAaplicar("Rojo","manga","Adidas","L",20);
console.log(camisa);
camisa.estampacion();


//DECORATION FACTORIES 
function color(value: string) {
  // this is the decorator factory
  return function (target) {
    // this is the decorator
    // do something with 'target' and 'value'...
  };
}
/*When multiple decorators apply to a single declaration, their evaluation is similar
 to function composition in mathematics. In this model, when composing functions f and g,
 the resulting composite (f ∘ g)(x) is equivalent to f(g(x)).*/