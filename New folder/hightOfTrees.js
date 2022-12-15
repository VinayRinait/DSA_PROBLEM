function findit(array, n) {
  let dp = Array(n + 1).fill(-1);
  let res = 0;
  for(let i = 0;i< n; i++){
    let max = 0;
    for(let j = 0;j< i;j++){
      if(array[j] < array[i]){
        if(dp[j] > max)max = dp[j]
      }
    }
    dp[i] = max+1;
    if(dp[i] > res)res = dp[i]
  }
  console.log(res);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  findit(array, n);
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
