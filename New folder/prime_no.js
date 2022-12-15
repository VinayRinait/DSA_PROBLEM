function runProgram(input)
{
   var a=input.trim();
   a=Number(a);
   var count=0;
   for (var i=2;i<a;i++)
   {
       if(a%i==0)
       {
          count++
       }
   }
   if(count==0)
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
   