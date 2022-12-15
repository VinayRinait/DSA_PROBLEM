function runProgram(input) {
    input=+input.trim()
    let x=factorial(input)
    console.log(Math.log(x).toFixed(4))
}
function factorial(input)
{
    if(input==0) return 1

    return input*factorial(input-1)
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
   