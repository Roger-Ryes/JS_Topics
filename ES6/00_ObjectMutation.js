'use strict'
var obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
}
//El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades;
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log("Second: ",obj);
