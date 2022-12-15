const findit = (dp,n)=>{
    if(n < 0)return 0;
    if(n === 0)return 1;
    if(dp[n] != -1)return dp[n]
    dp[n] = findit(dp,n-1) + findit(dp,n-2) + findit(dp,n-3)
    return dp[n]
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0]
   let dp = Array(n+1).fill(-1)
   console.log(findit(dp,n));
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
   