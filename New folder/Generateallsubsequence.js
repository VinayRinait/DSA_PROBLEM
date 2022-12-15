function runProgram(input) {
    input = input.trim().split("\n")
    let str=input[1].trim()
    let result=""
    getAllSubstrings(str,result);
}
function getAllSubstrings(str,result) {
    
    if(str.length===0)
    {   
        console.log(result)
        return
    }
    getAllSubstrings(str.substring(1),result+str.charAt(0))
    getAllSubstrings(str.substring(1),result)
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
   