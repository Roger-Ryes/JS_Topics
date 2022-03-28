'use strict'

//OPERADORES
var num1 = 7;
var num2 = 12;
var resta = num1 - num2;
var suma = num1 + num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
alert("Resultado de operacion es "+suma);
var resto = num2 % num1;
console.log(resto);

//TIPOS DE DATOS
    //entero
    var num = 44;
    //string
    var text = "hola 'que tal' te va";
    var text2 = 'hola "que tal" te va';
    //booleano
    var bool = true;
    var bool2 = false;
    //array
    //objetos

//FUNCION DE CONVERSION

Number(); // Si le paso un numero en comillas lo convierte a numero 
//ejem   
    var num_text="33";
    var numSuma= 7;
    console.log(num_text+7);
    console.log(Number(num_text)+numSuma);  

parseInt();// Si le paso un numero en comillas  lo    convierte a numero

parseFloat();// Si le paso un decimal en comillas lo    convierte a numero

String(); //Convierte cualquier variable a texto
    console.log(String(numSuma)+num_text);

typeof variable; //Permite determinar que tipo de variable es
    console.log(typeof num_text);
    console.log(typeof numSuma);
