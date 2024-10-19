/*** for-each loop */

const lang = ["java", "cpp", "python", "ruby"];

// 1st method:

// lang.forEach(function (val) {
//   console.log(val);
// });

// 2nd method:

// lang.forEach(val => {
//   console.log(val);
// });

// 3rd method:

// function printMe(item) {
//   console.log(item);
// }

// lang.forEach(printMe);

// lang.forEach((val, index, arr) => {
//   console.log(val, index, arr); // various parameters come along with value
// });

// for-each loop on Array having object

// const myCoding = [
//   {
//     languageName: "Javascript",
//     languageFileName: "js",
//   },
//   {
//     languageName: "Javascript",
//     languageFileName: "js",
//   },
//   {
//     languageName: "Javascript",
//     languageFileName: "js",
//   },
// ];

// myCoding.forEach(item => {
//     console.log(item.languageName);
// })