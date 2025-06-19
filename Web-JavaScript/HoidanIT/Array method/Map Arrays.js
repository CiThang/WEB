console.log("Hello world from HTML");

let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = i + 1;
}

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * arr[i];
// }

// map giống foreach (duyệt qua các phần tử của mảng) mà không ảnh hưởng tới mảng gốc
let maparr = arr.map((item, index) => {
  item = item * item;
  return item;
});
console.log(">>>Check value a: ", arr);
console.log(">>>Check value maparr: ", maparr);
