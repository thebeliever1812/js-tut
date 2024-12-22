class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const user1 = new Teacher("Basir", "abc@gmail.com", "123");

user1.addCourse();

const user2 = new User('Ahmad')

user2.logMe()
user1.logMe()

console.log(user2 instanceof Teacher)