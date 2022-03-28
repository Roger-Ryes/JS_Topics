/*
Arrow function
    Es lo mismo que definir una funcion pero en vez de escribor "function" se usa una flecha "=>".
    Utilizado mas en Callback
*/

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}
sumame(5, 7, dato =>{
    console.log("La suma es:", dato);
},
dato =>{
    console.log("La suma es:", (dato*2));
});

const makeArray = (...values) => { return values };
console.log('Array:', makeArray(1, 2, 3, 4));
console.log('Array:', makeArray(1, 2, 3, 4, 5, 6));

const getSum = (a, b) => { return a + b };
console.log('1 + 2 =', getSum(1, 2));



//FLECHA o ARROW 
//EXAMPLE
const makeArray = (...values) => { return values };
console.log('Array:', makeArray(1, 2, 3, 4));

const getSum = (a, b) => { return a + b };
console.log('1 + 2 =', getSum(1, 2));

//Sum the Elements of an Array
/*While we can certainly iterate over an array and sum each
 value, we can also use the reduce function.*/
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((a, b)=>{
    return a + b;
}, 0);

console.log('Array:', arr);
console.log('Sum:', sum);
//output
/*    Array: [ 1, 2, 3, 4, 5 ]
      Sum: 15*/

//EXAMPLE 
//Find the Length of Strings in an Array
const arr = ['first', 'second', 'third', 'fourth', 'fifth'];
const len = arr.map(function(s) { return s.length });

console.log('Array:', arr);
console.log('Lengths:', len);

//EXAMPLE 
//Find Array Elements Greater Than a Value
//Let's find all the elements in an array that are greater than 3 and add them to a new array.
const arr = [1, 2, 3, 4, 5];

const greaterThan3 = arr.filter(function(a) {
    return a > 3;
});
//OR 
const greaterThan3 = arr.filter(a=>a>3)

console.log('Array:', arr);
console.log('Elements Greater Than 3:', greaterThan3);
