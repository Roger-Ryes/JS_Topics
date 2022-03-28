//Use Destructuring Assignment to Assign Variables from Nested Objects

//Using an object similar to previous examples:
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com',
      sex: "Masculino"
    }
  };
//Tradition assignment of values
var ageUser = user.johnDoe.age;
var emailUser = user.johnDoe.email;
console.log(ageUser, emailUser);

//Here's how you can assign an object properties' values to variables with different names:
var {
    johnDoe:{age: ageUser, email: emailUser}
} = user;
console.log(ageUser, emailUser);
