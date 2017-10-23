var foo = "bar";

function bar() {
    var foo = "baz";
    function baz(foo) {
        foo = "bam";
        bam = "yay";
    }
    baz();
}

bar(); 
foo; // bar
bam; // yay
baz(); // ReferenceError: baz is not defined