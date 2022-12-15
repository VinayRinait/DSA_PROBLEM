function runProgram(input)
{
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++)
    {
      let costs=input[line].split(" ").map(Number)  
      line++
      let N=+input[line]
      line++
      let arr=input[line].split(" ").map(Number)
      line++
    console.log(minCost(arr,costs)) 
    }
    
}
function minCost(days, costs) 
 { 
     
  var obj = {};   
  for(var i of days) 
  {
      obj[i] = true
  }
  var lastDay = days[days.length - 1]
  var dp = new Array(days[days.length - 1] + 1).fill(Infinity);
  dp[0] = 0;
  
  for(var i = 1; i< days[days.length - 1] + 1; i++) {
      if(!obj[i]) {
          dp[i] = dp[i-1];
          continue;
      }
      dp[i] = costs[0] + dp[i-1];
      dp[i] = Math.min(costs[1] + dp[Math.max(i - 7, 0)], dp[i]);
      dp[i] = Math.min(costs[2] + dp[Math.max(i - 30, 0)], dp[i]); 
  }
  
  return dp[lastDay]
  
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
 