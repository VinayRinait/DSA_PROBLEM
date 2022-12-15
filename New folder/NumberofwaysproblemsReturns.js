function runProgram(input) {
    input = +input.trim()
   let x= NumOfWay(input)
   console.log(x)
  }
  function NumOfWay(i)
  {
    if (i == 1 || i == 0)
            return 1;
        else if (i == 2)
            return 2;

     return NumOfWay(i-1)+NumOfWay(i-2)+NumOfWay(i-3)
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
   