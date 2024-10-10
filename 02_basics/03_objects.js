// singleton
// Object.create

// Object Literals

const mySym = Symbol("Key1");

const JSuser = {
  name: "Basir", // all key are considered as string eg name, email
  [mySym]: "myKey1", // Imp syntax for symbol... imp for interview
  age: 22,
  location: "Delhi",
  email: "basirahmadmalik@gmail.com",
  isLoggedIn: false,
  loggedInDays: ["Saturday", "Sunday"],
};

// console.log(JSuser.name); // Not a good practice

// console.log(JSuser["name"]);
// console.log(typeof JSuser["age"]);
// console.log(typeof JSuser["loggedInDays"]);
// console.log(typeof JSuser[mySym]);

JSuser.email = "ahmadji.com";

// console.log(JSuser["email"]);

// Object.freeze(JSuser) // Use freeze when you donot want to change the object details

// Further changes will not applied in JSuser object bcz freezed the object

JSuser.email = "malik@gmail.com";

// console.log(JSuser);

// creating function

JSuser.greeting = function () {
  console.log("Hey JS user");
};

JSuser.greeting() // Function call

JSuser.greetingTwo = function() {
    console.log(`Hey JS user ${this.name}`); // Accessing object properties by "this"
}

JSuser.greetingTwo()
