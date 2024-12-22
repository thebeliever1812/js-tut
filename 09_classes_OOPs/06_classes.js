class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("Basir", "abc@gmail.com", "123");

console.log(user1.encryptPassword());
console.log(user1.changeUsername());

//************** */ Behind the scene (if we donot use class keyword)

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const user1 = new User("Basir", "abc@gmail.com", "123");

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());