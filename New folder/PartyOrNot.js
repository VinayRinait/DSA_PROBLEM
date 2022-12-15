function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let [el, target] = input[0]
    let arr = input[1]
    let RemainSum=0
    for(let i=0;i<el;i++)
    {
        RemainSum+=arr[i]
    }
    let CurrentSum=0;
    var x=0
    let ans=Solve(arr,x,CurrentSum,RemainSum,target)
    if(ans===true)
    {
      console.log("Party")
    }
    else
    {
      console.log("No Party")
    }
  }
 function Solve(arr,i,c,r,k)
 {
     if(c===k) 
     {
         return true
     }
     if(c>k)
     {
         return false
     }
     if((c+r)<k)
     {
         return false
     }
     if(i===arr.length)
     {
         return false
     }
     return Solve(arr,i+1,c+arr[i],r-arr[i],k) || Solve(arr,i+1,c,r-arr[i],k)
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
 