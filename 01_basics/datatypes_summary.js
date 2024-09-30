/** Primitive */

// 7 types: Number, String, Boolean, Symbol, null, undefined, BigInt

// const score = 100
// const scoreValue = 100.5
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const newId = Symbol('123')

// const bigNum = 143534567n

// console.log(id === newId);

/*** Reference (Non-primitive) */

// array, objects, functions

// const myhero =["Captain America", "Thor", "Iron Man"] // array

// const myObj = {name: "Basir", age: 22, gender: "male"} // Objects

// const myfunction = function() {
//     console.log("Hello World");
// }

// console.log(typeof myhero); // object
// console.log(typeof myObj); // object
// console.log(typeof myfunction); // type -> Function... but we usaslly say object function

/******* Stack memory (Primitive) & Heap memory (Non-primitive ) */

/** Example of stack */

// let person1 = "Basir"
// let person2 = person1

// person2 = "Virat"

// console.log(person1);
// console.log(person2);

/** Example of Heap */

let userOne = {
    email: "userone@gmail.com",
    age: 22
}

let userTwo = userOne

userTwo.email = "usertwo@gmail.com"
userTwo.age = 33
console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.age);
console.log(typeof(userOne));