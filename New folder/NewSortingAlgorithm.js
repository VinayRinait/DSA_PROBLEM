function runProgram(input) {
    input = input.trim().split("\n")
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    var div = input[0][1]
    var str = input[1]
    str.sort((a,b)=>(a%div-b%div))
  // console.log(str)
  var string=""
  for(var i=0;i<str.length;i++)
  {
    string =string+str[i]+" "
  }
  console.log(string.trim())

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
   