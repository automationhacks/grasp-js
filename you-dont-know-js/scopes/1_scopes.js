/*
Example for global and function scope of variables
*/
// "use strict";

var foo = "bar";

function bar() {
    var foo = "baz";
}

function baz(foo) {
    foo = "bam";
    // during execution, JS engine will create variable called bam in global scope.
    // however if strict mode is enabled by putting "use strict"; at line 1 or function scope
    // JS engine would throw <ReferenceError: bam is not defined> for below line:
    bam = "yay"; 
}