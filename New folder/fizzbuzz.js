function runProgram(input) {
    input = input.trim();
    var a = input.split(/[\r\n]+/);
    var b = a[0];
 
    for (var j = 1; j <=b; j++)
     {
        var c = a[j];
        for (var i = 1; i <=c; i++) 
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                console.log("FizzBuzz")
            }
            else if (i % 3 == 0)
            {
                console.log("Fizz")
            }
            else if (i % 5 == 0) 
            {
                console.log("Buzz")
            }
            else 
            {
                console.log(i)
            }
        }
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
   