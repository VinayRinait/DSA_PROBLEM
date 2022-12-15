function runProgram(input)
{
  input=input.trim().split(/[\r\n]+/)
 // console.log(input);
  var num=[];
  for( var i=0;i<input.length;i++)
  {
      num.push(input[i].trim().split(" ").map(Number))
  }

 console.log(num)
 for(var i=1;i<=num[0][0];i++)
 {
     for(var j=0;j<num[0][1];j++)
     {
       //  console.log(i,j)
       console.log(num[i][j])
     }
 }
for(var i=1;i<=num[0][0];i++)
  {
     console.log(num[i])
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
 