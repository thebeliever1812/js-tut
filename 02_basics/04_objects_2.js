const tinderUser = new Object(); // Singleton Object // create by constructor

tinderUser.name = "Basir";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = true;

const regularUser = {
  // Non-singleton object
  email: "xyz@gmail.com",
  name: {
    userFullName: {
      // Nesting of objects is possible
      firstName: "Basir",
      lastName: "Ahmad",
    },
  },
};

// console.log(regularUser.name.userFullName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = { obj1, obj2 };            // Wrong way to combine 2 or more objects

// const obj3 = Object.assign({}, obj1, obj2);     // combines object... (target, source, source)... returns target object...  if donot want to change target object add empty object as target object...  ***Less used method

const obj3 = { ...obj1, ...obj2 }; // 90% of the time we will use this
// console.log(obj3);

// array of objects

const users = [
  { id: "123", email: "a@gmail.com" },
  { id: "123", email: "a@gmail.com" },
  { id: "123", email: "a@gmail.com" },
  { id: "123", email: "a@gmail.com" },
];

// console.log(users[1].email);         // how can i access

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));        // ***IMP: it gives output in the form of array so we can apply loops etc for array

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));    // it gives result in array into array

// console.log(tinderUser.hasOwnProperty('isLogged'));    // To check the property is present or not

const course = {
  courseName: "JavaScript",
  price: 1000,
  courseInstructor: "Basir",
};

// object destructure

// console.log(course.courseInstructor);       // If you want to access the same property multiple times then you definitely dont write it again and again instead...

// const {courseInstructor} = course       // Instead this is a better option
// console.log(courseInstructor);

const {courseInstructor: instructor} = course      // You can change the name of any property by using this method

// console.log(instructor)

// {
//   name: "Vikram Aditya",
//   age: 89,                   /** api in json format looks like this we will study this further in another class */
//   profession: "MMA"
// }

// [
//   {},
//   {},                    // api in array format
//   {}
// ]