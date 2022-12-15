function runProgram(input)
{
   var a=input.trim();
   a=Number(a);
  if(a==100)
  {
      console.log("A")
  }
  else  if(a>=90)
  {
      console.log("B")
  }
  else  if(a>=80)
  {
      console.log("C")
  }
  else
  {
      console.log("F")
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
   