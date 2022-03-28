'use strict'
// Use the Spread Operator To Evaluate Arrays

// The ES5 code below uses apply() to compute the maximum value in an array:
var arr = [6, 89, 3, 45];
console.log(arr);

var arr2 = Math.max.apply(null, arr);
console.log(arr2);

// The spread operator makes this syntax much better to read and maintain
var arr3 = Math.max(...arr);
console.log(arr3);
// The spread operator only works in-place, like in an argument to a function or in an array literal
var arr4 = [...arr]
// console.log(arr4)