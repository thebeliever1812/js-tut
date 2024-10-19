// const userEmail = "basir@gmail.com";

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

/*** falsy values */
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/*** truthy values */
// "0", 'false', " ", [], {}, function(){}

// const myObj = {};

// if (Object.values(myObj).length === 0) {
//     console.log("Object is empty");
// }

/*** Nullish Coalescing Operator (??): null undefined */

let val1;
// val1 = 5 ?? 10 // Output: 5 
// val1 = null ?? 10 // Output: 10 // agr koi value nhi milti to null output ata but yha value 10 available h
// val1 = undefined ?? 15 // Output: 15
val1 = null ?? 10 ?? 20; // Output: 10

/*** Terniary Operator */

// condition check ? true statement : false statement

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
