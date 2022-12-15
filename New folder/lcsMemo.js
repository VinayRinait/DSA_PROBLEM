function matrix(m, n) {
  const dp = [];
  for (let i = 0; i <= m; i += 1) {
    dp.push(new Array(n + 1).fill(-1));
  }
  return dp;
}
function max(a, b) {
  return a > b ? a : b;
}

function findit(str1, str2, m, n, dp) {
  if (m == 0 || n == 0) return 0;
  if (dp[m][n] != -1) return dp[m][n];
  if (str1[m] == str2[n])
    return (dp[m][n] = 1 + findit(str1, str2, m - 1, n - 1, dp));
  else {
    return (dp[m][n] = max(
      findit(str1, str2, m - 1, n - 1, dp),
      findit(str1, str2, m - 1, n, dp)
    ));
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let m = str1.length,
    n = str2.length;
  let dp = matrix(n + 1, m + 1);
  let x = findit(str1, str2, n, m, dp);
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
 