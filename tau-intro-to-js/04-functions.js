// Normal functions
function sum(a, b) {
    return a + b
}

// Another function
function mul(a, b) {
    return a * b
}

// callbacks: function that can be used as input to another function
// If you want some behavior to happen after a function is executed

// Here the input function is the anonymous function (function without a name) 
// also called callback function
setTimeout(function () {
    console.log("Ollaaa")
}, 5000)

// Arrow function
// If you have more than 1 line of code, then you can drop the curly braces or 
// explicit return keyword
setTimeout(() => console.log("Uses arrow function"), 5000)

// Execution
function main() {
    console.log(sum(10, 10))
    console.log(mul(5, 3))
}

main()
