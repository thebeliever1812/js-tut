/*** for-in loop */
const myObj = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
};

for (const key in myObj) {
  //   console.log(key, ":-", myObj[key]); // To print key and value
}

// for-in loop in array

const myArr = ["js", "cpp", "py", "rb"];

for (const key in myArr) {
//   console.log(key, ":-", myArr[key]); // key are the numbers in array // to print key and value
}

// for-in loop on maps: doesnt work no output

// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("UK", "United Kingdom");

// for (const key in map) {
//     console.log(key);
// }