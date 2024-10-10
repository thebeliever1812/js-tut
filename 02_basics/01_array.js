const arr = [1, 2, 3, 4, 5, 6];
const arr2 = new Array(10, 20, 50, 100);
// console.log(arr[5]);
// console.log(arr2[3]);

// arr.push(3) // insert at last position
// arr.push(31)
// arr.pop() // Remove from last position

// arr.unshift(10) // Insert at beginning
// arr.shift() // Remove from beginning

// console.log(arr.includes(5));
// console.log(arr.indexOf(5));

// const myArr = arr2.join() // Join fnc add all the elements of array in a string

// console.log(arr);
// console.log(myArr);

/** Slice and Splice */

console.log("A ", arr);

const myNewArr1 = arr.slice(1, 3); // It returns copy of section of array from start to end-1 index... (start index, end index)

console.log(myNewArr1);
console.log("B ", arr);

const myNewArr2 = arr.splice(-3, 3); // It removes the element from start to number of delete count and returns deleted elements... (start index, delete count) // can have -ve index

console.log(myNewArr2);
console.log("c ", arr);
