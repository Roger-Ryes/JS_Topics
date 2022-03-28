'use strict'
/*
    Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
*/
var valor1 =0;
var contador =0;
var suma = 0; 
do{
    var valor1 = parseInt(prompt("Ingrese valor1"));  
    if(isNaN(valor1)){
        alert("Ingresar solo numeros");
        valor1=0;
    }else{
        suma +=valor1;
        contador ++;
        var promedio = suma/contador;
        alert("La suma es a "+suma+" y el promedio es a "+promedio);
    }      
}
while(valor1>=0);
alert("Resultado total de La Suma es a "+suma+" y el Promedio es a "+promedio);