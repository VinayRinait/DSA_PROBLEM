// TC=o[n*m]
function runProgram(input) {
    input = +input.trim() 
  
    let x=fibonacci(input)
    console.log(x[x.length-1])
}
function fibonacci(n)
{
    if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {
      var s = fibonacci(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
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
   