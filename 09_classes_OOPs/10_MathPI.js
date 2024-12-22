// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

const myObj = {
  name: "Basir",
  age: 23,
  isAvailable: true,
  myFunction: function () {
    console.log("dont print this part");
  },
};

// console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

Object.defineProperty(myObj, 'name', {
    writable: true,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

for (const [key, value] of Object.entries(myObj)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
