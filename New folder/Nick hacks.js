//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   let tc = input[0]
   let line = 1
   for(let i=0;i<tc;i++){
       let n = +input[line]
       let ans = nick(n,1)
       if(ans){
           console.log("Yes")
       } else{
           console.log("No")
       }
       line++
       
   }
   
}

function nick(n,crr){
   if(n === crr){
       return true
   }
   if(n < crr){
       return false
   }
   return nick(n,10*crr) || nick(n,20*crr)
   
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
 