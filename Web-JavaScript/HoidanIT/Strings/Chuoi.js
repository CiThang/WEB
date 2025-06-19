//1. Cac cach xuat chuoi
console.log("Xin chao");
console.log("to ne");

//2. Khoi tao chuoi
let s1 = `hihi
hehe
haha`;
console.log(s1);

let s2 = "hihi\nkaka\nhaha";
console.log(s2);

//3. Cat chuoi
let s = "012345";
console.log("Chuoi sau khi cat " + s.slice(0, 3));

let S = "012345";
console.log("Chuoi sau khi cat " + S.substring(0, 3));

// substring: end<start chung se dao nguoc lai gia tri. ex: substring(4,1) => substring(1,4)
// slice : end<start thi no se mac dinh chuoi bi rong

// substring:chuyen so am thanh 0
// slice : de index cua vi tri cuoi cung = 0 con cac gia tri phia sau la am .... -2 -1 0(end)

//4. Xoa khoang trang
let a = "   hi hi   ";
console.log(a);
console.log(a.trim() + "|");
console.log(a.trimEnd() + "|");
console.log(a.trimStart() + "|");

// 5.
// 6. Noi chuoi
let z = "th";
let x = "a";
let c = "ng";
console.log(z.concat(x, c));

// 7. In hoa
let b = "thang";
console.log(b.toUpperCase());

// 8. In thuong
let d = "ThanG";
console.log(d.toLowerCase());

// 9. Thay the
let e = "thang";
console.log(e.replace("a", "e"));

// 10. Lap lai
let f = "hi";
console.log(f.repeat(4));
