let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.map((val) => {
//   return val + 10;
// });

// console.log(newNum);

const newNum = myNums
  .map((val) => val * 10)
  .map((val) => val + 1) // map chaining
  .filter((val) => val >= 40);

console.log(newNum);
