function runProgram(input)
{
  input=input.trim();
  var a=input.split(" ");
  count=0;
 for ( var i=Number(a[0]);i<=Number(a[1]);i++)
 {
     if(i%Number(a[2])==0)
     {
         count++
     }
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
   