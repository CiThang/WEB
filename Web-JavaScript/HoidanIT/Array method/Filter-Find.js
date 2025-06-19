console.log("Hello world from HTML");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Filter
let filter = arr.filter((item, index) => {
  console.log(">>>Check filter: item: ", item, " ,index: ", index);
  return item && item > 5;
});

console.log(filter);

let arrobj = [
  { name: "Thang", age: 8 },
  { name: "Chi", age: 18 },
  { name: "Tran", age: 19 },
  { name: "Do", age: 18 },
  { name: "DTCT", age: 19 },
];

let filterobj = arrobj.filter((item, index) => {
  return item && item.age === 18;
});

let findobj = arrobj.find((item, index) => {
  return item && item.age > 9;
});

console.log(filterobj);
console.log(findobj);
