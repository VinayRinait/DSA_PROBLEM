function findit(n, res) {
  if (n <= 1) return n;
  (res[0] = 0), (res[1] = 1);
  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(-1);
  }
  console.log(findit(n, res));
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
 