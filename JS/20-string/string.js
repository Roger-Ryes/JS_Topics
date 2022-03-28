//ref: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/topics
String.charAt() //Ingresar index .charAt(1)
String.concat() //Concatena
String.includes() //Verifica si incluye alguna palabra .includes("Hola")
String.endsWith() //Returns a boolean denoting whether the calling string ends 
String.indexOf() //Returns an integer denoting the index within the calling String object
String.lastIndexOf() //Returns an integer denoting the index within the calling String object of the last occurrence of the given argumen
String.match() //Match a regular expression passed as an argument against the calling string.
String.normalize()
/*
  Returns a string containing the Unicode Normalization Form of the calling string's value. 
    The argument must be one of the following:
    "NFC": Normalization Form Canonical Composition. This is the default in the event that no argument is given.
    "NFD": Normalization Form Canonical Decomposition.
    "NFKC": Normalization Form Compatibility Composition.
    "NFKD": Normalization Form Compatibility Decomposition.
*/
String.repeat() //Returns a string consisting of the elements of the calling String object repeated some number of times
String.replace() //(reemplaza)Finds a match between a regular expression and a string
String.search() //Executes the search for a match between a regular expression and a specified string,
String.slice() // Extracts a section of a string and returns it as a new string. 
String.split() // Splits a String object into an array of strings by separating the string into substrings
String.startsWith() // Returns a boolean denoting whether a string begins with the characters of another string passed as an argument.
String.substr() // Returns a substring consisting of characters in a given range, depending on the arguments passed to the function
/*
f one integer argument, "i", is passed to the function, it returns a substring starting at index "i" and ending at the end of the string. 
*/
String.substring() // Returns a substring consisting of characters in a given range, depending on the arguments passed to the function
/*
 If one integer argument, "i", is passed to the function, it returns a substring starting at index "i" and ending at the end of the string. 
*/
String.toLowerCase()
String.toUpperCase()
String.trim() // Returns the string with the whitespace trimmed from its beginning and end.
String.trimLeft() // Returns the string with the whitespace trimmed from its left side. 
String.trimRight() // Returns the string with the whitespace trimmed from its right side.


//Error Handling
/*
    There are three types of errors in programming:
    1. Syntax Error (Parsing Error)
        this type of error occurs at compile time; because JavaScript is an 
        interpreted language, this type of error arises when the code is 
        interpreted.
        example: 
            console.log("Hello" 
        This produces the following error: SyntaxError: missing )

    2. Runtime Error (Exception)
        This type of error occurs during execution (i.e., after compilation or 
        interpretation). Once a runtime error is encountered, an exception is 
        thrown in the hope that it will be caught by a subsequent section of 
        code containing instructions on how to recover from the error. 
        For example:
            function sum(a, b) {}
            add(2, 3)

        This produces the following error: ReferenceError: add is not defined. 
        This is because we attempted to call the add function without ever 
        declaring and defining it.     

    3. Logical Error
        These are some of the most difficult errors to isolate because they 
        cause the program to operate without terminating or crashing, but the 
        operations the code performs are not correct. 
        These errors occur when there is a mistake in your the code's logic. 
        
        Tip:  When trying to isolate logical errors in code, it's often helpful 
        to print the contents of your variables to stderr (standard error) at 
        various stages in the logic using "console.warn()" or "console.error()"
*/

//Try, Catch, and Finally
/*
    The try block is the first step in error handling and is used for any block 
    of code.
    In other words, the try statement has three forms:
        - try-catch
        - try-finally
        - try-catch-finally
    The catch block immediately follows the try block and is executed only if an 
    exception is thrown when executing the code within the try block.
    The finally block is optional. It executes after the try and catch blocks, 
    but before any subsequent statements following these blocks. 
    The finally block always executes, regardless of whether or not an exception 
    was thrown or caught.

    example:
    try {
        console.log(getElement(arr, 4));
    } 
    catch (e) { //catch block that catches the exception and prints the message 
        console.log(e.message);
    }
    finally {
        console.log("Finally Block");
    }
    console.log("The program continued executing!");

*/


//Throw
/*
    We use the throw statement, denoted by the throw keyword, to throw an 
    exception. There are two ways to do this, shown below.
    1. throw value
        We can throw an exception by following the keyword throw with some that 
        we wish to use for the exception being thrown. 
*/
function throwString() {
    // Generate an exception with a String value
    throw "some exception";
}

function throwFalse() {
    // Generate an exception with a boolean value of false
    throw false;
}

function throwNumber() {
    // Generate an exception with a Number value of -1
    throw -1;
}

try {
    throwString();
}
catch (e) {
    console.log(e);
}

try {
    throwFalse();
}
catch (e) {
    console.log(e);
}

try {
    throwNumber();
}
catch (e) {
    console.log(e);
}
/*
    2. throw new Error(customError)
        We can throw an exception by following the keyword "throw" with 
        "new Error(customError)", where "customError" is the value we want for 
        the "message" property of the exception being thrown. 
*/
function throwMyError() {
    // Generate an exception with a value read from stdin
    throw new Error(input);
}

function main() {
    try {
        throwMyError();
    }
    catch (e) {
        console.log(e.message);
    }
}

