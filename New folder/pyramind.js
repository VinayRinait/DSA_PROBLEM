function runProgram(input)
{
   input=input.trim()
   input=input.split(/[\r\n]+/);
   var a=input[0];
   for(var i=1;i<=a;i++)
   {
        var b=input[i].trim();
        b=b.split(" ");
        console.log(b);
        for( var j=0;j<=a;j++)
        {
             
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
   