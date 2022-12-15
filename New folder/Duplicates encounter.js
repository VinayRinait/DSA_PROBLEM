//Enter code here
function runProgram(input){
    var arr  = input.trim().split("")
     sam(arr)
 }
 function sam(arr)
 {
     var stack = [];
     for(var i=0;i<arr.length;i++)
     {
         if(stack.length== 0)
         {
             stack.push(arr[i])
         }
         else if(stack[stack.length-1] == arr[i])
         {
             stack.pop();
         }
         else{
             stack.push(arr[i])
         }
     }
     if(stack.length===0){
         console.log("Empty String")
     }else{
     console.log(stack.join(""))
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