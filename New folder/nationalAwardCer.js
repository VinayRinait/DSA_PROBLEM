const findit = (array, n) => {
  let stack = [],
    res = [],
    count = 0;
  for (let i = 0; i < n; i++) {
    if (array[i] === count) {
      count++;
      res.push(array[i]);
    } else stack.push(array[i]);
    while (stack.length > 0 && stack[stack.length - 1] === count)
      res.push(stack.pop());
  }
  while (stack.length > 0) res.push(stack.pop());
  console.log(...res);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n);
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
 