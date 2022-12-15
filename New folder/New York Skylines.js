//Enter code here

function runProgram(input){
    input = input.trim().split("\n")
    var test = +input[0];
    var line = 1;
    
    for(var i=0;i<test;i++)
    {
        var s = +input[line++]
        
        var arr = input[line++].trim().split(" ").map(Number)
        
        Sam(arr,s)
    }
 }
 function Sam(arr,s)
 {
     var bag  = ""
     for(var i =0;i<s;i++)
     {
        if(arr[i+1]<arr[i] && arr[i-1]<arr[i]){
             bag = bag +2 +" "
         }
         else if(arr[i+1]<arr[i] || arr[i-1]<arr[i]){
             bag = bag +1 +" "
         }
         else
         {
             bag = bag +0 +" "
         }
     }
     console.log(bag)
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
 
 
 