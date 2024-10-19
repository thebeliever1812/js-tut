/*** for of loop */

// On array
// const arr = [11, 22, 33, 44, 55, 66];

// for (const element of arr) {
//   console.log(element);
// }

// On string
// const str = "Hello World!";
// for (const element of str) {
//   console.log(element);
// }

/*** Maps */

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");

// console.log(map);

// for-of loop on Map
for (const key of map) {
  // console.log(key); // isse array m output display hoga
}

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

// for-of loop on objects // Gives error : not iterable
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
