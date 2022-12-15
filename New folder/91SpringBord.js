function tab() {
  let dp = Array(101).fill(-1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(101).fill(-1);
  }
  return dp;
}

function findit(mat, n, m) {
  let dp = tab();
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i == n - 1 && j == m - 1) {
        dp[i][j] = mat[i][j];
      } else if (i == n - 1) {
        dp[i][j] = mat[i][j] + dp[i][j + 1];
      } else if (j == m - 1) {
        dp[i][j] = mat[i][j] + dp[i + 1][j];
      } else {
        let min = Math.min(dp[i + 1][j], dp[i][j + 1]);
        dp[i][j] = mat[i][j] + min;
      }
    }
  }
  console.log(dp[0][0]);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 1;
  let cases = +input[0];
  for (let i = 0; i < cases; i++) {
    let [r, c] = input[line++].trim().split(" ").map(Number);
    let mat = [];
    for (let j = 0; j < r; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    findit(mat, r, c);
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
 