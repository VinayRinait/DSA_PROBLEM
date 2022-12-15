function runProgram(input) {
  input = input.trim().split("\n");
  var data1=input[0].trim()
  var data2=input[1].trim()
  var count=0
  for(var i=0;i<data2.length;i++)
  {
    for(var j=0;j<data1.length;j++)
    {
      if(data2[i]==data1[j])
      {
        count++
        break
      }
     
    }
  }
 // console.log(count)
  if(count==data1.length)
  {
    console.log("True")
  }
  else
  {
    console.log("False")
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
 