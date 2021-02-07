/*
Copy the code snippets below and run them in chrome console or in an command line
execution environment like node.js
*/

a = 2; // assignment operator
2(); // example of an error, will return TypeError: 2 is not a function

// Basic input and output
var age = prompt("What is your age?");
console.log("age");

alert("Hello world");
console.log("Hello world");

// Operators 

var a = 0;
a = a + 2;
a += 2;

a == 2; // loose equals
a === 2; // strict equals

if (a === 4) {
    console.log("a equals 4");
}

// Value types
42 / 2; // 12
"42"[0]; // "4"

var a = 42;
console.log(a);

var a = "42";
console.log(a);

// Conversion vs coercion

// Explicit conversions

var a = 21;
a = String(a);
console.log(a);

// above will output 21 as black (indicating string)

var a = 42;
a = String(a);
b = Number(a);
console.log(b);

// Implicit conversions

var a = 42;
b = a + "";
console.log(b);

// How to declare constant in JS (In ES6)
const b = 21;
b = 10; // will throw TypeError: Assignment to constant variable.

// Code comments

// Single line comment can be given like this
var director = "Christopher Nolan";

/* Multiline comments
Hey why don't you write something,
longer about the same
*/

var fav_movie = "The dark knight";
var fav_director = "Christopher nolan";