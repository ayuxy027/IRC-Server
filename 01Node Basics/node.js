// We are learning require and export in module 1

const { sum , sub, math  } = require('./math'); // Destructuring the sum function from math module

console.log("Sum is ", sum(3, 57)); // Accessing sum function directly after destructuring
console.log("Subtraction is ", sub(57, 3)); // Accessing sub function directly after destructuring
// console.log("Math Value is ", math.sub(2,1))