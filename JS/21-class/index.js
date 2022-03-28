/*
Using Functions

    Define a normal JavaScript function.
    Create an object by using the new keyword.
    Define properties and methods for a created object using the this keyword.
*/
'use strict'

function fruit(type){
	this.type = type;
	this.color = "unknown";
	this.getInformation = getFruitInformation;
}
function getFruitInformation(){
	return 'This '+this.type+' is '+this.color+'.';
}
console.log("function class");
var frut = new fruit('lima');
console.log(frut.getInformation());
frut.color = "green";
console.log(frut.getInformation());

//The Prototype Property
/*
We can think of a function's prototype as an object blueprint or 
paradigm; when we add methods and properties to the prototype,
*/
console.log("\n\nWith Property");
fruit.prototype.getInformation = function(){
	return 'This '+this.type+' is '+this.color+'.';
}
var frut = new fruit('lima');
console.log(frut.getInformation());
frut.color = "green";
console.log(frut.getInformation());


//Using Object Literals
/*We can use object literals to define an object's properties and 
functions*/
let objectLiteral={
	type:'Ecuador',
	color:"green",
	getInformation:function(){
		return 'This '+this.type+' is '+this.color+'.';
	}
};
console.log("\n\nWith Object");
console.log(objectLiteral.getInformation());
objectLiteral.color = "green";
console.log(objectLiteral.getInformation());


//SINGLETON CLASS USING A FUNCTION
/*A singleton class is a design pattern that restricts a class to 
a single instance.
   1. We define an anonymous constructor function.
   2. We invoke the anonymous constructor function with the new keyword.
*/


let singleton = new function(){
	this.name = "Roger";
	this.years = 0;
	this.getInformation = function(){
		return 'Hi '+this.name+' of '+this.years+'.';
	};
};
console.log("\n\nsingleton");
console.log(singleton.getInformation());
singleton.years = 23;
console.log(singleton.getInformation());



//CLASSES
/*JavaScript classes, introduced in ECMAScript 6
We define classes in two ways:*/
	//Class Declarations
	/* we use the class keyword and follow it with the class' name. Ideally, we 
	always write class names in TitleCase.*/
console.log("\n\nClass declarations");
try{
	let square = new Declarations(1,2);
	console.log('square: ',square);
}
catch(exception){
	console.log(exception.name+':'+exception.message);

}
class Declarations {
	constructor(height, width){
		this.height = height;
		this.width = width;
	}
}
let square = new Declarations(1,2);
console.log('square: ',square);
	/*An important difference between function declarations and class 
	declarations is that function declarations are hoisted (i.e., can be 
	referenced before they're declared) but class declarations are not.*/

	
	//Class Expressions
	/*Class expressions are another way to define a class, and they can be 
	either named or unnamed. */
	console.log("\n\nClass Expressions");
	let circle = class{
		constructor(circumference,radius){
			this.circumference = circumference;
			this.radius = radius;
		};
	};
	console.log('circle: ',circle);


//THE CONSTRUCTOR METHOD
/*
	- We use to create and initialize objects of a class. 
	- Only have one special method with the name constructor.
	- To implement inheritance, we can use the super keyword in a 
	  constructor to call a parent class constructor.
*/

//PROTOTYPE METHODS
console.log("\n\nPrototype method");
class Student{
	constructor(name, learn){
		this.name = name;
		this.learn = learn;
	}
	getNameLearn(){
		return this.name+' - '+this.learn;
	}
}

let studen = new Student("Roger","Python");
console.log(studen.getNameLearn());



//STATIC METHODS
/*
These methods receive information from their arguments and not a class instance
We define a class' static methods using the "static" keyword
*/

class Pitagoras{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	static distance(a,b){
		const dx = b.x - a.x;
		const dy = b.y - a.y;
		return Math.sqrt(dx*dx + dy*dy);
	}
}

console.log("\n\nSTATIC METHODS");
let p1 = new Pitagoras(5,5);
let p2 = new Pitagoras(10,10);
console.log(Pitagoras.distance(p1,p2));


//INHERITANCE
/*A class inheriting from some other class (referred to as a superclass or 
parent class) is called a subclass (or child class). The subclass inherits the
superclass' methods and behaviors, but it can also declare new ones or even 
override existing ones.*/
//VIEW https://www.hackerrank.com/topics/java-inheritance



//"SUBCLASSING WITH THE extends KEYWORD"
/*We use the extends keyword in class declarations or class expressions to 
create a child class (i.e., subclass).*/
console.log("\n\nExtends keyword");
class Animal{
	constructor(name){
		this.name = name;
	}
	speak(){
		return "This "+this.name+" speak.";
	}
}

class Dog extends Animal{
	speak(){
		return "This "+this.name+" barks.";
	}
}
let something = new Animal("cat");
console.log(something.speak());

something = new Dog("dog");
console.log(something.speak());


/*We can also extend functional classes:*/
console.log("\nExtends keyword with function");
	function Animals(name){
		this.name = name;
	};

	Animals.prototype.tell = function(){
		return this.name+" barks.";
	};

class Owl extends Animals{
	tell(){
		return this.name+" whistle.";
	}
}

let wild = new Animals("dog");
console.log(wild.tell());
wild = new Owl("owl");
console.log(wild.tell());

//SUPERCLASS CALLS USING THE "super" KEYWORD
/*We use the super keyword to call functions on an object's parent.*/
class Car{
	constructor(marca){
		this.marca = marca;
	}
	make(){
		console.log("The marca of the car is: "+this.marca);
	}
}
class ChangeMarca extends Car{
	make(){
		super.make();
		console.log("The new marca is: "+this.marca);
	}
}

let bmw = new ChangeMarca("BMW");
console.log(bmw.make());


//EXTENDING AN OBJECT
/*The ability to extend multiple classes from the same superclass
it provides extensions of the parent class, subclasses are guaranteed to 
(at minimum) have the superclass' fields, methods, and functions.
*/

/*In this example, we call the superclass constructor using super(), override a 
superclass function (speak()), add an additional property (collarColor), and 
add a new subclass method (collar()).*/
	//patter
class Library{
	constructor(book){
		this.book= book;
		this.bookType = "Fantasy";
	}
	type(){
		return "The book "+this.book+" is the type "+this.bookType;
	}
	page(){
		return "The book "+this.book+" has 100 pages";
	}
}
	//child
class Book extends Library{
	constructor(book, author){
		super(book);
	}
	authorBy(){
		return "The book"+this.book+" was writen "+this.author;
	}
}

let newBook = new Book("It","Steven King");
console.log(newBook.type());
console.log(newBook.page());
console.log(newBook.authorBy());



