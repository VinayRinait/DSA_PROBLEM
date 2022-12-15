//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var a = input[0].trim().split(" ").map(Number)
   var [n,x] = [a[0],a[1]]
   var arr = input[1].trim().split(" ").map(Number)
   find(n,x,arr)
}

function find(n,x,arr){
   var result = true
   var count = 0
   var stop = 0
   for(var i=0;i<n;i++){
       if(arr[i]<=x){
           count++
       }
       else{
           if(stop===1){
               break;
           }
           else{
               stop++
           }
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
 