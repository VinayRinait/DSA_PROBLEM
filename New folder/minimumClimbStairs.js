function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let dp = Array(n + 1).fill(null);
  dp[n] = 0;
  for (let i = n - 1; i >= 0; i--) {
    let min = Infinity;
    for (let j = 1; j <= array[i] && i + j < dp.length; j++) {
      if (dp[i + 1] != null) {
        min = Math.min(min, dp[i + j]);
      }
    }
    if (min != Infinity) dp[i] = min + 1;
  }
  console.log(dp[0]);
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
 