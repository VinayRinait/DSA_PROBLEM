function runProgram(input) {
    input = +input.trim()
   let x= Fibonacci(input)
   console.log(x[input])
  }
  function Fibonacci(n)
  {
    if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {
      var s = Fibonacci(n - 1);
      console.log(s[s.length - 1] , s[s.length - 2])
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
   