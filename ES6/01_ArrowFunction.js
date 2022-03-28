'use strict'
// Can use arrow function syntax:
const myFunc = ()=>{
    const value="value";
    return value
}

/* Arrow function syntax allows you to omit the 
keyword "return" as well as the brackets surrounding the code.*/
const myFunct2 = ()=>"value";
console.log(myFunct2());

// Arrow Functions with Parameters
const funcArg = (item)=>item*2;
funcArg(4);
console.log(funcArg(4));

const funcArg2 = (num1, num2)=>num1*num2;
funcArg2(4,2);
console.log(funcArg2(4,2));


// Set Default Parameters
var defaPara = (num,add=1)=>num+add;
defaPara(3);
console.log(defaPara(3));