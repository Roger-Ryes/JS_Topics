'use strict'

//Rest Parameter with Function Parameters
const sum = (...args)=>args.reduce((a,b)=>a+b)
console.log(sum("hola "," mundo"," desde"," JS"))
console.log(sum(1,2,3,4))

