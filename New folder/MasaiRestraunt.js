function findit(array, stack) {
  if (array[0] == 1) {
    if (stack.length > 0) console.log(stack.pop());
    else console.log("No Food");
  }
  if (array[0] == 2) {
    stack.push(array[1]);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let stack = [];
  for (let i = 0; i < n; i++) {
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, stack);
  }
}
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
