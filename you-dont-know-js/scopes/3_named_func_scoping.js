/*
Illustrates named expression will not be 
available in the global scope compared to a 
formal function declaration
*/

var foo = function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = bar; // reference to the function
        foo;
    }

    baz();
};

foo();
bar(); // Uncaught ReferenceError: bar is not defined