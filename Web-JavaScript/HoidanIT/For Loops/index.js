console.log("met qua di thoiiii");

// for (let i = 1; i <= 10; i++) {
//   console.log("Dòng thứ ", i);
// }

// let arr = ["MU", "ManCity", "Real", "Barca"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(`Check value i: ${i}`); => error

// Phạm vi của biến var và let khác nhau
let arr = ["MU", "ManCity", "Real", "Barca"];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("Check value i =", i);
// Khuyến kích nên dùng let mặc dù biến var có phạm vi rộng hơn
