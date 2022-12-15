const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let dp = Array(n + 1).fill(-1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(k + 1).fill(-1);
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      if (j == 0) dp[i][j] = 1;
      if (i == 0) dp[i][j] = 0;
    }
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < k + 1; j++) {
      if (array[i - 1] <= j) {
        dp[i][j] = Math.max(dp[i-1][j - array[i - 1]] , dp[i - 1][j])
      } else dp[i][j] = dp[i - 1][j];
    }
  }
  console.log(dp);
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