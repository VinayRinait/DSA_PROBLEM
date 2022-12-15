function runProgram(input) {
    input = input.trim();
    // input=Number(input)

        if (Number(input) % 4 == 0 || Number(input) % 7 == 0) 
        {
            console.log("Yes")
        }
        else if (input.includes("44") || input.includes("77") || input.includes("47") || input.includes("74")) 
        {
            console.log("Yes")
        }

        else 
        {
            console.log("No")
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
   