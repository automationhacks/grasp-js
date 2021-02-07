/**
 * Definition: Closure is when a function "remembers" its lexical scope even when the 
 * function is executed outside its lexical scope.
 */

 // Example 1
 // Illustrates passing an inner function as a callback to another function

 function foo() {
     var bar = "bar";

     function baz() {
         console.log(bar);
     }

     bam(baz);
 }

 function bam(baz) {
     // Observe baz has access to bar variable even though it is outside its scope
     baz(); // "bar"
 }

 foo();

 // Example 2
 // Illustrates returning the inner function and executing outside its scope

 function foo() {
     var bar = "bar";

     return function() {
         console.log(bar);
     };
 }

 function bam() {
     foo()(); // "bar", here foo() gets handle to anonymous function and then calls it
              // which calls it outside its scope, hence called a closure.
 }

 bam();

 // Example 3

 function foo() {
     var bar = "bar";

     setTimeout(function () { console.log(bar); }, 1000); // "bar" after a delay of 1000 ms
 }

 foo();

 // Example 4
 // Illustrates closures can be easily nested and still have access to variable
 // even though called in different location

 function foo() {
     var bar = 0;

     setTimeout(function() { 
         var baz = 1;
         console.log(bar++);

         setTimeout(function() {
             console.log(bar + baz);
         }, 200);
        }, 100);
 }

 foo(); 

 // Output
 // 0
 // 2