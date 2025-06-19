console.log("Hello hihi");
let a = 5;
let b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
console.log("Fifteen is " + a + b + " and\nnot " + (2 * a + b) + ".");

console.log(`Check String part 1: a = ${a}`);
console.log(`Check String part 2: a = ${a} ,b = ${b} a+b= ${a + b}`);

// var chỉ sử dụng trong hàm
var x = 10;
console.log(x);

function myFunction() {
  var y = 20;
  console.log(y);
}
myFunction();
// test console.log(y);
// bị lỗi: console.log(`kiem tra console.log(y) = ${y}`);
