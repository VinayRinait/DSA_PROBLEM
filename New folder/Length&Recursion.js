// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("")
    //console.log(input)
    var count=0
    console.log(lengthArr(input,count))
}
function lengthArr(x,count)
{
    //console.log(x,count)
    if(x.length===0)
    {
       
        return count
    }
   
    x.pop()
    count++
    
    return lengthArr(x,count)
  
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
   