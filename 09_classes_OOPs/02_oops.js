const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

//   return this;
}

const userOne = new User("hitesh", 12, true); // Every time it will give a new instance without the new keyword it will override the properties 

const userTwo = new User("ChaiAurCode", 11, false);
// console.log(userOne);
//console.log(userTwo);

console.log(userOne.constructor); // it is a refrence to its own function which is User here
