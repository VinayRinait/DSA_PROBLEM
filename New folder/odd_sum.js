function runProgram(input)
{
  input=input.trim();
  var total=0;
//  var a=Number(input);
 for(var i=0;i<=input;i++)
 {
     if(i%2==1)
     {
         total=total+i
     }
 }
 console.log(total)

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
   