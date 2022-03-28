'use strict'
//SE PUEDE DEFINIR VAR O LET PARA VARIABLES
alert("Hola");

/*let --> define una variable delimitando su alcanse al bloque donde se esta usando
  var --> Es una variable global */

//PRUEBA CON VAR
var num = 40;
console.log(num);
if(true){
    var num = 50;
    console.log(num);
}
console.log(num);

//PRUEBA CON LET
var texto = "curso js";
console.log(texto);
if(true){
    let texto = "Curso larevel";
    console.log(texto);
}
console.log(texto);


