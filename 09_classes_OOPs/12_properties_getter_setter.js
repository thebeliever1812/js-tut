function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },

    set: function (value) {
      this._password = value;
    },
  });
}

const user1 = new User('basir@gmail', 'xyz')

console.log(user1.password)