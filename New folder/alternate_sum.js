function runProgram(input)
{
  input=input.trim();
  var a=input.split(/[\r\n]+/);
  var one=a[0]
  var two=a[1].split(" ");
  var total=0;
//   console.log(one)
//   console.log(two)
  for( var i=0;i<one;i++)
  {
         if(i%2==0)
         {
            total=total+Number(two[i])
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
 