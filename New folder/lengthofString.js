const findit = (n,array)=>{
 if(n == 0) return n;
 return array[n-1] + findit(n-1,array)
}
function runProgram(input) {
   input = input.trim().split('\n')
   let cases = +input[0]
   let line = 1;
   for(let i = 0;i< cases;i++){
       let n = +input[line++]
       let array = input[line++].trim().split(' ').map(Number)
       console.log(findit(n,array));
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
   