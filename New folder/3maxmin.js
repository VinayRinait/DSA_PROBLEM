function runProgram(input) {
    input=input.trim().split("\n")
    let el=+input[0].trim()
    let arr = input[1].trim().split(" ").map(Number)
   // console.log(el,arr)
   arr.sort((a,b)=>a-b)
   let max={}
   let stack=[]
   for(let i=0;i<el;i++)
   {
      if(max[arr[i]]===undefined)
      {
          max[arr[i]]=1
          stack.push(arr[i])
      }
   }
   if(stack.length>=3)
   {
       console.log(stack[0]+" "+stack[1]+" "+stack[2])
   }
   else
   {
       console.log("Not Possible")
   }
   if(stack.length>=3)
   {
       console.log(stack[stack.length-3]+" "+stack[stack.length-2]+" "+stack[stack.length-1])
   }
   else
   {
       console.log("Not Possible")
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
 