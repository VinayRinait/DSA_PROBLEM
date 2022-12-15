function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
  //   let dp=[]
  //   dp.push(0)
  //  for(let i=0;i<input[0];i++)
  //  {
  //      if(dp[i]= input[i])
  //      {
  //       for(let j=0;j<input[i];j++)
  //       {
  //           temp=i+j;
  //           if(temp<input.length)
  //           {
  //               dp[temp]=Math.min(dp[temo],dp[i]+1)
  //           }
  //       }
  //      }
  
  //  }
  let el=input[0]
  let arr=input[1]
  let x=minJump(arr,el)
  console.log(x)

}
function minJump(arr,n)
{

 
  
 
    // The number of jumps needed to
 
    // reach the starting index is 0
 
    if (n <= 1)
 
        return 0;
 
  
 
    // Return -1 if not possible to jump
 
    if (arr[0] == 0)
 
        return -1;
 
  
 
    // initialization
 
    // stores all time the maximal
 
    // reachable index in the array.
 
    let maxReach = arr[0];
 
  
 
    // stores the number of steps
 
    // we can still take
 
    let step = arr[0];
 
  
 
    // stores the number of jumps
 
    // necessary to reach that maximal
 
    // reachable position.
 
    let jump = 1;
 
  
 
    // Start traversing array
 
    let i = 1;
 
    for (i = 1; i < n; i++) {
 
        // Check if we have reached the end of the array
 
        if (i == n - 1)
 
            return jump;
 
  
 
        // updating maxReach
 
        maxReach =Math.max(maxReach, i + arr[i]);
 
 
 
        // we use a step to get to the current index
 
        step--;
 
  
 
        // If no further steps left
 
        if (step == 0) {
 
            // we must have used a jump
 
            jump++;
 
  
 
            // Check if the current index/position or lesser index
 
            // is the maximum reach point from the previous indexes
 
            if (i >= maxReach)
 
                return -1;
 
  
 
            // re-initialize the steps to the amount
 
            // of steps to reach maxReach from position i.
 
            step = maxReach - i;
 
        }
 
    }
 
  
 
    return -1;
 
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
 