const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[2],
    line = 3;
  let array = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) map.set(array[i], i);
  }
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    if (n == 0) {
      let x = map.get(array[i]);
      if (x === 0) console.log(0);
      else console.log(array.length - (x));
    }
    if (n == 1) {
      let x = map.get(array[i]);
      if (x === 0) console.log(0);
      else console.log(array.length - (x + 1));
    }
  }
};
if (process.env.USER === "sangam") {
  runProgram(``);
 } else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
 }