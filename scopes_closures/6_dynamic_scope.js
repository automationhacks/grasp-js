/**
 * theoretical dynamic scoping, below code will evaluate to a reference error 
 * for bar
 */
function foo() {
    console.log(bar); // dynamic scoping
}

function baz() {
    var bar = "bar";
    foo();
}

baz();