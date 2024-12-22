class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase()
  }

  set password(value) {
    this._password = value
  }
}

const obj1 = new User('email@g,com', 'abcd')

console.log(obj1.password)