//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var arr = input[line].trim().split("")
       line++
       code(arr)
   }
}

function code(arr){
   var n = arr.length
   var stack = []
   for(var i=0;i<n;i++){
       if(arr[i] != "#"){
           stack.push(arr[i])
       }
       else{
           stack.pop()
       }
   }
   console.log(stack.join(""))
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
 