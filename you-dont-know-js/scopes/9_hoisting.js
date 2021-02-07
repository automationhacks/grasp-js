// Example of hoisting
a; // undefined
b; // undefined
var a = b;
var b = 2;
b; // 2
a; // undefined

/** Above actually behaves like below
 * var a;
 * var b;
 * a;
 * b;
 * a = b;
 * b = 2;
 * b;
 * a;
 */


 /**
  * variable declarations can be hoisted but actual assignment would not,
  i.e. d = function() { return b();} would not be hoisted resulting in a TypeError
  on var c = d(); line

  Thus function declaration would be advantageous over function expression,
  since they can be hoisted.
  */

 var a = b();
 var c = d(); // TypeError: d is not a function

 a;
 c;

 function b() {
     return c;
 }

 var d = function() {
     return b();
 }

 // another example - mutual recursion, one func calling other func in a 
 // recursive manner

a(1);

 function a() {
     if (foo > 20) return foo;
     return b(foo + 2);
 }

 function b(foo) { 
     return c(foo) + 1
 }

 function c(foo) {
     return a(foo * 2);
 }


 // Ex to show let does hoist (adds in enclosing scope) but does not get initialized 
 
 function foo(bar) {
    if (bar) {
        console.log(baz); // throws Reference error
        let baz = bar;
    }
 }

 foo("bar");