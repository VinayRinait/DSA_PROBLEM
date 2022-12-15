//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var n = +input[line]
       line++
       var arr = input[line].trim().split(" ").map(Number)
       line++
       var k = +input[line]
       line++
       console.log(maximum(n,k,arr))
   }
}

function maximum(n,k,arr){
   var max = 0
   if(n===1){
       return -1
   }
   else{
       for(var i=0;i<n;i++){
           for(var j=0;j<n;j++){
               if(i!==j){
                   var sum = arr[i]+arr[j]
                   if(sum<k && max<sum){
                       max = sum;
                   }
               }
           }
       }
       if(max === 0){
           return -1
       }
       else{
           return max
       }
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
   