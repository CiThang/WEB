console.log("HIHI");

const arr1 = [1, 30, 4, 2, 1000];
// console.log(arr1);
arr1.sort((item1, item2) => item1 - item2);
console.log(arr1);

var item = [
  { name: "Do", age: 13 },
  { name: "Tran", age: 2 },
  { name: "Chi", age: 32 },
  { name: "Thang", age: 24 },
];
item.sort(function (a, b) {
  return a.age - b.age;
});

console.log(item);
