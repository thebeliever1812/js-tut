const user = {
  username: "Basir",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to this website.`);
    // console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "Ahmad"
// user.welcomeMessage()

// console.log(this); //****** This will give an empty object but if you will run this in browser then it will not give you an empty object

// function chai() {
//   // console.log(this);
//   let username = "KYC"
//   // console.log(this.username); // this will give undefined output
// }

// chai()

// const chai = function () {
//   let username = "KYC";
//   console.log(this.username);
// };

// chai()

/****** Arrow function */

// const chai = () => {
//   let username = "Basir"
//   console.log(this);      // this will give empty object in output /////// Imp for interview

// }

// chai()

//*** explicit return function: we use return keyword in this function
// const arrowFunction = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(arrowFunction(3, 4));

/***** Implicit return fnc: in this we donot use return keyword to return values we use parenthesis */
// const arrowFunction = (num1, num2) => (num1 + num2)

const arrowFunction = (num1, num2) => ({username: "Malik"}) /// We can return object in this form

console.log(arrowFunction(3, 4));