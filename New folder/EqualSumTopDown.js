// let array = [2, 3, 4, 5, 6];
// let sum = 90;
// let n = array.length;
// let dp = Array(n + 1).fill(-1);
// for (let i = 0; i < dp.length; i++) {
//   dp[i] = Array(sum + 1).fill(-1);
// }

// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= sum; j++) {
//     if (i == 0) dp[i][j] = false;
//     if (j == 0) dp[i][j] = true;
//   }
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= sum; j++) {
//     if (array[i - 1] <= j) {
//       dp[i][j] = dp[i - 1][j - array[i - 1]] || dp[i - 1][j];
//     } else dp[i][j] = dp[i - 1][j];
//   }
// }

// let x = dp[n][sum];
// console.log(x);

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let sum = +input[2];

  let dp = Array(n + 1).fill(-1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(sum + 1).fill(-1);
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      if (i == 0) dp[i][j] = false;
      if (j == 0) dp[i][j] = true;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (array[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j - array[i - 1]] || dp[i - 1][j];
      } else dp[i][j] = dp[i - 1][j];
    }
  }

  let x = dp[n][sum];
  x ? console.log("yes") : console.log("no");
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
 