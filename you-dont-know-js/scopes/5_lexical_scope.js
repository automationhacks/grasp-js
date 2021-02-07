function foo() {
    var bar = "bar";

    function baz() {
        console.log(bar); // lexical scope
    }

    baz();
}
foo(); 