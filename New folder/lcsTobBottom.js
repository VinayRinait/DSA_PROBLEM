function matrix(m, n) {
  const dp = [];
  for (let i = 0; i <= m; i += 1) {
    dp.push(new Array(n + 1).fill(-1));
  }
  return dp;
}

function findit(str1, str2, dp) {
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      dp[i][j] =
        str1[i - 1] === str2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[str1.length][str2.length];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let m = str1.length,
    n = str2.length;
  let dp = matrix(n + 1, m + 1);
  let x = findit(str1, str2, dp);
  console.log(x);
  //   console.log(dp);
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
 