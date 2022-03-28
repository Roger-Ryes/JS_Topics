'use strict'
/*
FUNCIONES 
Un funcion es una agrupacion reutilizable de un conjutos de instrucciones y se encarga de hacer algo 
*/

//Crear funcion
function calculadora(){
    console.log("Hola desde la funcion");
    return "hola";
}

//Llamar funcion
var resultado = calculadora();
console.log(resultado);

//Parametros 
function calculo(valor1, valor2){
    var suma = valor1 + valor2;
    var resta = valor1 - valor2;
    var multiplicacion = valor1 * valor2;
    var division = valor1 / valor2;
    console.log("suma="+suma);
    console.log("resta="+resta);
    console.log("multiplicacion"+multiplicacion);
    console.log("division"+division);
    return "hola";
}
    //Invocar o llamar a la funcion
    console.log(calculo);

    for (var i = 0; i<=10; i++){
        console.log(i);
        calculo(i,5);
    }

//Parametros opcionales
    function operaciones(num1,num2, mostrar=false){
        var suma = num1 + num2;
        var resta = num1 - num2;
        var multiplicacion = num1 * num2;
        var division = num1 / num2;
        if(mostrar == false){
            console.log("suma="+suma);
            console.log("resta="+resta);
            console.log("multiplicacion"+multiplicacion);
            console.log("division"+division);

        }else{
            document.write("suma="+suma+"<br/>");
            document.write("resta="+resta+"<br/>");
            document.write("multiplicacion"+multiplicacion+"<br/>");
            document.write("division"+division+"<br/>");
         }
    }

//Funciones dentro de otra
function operaciones2(num1,num2, mostrar=false){
    if(mostrar==false){
        porConsola(num1,num2);
    }else{
        porPantalla(num1, num2);
    }
}
function porConsola(num1, num2){
    console.log("suma="+(num1 + num2));
    console.log("resta="+(num1 - num2));
    console.log("multiplicacion"+(num1 * num2));
    console.log("division"+(num1 / num2));
}

function porPantalla(num1, num2){
    document.write("suma="+(num1 + num2)+'<br/>');
    document.write("resta="+(num1 - num2)+'<br/>');
    document.write("multiplicacion="+(num1 * num2)+'<br/>');
    document.write("division="+(num1 / num2)+'<br/>');
}