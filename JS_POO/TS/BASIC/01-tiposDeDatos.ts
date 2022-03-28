//TS -> es un tipado fuerde (se especifica que variable es)

//Tipos de datos
//String
let cadena: string ="Solo un string";

//Number
let numero: number= 12;

//Boolean
let booleano: boolean=false;

//Anny (Cualquer cosa)
let cualquierValor: any='hola';


//Array
var arregloS: Array<string> = ['val1','val2','val3'];
var arregloN: Array<number> = [1,2,3];
var arregloA: Array<any> = [1,'val2',3];

//Array
let arreglo2n: number[] = [12,14,35];
let arreglo2a: any[] = ["val2",14,false];


console.log(cadena, numero, booleano, cualquierValor, arregloS,arregloN, arregloA);
console.log(arreglo2n, arreglo2a);

//Multiples tipos de datos;
let multV: string | number = 'multiplesDatos';
console.log(multV);
multV = 23;
console.log(multV);

//Tipos de datos personalizados
type alfanumerico= string | number;

var personaliz_var: alfanumerico = 72;
console.log(personaliz_var);

//LET VS VAR 

/*
	LET -> se usa a nivel de bloque 
	VAR -> es global
*/
//ejm
var num1 = 10;
var num2 = 20;
if (true){
	var num1 = 44;
	let num2 = 55;
	console.log(num1 ,num2);
}
console.log(num1 ,num2);
