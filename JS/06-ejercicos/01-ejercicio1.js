'use strict'

/*
PROGRAMA QUE PIDA DOS NUMERO Y QUE NOS CUAL ES MAYOR O MENOR O SI SON IGUALES
PLUS: si los numero no son un numero o son menores o iguales a cero vuelve a pedir los datos
*/
var valor1 = prompt("Ingrese valor 1");
var valor2 = prompt("Ingrese valor 2");

while(valor1<=0 ||  valor2<=0 || isNaN(valor1) || isNaN(valor2)){
    alert("Ingresar valors enteros mayores a cero");
    var valor1 = prompt("Ingrese valor 1");
    var valor2 = prompt("Ingrese valor 2");
 }
if (valor1 > valor2){
    alert("El valor 1 ("+valor1+") es mayor a valor2 ("+valor2+")");
}
else if(valor1 == valor2){
    alert("El valor 1 ("+valor1+") y valor2 ("+valor2+") son iguales");
}
else{
    alert("El valor 1 ("+valor1+") es menor a valor2 ("+valor2+")");   
}


//funciones
isNaN(); //Es un note name es decir si son letras true->es texto false-> no es texto
