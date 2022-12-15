//Enter code here
function runProgram(input){
   let n = +input
   let ans = bob(n)
   console.log(ans)
}

function bob(n){
   if(n <= 0){
       return 0
   }
   if(n === 1 || n === 2){
       return 1
   }
   if(n === 3 || n === 4){
       return n-1
   }
   if(n === 5){
       return 5
   }
   return bob(n-1) + bob(n-3) + bob(n-5)
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
 