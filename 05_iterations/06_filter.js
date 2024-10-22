// const lang = ["java", "cpp", "python", "ruby"];

// const values = lang.forEach((item) => {
// //   console.log(item);
// //   return item
// });

// console.log(values); // for-each kuch value return nhi krta isliy output undefined aega

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = num.filter((val) => val < 5);

// console.log(newNums);

// if we use curly braces then we have to use the return ketword in filter
const newNums = num.filter((val) => {
  return val < 7; 
});

console.log(newNums);
