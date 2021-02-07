// Objects literals 
const cookie = {
    "name": "Chocolate Chip",
    "isGlutenFree": false,
    "+Yummy": true,
    // We can add function to an object literal
    eatCookie: function() {
        console.log("I am eating " + this.name)
    }
};

// Can access keys directly with property name
console.log(cookie)
console.log(cookie.name)
// Can run the function
console.log(cookie.eatCookie())

// Another way to access
console.log(cookie["+Yummy"])

// Below is an invalid syntax for . operator
// Uncaught SyntaxError: Unexpected token '+' 
// console.log(cookie.+Yummy)

// Can also update the value in the property
cookie.isGlutenFree = true
console.log(cookie)

// classes
// introduced in ECMAScript 2015
class Cookie {
    constructor(name, isGlutenFree) {
        // properties
        this.name = name
        this.isGlutenFree = isGlutenFree
    }

    // You don't need function keyword when you define a function
    // inside a class
    eatCookie() {
        console.log("I am eating: Yo! " + this.name)
    }
}

const myCookie = new Cookie("Chocolate chip", false)
console.log(myCookie)
console.log(myCookie.name)

myCookie.isGlutenFree = true
console.log(myCookie.isGlutenFree)
myCookie.eatCookie()