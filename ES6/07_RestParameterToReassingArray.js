'use strict'
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// The result is similar to Array.prototype.slice(), as shown below:
const [a,b,...arr]=[1,2,3,4,5,6,7,8,9]
console.log(a,b);
console.log(arr)