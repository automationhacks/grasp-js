/**
 * assume you have below code:
 * var foo = "Hello world";
 * 
 * var foo = "Hello india"; -- accidently put in by a developer
 * 
 * console.log(foo); -- Hello india -- oops
 * 
 * 
 * To solve this, we can put a function around the variable foo in the middle
 * to contain its scope, and this is called function scoping
 */

var foo = "Hello world";


function bar() {
    var foo = "Hello india";
    console.log(foo);
}

bar();

console.log(foo); // Hello world

/**
 * Above code results in still polluting the scope with another identifier which 
 * can be again redeclared, thus to solve this we can use a pattern called IIFE (Immidiately invoked
 * function expression)
 */

// IIFE example

var foo = "bar";

(function bar() {
    var foo = "baz";
    console.log(foo);
})(); // this does not pollute the outer enclosing scope, since this is now a 
// function expression

console.log(foo);