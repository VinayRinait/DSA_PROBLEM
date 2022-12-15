//Enter code here
function runProgram(input){
   var a = input.trim().split(" ").map(Number)
   var [a,b,c] = [a[0], a[1],a[2]]
   roll(a,b,c)
}

function roll(a,b,c){
   if(a===b){
       console.log(c)
   }
   else if(a===c){
       console.log(b)
   }
   else if(c===b){
       console.log(a)
   }
   else{
       console.log("0")
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
 