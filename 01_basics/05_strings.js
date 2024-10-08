const name = "Basir Ahmad"

const repoCount = 1

// console.log(name + ", " + repoCount + " is my repo count");

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // creates substring from start to end-1 index (start index, end index)
// console.log(newString);

const anotherString = gameName.slice(-8, 4) // Same as substring but we can add -ve values too in it
// console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // It removes the white spaces

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) 

console.log(url.includes('sundar')) // it finds the substring whether it is present or not in the main string

console.log(gameName.split('-',2)); // it creates array and split elements on the basis of separator (separator, limit)