'use strict'

// Write Concise Object Literal Declarations Using Object Property Shorthand

const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });  

// ES6 provides the syntactic sugar to eliminate the redundancy of having 
// to write x: x. You can simply write x once, and it will be converted to 
// x: x (or something equivalent) under the hood. 

const getMousePosition = (x, y) => ({ x, y });

// Example
// Without Shorthand
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name: name,
      age: age,
      gender: gender
    };
    // Only change code above this line
  };

// With Shorthand
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };