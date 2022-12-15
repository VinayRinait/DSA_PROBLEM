//Enter code here
function runProgram(input){
   input = +input
   let result = fibo(input)
   console.log(result)
}

function fibo(n){
   if(n === 0 || n === 1){
       return n
   }
   return fibo(n-1) + fibo(n-2)
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
 