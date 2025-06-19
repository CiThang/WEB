console.log("Hello world from HTML");

let sum = (a, b) => {
  return a + b;
};

console.log(">>>Check sum: ", sum(9, 6));

let obj = {
  name: "Thang",
  address: "Hue",
  getName: function () {
    return this.name;
  },
};

console.log(">>>get Name : ", obj.getName());

// function và method => reuse
