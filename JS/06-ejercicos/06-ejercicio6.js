'use strict'
/*
    Hacer calculadora
    - pida numeros por pantalla si metemos mal el numero que nos los vuelva a pedir
    -  En el cuerpo de la pagina, en una alerta y por la consola el resultado de suma, resta, multiplicacion y division    
*/

var num1 = parseInt(prompt("Ingrese 1er valor"));
var num2 = parseInt(prompt("Ingrese 2do valor"));
var alerta = "Ingresar valores numericos mayores a cero"

if(isNaN(num1)==true || isNaN(num2)==true || num1<0 || num2<0){
    alert(alerta);
    console.log(alerta);
    document.write(alerta);
}else{
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var dividir = num1 / num2;
    var mensajeH = "suma="+suma+"<br/>"+
        "resta="+resta+"<br/>"+
        "multiplicacion="+multiplicacion+"<br/>"+
        "dividir="+dividir+"<br/>";
    var mensajeC = "suma="+suma+"\n"+
    "resta="+resta+"\n"+
    "multiplicacion="+multiplicacion+"\n"+
    "dividir="+dividir+"\n";
        
    alert(mensajeC);
    console.log(mensajeC);
    document.write(mensajeH);
}

