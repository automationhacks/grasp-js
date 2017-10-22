// Variable types

var a; // function scope
let b; // block scope
const c;
function d() {}

// blocks: Group of statements in one logical unit

{
    var a;
    foo (a / 10);
}

// Generally blocks would be used with either if else or loops or functions

// conditional

var a = 20;

if (a > 10) {
    console.log("a is > 10");
    a /= 2
}

console.log(a);

// List of falsy values in JS
/*
false
null
""
NaN
undefined
0
-0
*/

// while loop
var b = 10;

while (b > 0) {
    console.log(b);
    b -= 2;
}

// function

function HelloWorld() {
    console.log("Hello World!");
    console.log("This is JS");
}

HelloWorld();

// different ways of specifying functions

function foo() { } // function declarations

// below are function expressions attached to variable declarations
var bar = function() { }
var baz = function baz() { }