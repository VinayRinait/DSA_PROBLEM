//Enter code here
function runProgram(input){
    var str = input.trim().split(" ")
    Sam (str)
 }
 
 
 function Sam(str)
 {
    var arr = []
    
    for(var i=str.length-1; i>=0; i--){
        arr.push(str[i])
    }
    console.log(arr.join(" "))
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
