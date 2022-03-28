'use strict'

// Destructuring Assignment to Extract Values
const user = { nickname: 'John Doe', age: 34 };

var nickname = user.nickname;
var age = user.age;
console.log("Values: "+nickname+", "+age);
// Here's an equivalent assignment statement using the ES6 destructuring syntax:
var {nickname, age} = user;
console.log("Values2: "+nickname+", "+age);