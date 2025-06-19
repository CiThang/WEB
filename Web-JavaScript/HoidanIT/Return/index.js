console.log("Hello World");

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("<<<<Check value i: ", i);
    if (i === 8) {
      return;
    }
  }
}

check();
