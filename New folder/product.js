function runProgram(input)
{
    input=input.trim();
    var a=input.split(/[\r\n]+/)
    var first=a[0]
    var sec=a[1].split(" ")
    var count=1;
    for(var i=0;i<first;i++)
    {
        count=count*Number(sec[i])
    }
    console.log(count)
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
   