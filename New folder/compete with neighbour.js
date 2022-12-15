//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var n = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
   larger(n,arr)
}

function larger(n,arr){
   var count = 0
   if(arr[0]>arr[1]){
       count++
   }
   if(arr[n-1]>arr[n-2]){
       count++
   }
   for(var i=1;i<n-1;i++){
       if(arr[i-1]<arr[i] && arr[i]>arr[i+1]){
           count++
       }
   }
   console.log(count)
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
 