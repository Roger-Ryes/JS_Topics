//CREAREMOS UN MODULO 
function add(num1 , num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num2>0) return num1 / num2;
    return console.log("valor num2 debe ser mayo a cero");
}
function sayHello(){
    return console.log("hello!!");
}

//EXPORTAR EL MODULO
//1er Metodo
    //module.exports = add; 
    //module.exports = multiply; 
    
//2do Metodo 
    // exports.add = add; 
    // exports.multiply = multiply; 
    // exports.substract = substract;
    // exports.divide = divide; 

//diferent between two export
/*The first exposes the "object". 
  The latter exposes the "properties".
*/

//Para exportar el objeto
const Math = {};
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
//EXPORT OBJECT
module.exports = Math; //Objeto
module.exports = sayHello; //funcion

 /*console.log(add(3,2));
console.log(substract(3,2));
console.log(multiply(3,2));
console.log(divide(3,0));*/
