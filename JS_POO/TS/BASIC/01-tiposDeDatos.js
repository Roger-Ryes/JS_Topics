//TS -> es un tipado fuerde (se especifica que variable es)
//Tipos de datos
//String
var cadena = "Solo un string";
//Number
var numero = 12;
//Boolean
var booleano = false;
//Anny (Cualquer cosa)
var cualquierValor = 'hola';
//Array
var arregloS = ['val1', 'val2', 'val3'];
var arregloN = [1, 2, 3];
var arregloA = [1, 'val2', 3];
//Array
var arreglo2n = [12, 14, 35];
var arreglo2a = ["val2", 14, false];
console.log(cadena, numero, booleano, cualquierValor, arregloS, arregloN, arregloA);
console.log(arreglo2n, arreglo2a);
//Multiples tipos de datos;
var multV = 'multiplesDatos';
console.log(multV);
multV = 23;
console.log(multV);
var personaliz_var = 72;
console.log(personaliz_var);
//LET VS VAR 
/*
    LET -> se usa a nivel de blocque
    VAR -> es global
*/
//ejm
var num1 = 10;
var num2 = 20;
if (true) {
    var num1 = 44;
    var num2_1 = 55;
    console.log(num1, num2_1);
}
console.log(num1, num2);
