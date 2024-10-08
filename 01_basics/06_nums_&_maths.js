const score = 400
// console.log(score);

const balance = new Number(100) // If you want to create a number specifically 
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(3)); // Number of digtis after a decimal

const otherNumber = 123.897433

// console.log(otherNumber.toPrecision(4)); // Total digit will be 4, give precise value
// console.log(otherNumber.toPrecision(2)); // Number has 3 digits before decimal but precision number is 2, so it will give a exponential output

const hundreds = 1000000000000
// console.log(hundreds.toLocaleString('en-IN')); // this will convert it in indian standard form eg. 10,000

/************************ Maths */

// console.log(Math);
// console.log(Math.abs(-1));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 1, 3, 9, 2));
// console.log(Math.max(4, 1, 3, 9, 2));

// console.log(Math.random());
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
