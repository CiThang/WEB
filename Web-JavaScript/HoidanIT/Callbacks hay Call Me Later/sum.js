console.log("Hello world from HTML");
let sum = (a, b, callback) => {
  let tong = a + b;
  // setTimeout(() => {
  //   callback(tong);
  // }, 10000);
  // lặp vô hạn
  //   setInterval(() => {
  //     callback(tong);
  //   }, 1000);
  let i = 0;
  let timer = setInterval(() => {
    callback(tong);
    i++;
    if (i === 5) {
      clearInterval(timer);
    }
  }, 1000);
};
let printSum = (mesage) => {
  console.log(">>> Check sum: 6 + 9 = ", mesage);
};
sum(6, 9, printSum);
