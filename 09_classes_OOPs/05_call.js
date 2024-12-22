function setUserName(username) {
  this.username = username;
  // console.log("called")
}

function createUser(username, email, age) {
  setUserName.call(this, username);
  this.email = email;
  this.age = age;
}

const user1 = new createUser("Basir", "basirahmadmalik@gmail.com", 23);

console.log(user1);

// Notes:
// if we dont use .call (line number 7) then function will call but there is some issue
// it will will add in call stack and 'this' will set the username but when we get out of the function it will remove from the stack and its context also remove so the value will not remain in the username and no username is set
// to fix this problem 
// we use .call and pass our own 'this' means our own context that will remain when the function is removed from the stack
