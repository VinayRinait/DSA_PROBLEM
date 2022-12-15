//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var x = input[line].trim().split(" ").map(Number)
       var [n,k] = [x[0],x[1]]
       line++
       var arr = input[line].trim().split(" ").map(Number)
       line++
       minSum(n,k,arr)
   }
}


function minSum(n,k,arr){
   // console.log(n,k,arr)
   var i,sum = 0
   for(i=0;i<k;i++){
       sum += arr[i]
   }
   var min = sum
   for(i=1;i<=n-k;i++){
       sum += arr[i+k-1] - arr[i-1]
       if(min>sum){
           min=sum
       }
   }
   console.log(min)
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
 