const conta = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) return false;
  }
  return true;
};

const findit = (array, n) => {
  let dp = [];
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = i; j < n; j++) {
      str += array[j] + " ";
      dp.push(str);
    }
  }
  for (let i = 0; i < dp.length; i++) {
    dp[i] = dp[i].trim().split(" ").map(Number);
  }
  let newDP = [];
  for (let i = 0; i < dp.length; i++) {
    if (conta(dp[i])) newDP.push(dp[i]);
  }
  let sum = null;
  for (let i = 0; i < newDP.length; i++) {
    let count = 0;
    for (let j = 0; j < dp[i].length; j++) {
      count += dp[i][j];
    }
    sum = Math.max(sum, count);
  }
  console.log(sum);
};

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n);
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
 