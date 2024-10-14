// var c = 300
let a = 100;
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30; // it has scope inside and outside the loop, so it is not prefer to use "var" to declare any variable
  //   console.log("Inner value of a: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c); // We have two values for c 300 and 30 it will print 30 which is inside the "if"

/******* Hoisting */

console.log(addone(5)); // Accessing function before its declaration is known as Hoisting

function addone(num) {
  return num + 1;
}

addTwo(5);

// another way of function declaration
const addTwo = function (num) {
  return num + 2;
};
