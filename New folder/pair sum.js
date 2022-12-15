//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var n = +input[0]
   var arr = input[1].trim().split(" ").map(Number)
   pair(n,arr)
}

function pair(n,arr){
   var count = 0
   for(var i=0;i<n-1;i++){
       if((arr[i]+arr[i+1])%2==0){
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
 