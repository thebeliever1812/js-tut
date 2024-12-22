// let myName = "hitesh     ";
// let mychannel = "chai     ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let str = "Something";

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Basir = function () {
  console.log(`Basir is present in all objects`);
};

// heroPower.Basir()
// myHeros.Basir()
// str.Basir()

Array.prototype.Ahmad = function () {
  console.log(`Ahmad says Hello`);
};

// myHeros.Ahmad()
// heroPower.Ahmad()
// str.Ahmad()

// ***********************************************//
//Inheritence

const user = {
    name: "Basir",
    age: 23
}

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS  Assignment",
  fullTime: true,
  __proto__: teachingSupport
};

teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher)

// ************//

let anotherUserName = "Ahmad"

String.prototype.trueLength = function() {
    console.log(this)
    console.log(`True Length of the string is ${this.trim().length}`)
}

anotherUserName.trueLength()

"basir".trueLength()

"Malik       ".trueLength()