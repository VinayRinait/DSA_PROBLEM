function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var one=a[0]
  var two=a[1].split(" ").map(Number);
  var high=two[0];
  var low=two[0];
  for(var i=0;i<one;i++)
  {
      if(high<two[i])
      {
          high=two[i]
      }
     
  }
  for(var i=0;i<one;i++)
  {
    if(low>two[i])
    {
        low=two[i]
    }
     
  }
   console.log(low)
   console.log(high)
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
   