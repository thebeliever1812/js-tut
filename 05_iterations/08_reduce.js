const myNums = [1, 2, 3];

// const total = myNums.reduce(function (acc, currVal) {
//   return acc + currVal;
// }, 0);

// const total = myNums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

console.log(priceToPay);
