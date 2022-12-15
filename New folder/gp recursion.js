//Enter code here
function runProgram(input){
   input = input.trim().split(" ").map(Number)
   let [n,r] = [input[0],input[1]]
   let ans =  gp(n,r).toFixed(4)
   console.log(ans)
   
}

function gp(n,r){
   if(n === 0){
       return 1
   }
   return (1/(r**n)) + gp(n-1,r)
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
 