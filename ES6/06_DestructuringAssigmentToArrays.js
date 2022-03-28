'use strict'

//Destructuring an array lets us do exactly that:
const [a,b,,,,c]=[2,43,12,32,1,5,3,54,7,9,78];
console.log(a,b,c);

var u=8, o=3;
[u,o]=[o,u];
console.log(u,o)