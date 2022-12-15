function runProgram(input) {
    input = input.trim().split(" ").map(Number)
   // console.log(input)
   input.sort((a,b)=>a-b)
   for(let i=0;i<input.length-1;i++)
   {
       //console.log(input[i]-input[i+1])
       if(input[i]-input[i+1]===-2)
       {
           console.log(input[i]+1)
           break
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
 