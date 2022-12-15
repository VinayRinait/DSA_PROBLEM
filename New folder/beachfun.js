function runProgram(input)
{
  input=input.trim();
  input=Number(input);
  var sum=input-1;
  var sum1=49-input;
  if(sum<sum1)
  {
      console.log("RK Beach")
  }
  else if(sum>sum1)
  {
      console.log("RU Beach")
  }
  else{
      console.log("Go Anywhere!")
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
   