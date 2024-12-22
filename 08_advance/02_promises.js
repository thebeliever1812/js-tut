// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an assyn task
//   // DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Assyn task completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise is consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Assync Task 2 completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Assyn 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Basir Ahmad", email: "basirahmadmalk@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const error = true;
//     if (!error) {
//       resolve({ username: "Danish", age: 23 });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.username; // this will return to the next .then
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     //catch is required to run the reject part
//     console.log(error);
//   })
//   .finally(() => console.log("Either resolved or rejected")); // this will run in every case

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const error = true;
//     if (!error) {
//       resolve({ username: "Javascript", password: "ABCD" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// // async function consumePromiseFive() {
// //     const response = await promiseFive
// //     console.log(response)
// // } // you will get an error when reject is executed above

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error)
//   }
// }

// consumePromiseFive();

// ******************************************************************** //

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/thebeliever1812")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
