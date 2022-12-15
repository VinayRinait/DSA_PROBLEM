function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var one=a[0]
  var two=a[1].split(" ");
  var b=true;
  for( var i=0;i<one;i++)
  {
      if(Number(two[i])==42)
      {
          console.log("Yes")
          b=false;
      }
  }
  if(b==true)
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
   