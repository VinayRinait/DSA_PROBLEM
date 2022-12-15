function findit(n, dp) {
  if (n == 0) return 1;
  if (n < 0) return 0;
  if (dp[n] != -1) return dp[n];
  dp[n] = findit(n - 1, dp) + findit(n - 2, dp) + findit(n - 3, dp);
  return dp[n];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp.push(-1);
  }
  console.log(findit(n, dp));
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
 