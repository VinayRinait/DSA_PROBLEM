function runProgram(input) {
  input = input.trim().split(/[\r+\n]+/)
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  //console.log(input)
  let target = input[0][0]
  let arr = input[1]
  let ans = [null,null];
  transport(target, arr, ans,0)
  if(ans[0]===null)
  {
    console.log(-1)
  }
  else{
    console.log(ans[0]+" "+ans[1])
  }
}

function transport(target, arr, ans,count) {
   // console.log(target, arr, ans)
  if (target <= 0) {
      if (target === 0) {
       if(ans[0]===null && ans[1]===null)
       {
         ans[0]=count;
         ans[1]=count;
       }
       else if(count<ans[0])
       {
         ans[0]=count
       }else if(count>ans[1])
       {
         ans[1]=count
       }
       return
    }
    return 
  } else {  
    for (let i = 0; i < arr.length; i++) {
      transport(target - arr[i], arr, ans,count+1)
    }
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
 