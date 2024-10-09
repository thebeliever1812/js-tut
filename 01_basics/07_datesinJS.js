let myDate = new Date()

// console.log(myDate);
// console.log(typeof(myDate)); // Object type

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2024, 9, 15) // (YYYY, MM, DD) -> MM starts from 0, means January
// let myCreatedDate = new Date(2024, 9, 15, 11, 45, 56) // (YYYY, MM, DD, Hr, Min, Sec)
// let myCreatedDate = new Date("2024-9-15") // ("YYYY-MM-DD") we didn't use this method in india
let myCreatedDate = new Date("9-15-2024") // ("MM-DD-YYYY") used in india, -> MM starts from 1 means Jan

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // It will give time for instance since Jan 1, 1970
// console.log(myCreatedDate.getTime()); // It will give time in millisec since Jan 1, 1970
// console.log(Math.floor(myTimeStamp/1000)); // Dividing by 1000 gives the result in Secs

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth()); // It will give the month but remember month starts from 0 here
// console.log(newDate.getDay()); // Day starts from monday with value 1

// Note: 
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString('default', {weekday: "long"})); // We can make customization
