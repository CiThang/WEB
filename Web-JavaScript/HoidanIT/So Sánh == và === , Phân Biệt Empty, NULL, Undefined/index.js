console.log("I'm will comback");

let a = 5;
let b = 5;
let c = "5";

console.log(`Dung ==`); // == : value
console.log(`Compare a,b: a = ${a} va b = ${b}, result a = b: ${a == b}`);
console.log(`Compare a,c: a = ${a} va c = ${c}, result a = c: ${a == c}`);

console.log("Dung ==="); // === : type, value
console.log(`Compare a,b: a = ${a} va b = ${b}, result a = b: ${a === b}`);
console.log(`Compare a,c: a = ${a} va c = ${c}, result a = c: ${a === c}`);

// Empty, null, undefined
// Empty
// Vi du: let d = [] | let d = {} | let d = "" |  => let d
let d;
console.log(`Check value d: ${d}`); // ket qua la 'undifined': ban chua dinh nghia

// Neu khong khai ba0
// console.log(`Check value e: ${e}`); => ket qua error

// Dung null khi muon tao ra gia tri rỗng cho biến (sẽ giống với Empty)
// Điểm khác nhau null vs Empty
// - Null thì máy tính chưa lưu địa chỉ bộ nhớ
// - Empty thì máy tính đã lưu địa chỉ bộ nhớ

let e = null;
console.log(`Check value e: ${e}`);

console.log(null === undefined); // false (not the same type)
console.log(null == undefined); // true (but the "same value")
console.log(null === null); // true (both type and value are the same)

let f = "";
f = 5;
console.log(`Type of f: ${typeof f}, Value f: ${f}`);
f = ["travel", "food"];
console.log(`Type of f: ${typeof f}, Value f: ${f}`);

let g = [];
console.log(`Type of g: ${typeof g}`);
