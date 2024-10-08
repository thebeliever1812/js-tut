const score = 400
// console.log(score);

const balance = new Number(100) // If you want to create a number specifically 
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(3)); // Number of digtis after a decimal

const otherNumber = 123.897433

console.log(otherNumber.toPrecision(4)); // Total digit will be 4, give precise value
console.log(otherNumber.toPrecision(2)); // Number has 3 digits before decimal but precision number is 2, so it will give a exponential output

