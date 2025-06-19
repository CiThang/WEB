let a = 5;
let b = 12;
let c = 10;
// String kiểu numbers
// String ngoài kết hợp với toán tử cộng thì có thể kết hợp với toán tử chia
// Ngoại trừ toán tử cộng, thì js sẽ đưa biến d về number và tương tác với các toán tử khác bình thưởng
// Giả sử biến a là 1 chuỗi thì kết quả vẫn không thay đổi
// Js luông cố chuyển từ String sang Numbers
let d = "5";

console.log(a + b);
console.log(c + a);
console.log(a + d);
console.log(a * d);
console.log(a - d);
console.log(a / d);
console.log(a === d, " a", typeof a, " d: ", typeof d);
// console.log(a == d);

// let e = Number(d); ==  let e = +d;
let e = +d;
console.log("e value: ", e, "typeof: ", typeof e);
console.log(a === e, "a: ", typeof a, " e: ", typeof e);
