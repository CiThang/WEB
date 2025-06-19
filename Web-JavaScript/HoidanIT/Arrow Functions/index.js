console.log("Hello world");

// Function  bình thường
// function sum(a, b) {
//   return a + b;
// }

// Arrow(=>) Function
let sum = (a, b) => {
  return a + b;
};

console.log("Check arrow function : ", sum(3, 1));

let multipy = function (a, b) {
  return a * b;
};
console.log(multipy(5, 4));

let multipyArrow = (a, b) => a * b;
console.log(multipyArrow(5, 4));
