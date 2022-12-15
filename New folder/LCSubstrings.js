function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let dp = Array(str1.length + 1).fill(-1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(str2.length + 1).fill(-1);
  }
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i == 0 || j == 0) dp[i][j] = 0;
    }
  }
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] == str2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else {
        dp[i][j] = 0;
      }
    }
  }
  console.log(dp[str1.length][str2.length]);
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
 