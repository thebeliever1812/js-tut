// const lang = ["java", "cpp", "python", "ruby"];

// const values = lang.forEach((item) => {
// //   console.log(item);
// //   return item
// });

// console.log(values); // for-each kuch value return nhi krta isliy output undefined aega

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = num.filter((val) => val < 5); // no return keywod is required in this case bcz we did not used curly braces here

// console.log(newNums);

// if we use curly braces then we have to use the return ketword in filter
// const newNums = num.filter((val) => {
//   return val < 7;
// });

// console.log(newNums);

// Same thing done by using for-each loop
// const mynum = [];

// num.forEach((val) => {
//   if (val < 6) {
//     mynum.push(val);
//   }
// });

// console.log(mynum);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let user = books.filter((bk) => bk.genre === "History");

// user = books.filter((books) => {
//   return books.publish >= 1995 && books.genre === "History";
// });

// console.log(user);
