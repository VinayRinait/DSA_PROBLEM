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
       next(n,arr)
   }
}

function next(n,arr){
   var stack = []
   var ans = []
   for(var i=n-1;i>=0;i--){
       while(stack.length != 0 && arr[i]>=stack[stack.length - 1 ]){
           stack.pop()
       }
       if(stack.length == 0){
           ans.push(-1)
       }
       else{
           ans.push(stack[stack.length-1])
       }
       stack.push(arr[i])
   }
   console.log(ans.reverse().join(" "))
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
 