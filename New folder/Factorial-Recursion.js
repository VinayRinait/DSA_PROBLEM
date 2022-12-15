// TC=o[n*m]
function runProgram(input) {
    input = +input.trim()
   // console.log(input)
    console.log(factorial(input))
}
function factorial(x)
{
    if(x===1)
    {
        return 1
    }
    else
    {
        return x* factorial(x-1)
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
   