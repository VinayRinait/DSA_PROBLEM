function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/)
  var first=a[0].split(" ")
  var sec=a[1].split(" ")
  var total=0;
  var total1=0;
  for( var i=0;i<first.length;i++)
  {
      total=total+Number(first[i])
  }
  for( var i=0;i<sec.length;i++)
  {
      total1=total1+Number(sec[i])
  }
 // console.log(total)
 // console.log(total1)
  if(total>total1)
  {
      console.log("First")
  }
  else if(total==total1)
  {
      if(Number(first[2])>Number(sec[2]))
      {
          console.log("First")
      }
      else
      {
          console.log("Second")
      }
  }
  else
  {
      console.log("Second")
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
   