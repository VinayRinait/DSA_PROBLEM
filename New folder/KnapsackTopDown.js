function findit(limit, n, value, weight) {
  let dp = Array(n + 1).fill(-1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(limit + 1).fill(-1);
  }
  let x = memo(limit, n, value, weight, dp);
  console.log(x);
}
function memo(limit, n, value, weight, dp) {
  for (i = 0; i <= n; i++) {
    for (j = 0; j <= limit; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
      else if (weight[i - 1] <= j)
        dp[i][j] = Math.max(
          value[i - 1] + dp[i - 1][j - weight[i - 1]],
          dp[i - 1][j]
        );
      else dp[i][j] = dp[i - 1][j];
    }
  }

  return dp[n][limit];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [k, n] = input[line++].trim().split(" ").map(Number);
    let weight = [],
      value = [];
    for (let i = 0; i < n; i++) {
      let x = input[line++].trim().split(" ").map(Number);
      weight.push(x[0]);
      value.push(x[1]);
    }
    findit(k, n, value, weight);
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
 