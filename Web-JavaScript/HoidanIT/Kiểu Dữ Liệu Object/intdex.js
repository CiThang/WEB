console.log("Hello world");

let obj = {
  name: "thang",
  address: "Hue",
  age: "18",
  a: function () {
    console.log("Hello world inside function");
    return "";
  },
};
// thay doi du lieu trong object
let b = "name";
// obj[b] = "Do"; co le lam cach duoi
obj.name = "Ali";

// console.log("Type of a: ", typeof a, " , Type of b: ", typeof b);
console.log(obj);
console.log("What is your name? ", `My name is ${obj.name}`);
console.log("Where are you from? ", `I'm from ${obj.address}`);
console.log("How old are you ?", `I'm ${obj["age"]}`);
console.log("call function", obj.a());
