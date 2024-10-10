const marvel = ["thor", "Cap", "Hulk"];
const dc = ["flash", "Batman", "Superman"];

// marvel.push(dc)

// console.log(marvel);

// const allHeroes = marvel.concat(dc) // Concatinates two array and return a new array

// console.log(allHeroes);

// const allNewHeroes = [...marvel, ...dc] // Spread method.... another method to concatinate 2 or more arrays

// console.log(allNewHeroes);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [[8, 9], 10], 11];

// const new_anotherArray = anotherArray.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it... (depth)
// console.log(new_anotherArray);

console.log(Array.isArray("Basir"));
console.log(Array.from("Basir")); // Converts into array 
console.log(Array.from({name: "Basir"})); // Interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Creates array
