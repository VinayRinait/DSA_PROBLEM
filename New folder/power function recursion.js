//Enter code here
function runProgram(input){
   let [a,b] = input.trim().split(" ").map(Number)
   let ans = power(a,b)
   console.log(ans)
}

function power(a,b){
   if(b === 0){
       return 1
   }
   if(b === 1){
       return a
   }
   return (a * power(a,b-1))
   
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
 