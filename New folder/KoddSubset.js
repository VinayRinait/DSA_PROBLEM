function findit(array, curr, res, flag, k) {
  if (res.length > 0) {
    let count = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i] % 2 != 0) count++;
    }
    if (count >= k) flag.push(0);
  }
  for (let i = curr; i < array.length; i++) {
    res.push(array[i]);
    findit(array, i + 1, res, flag, k);
    res.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    let curr = 0,
      res = [],
      flag = [];
    findit(array, curr, res, flag, k);
    console.log(flag.length);
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
 