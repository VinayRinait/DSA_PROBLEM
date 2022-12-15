//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var n = +input[line]
       line++
       var arr = input[line].trim().split("")
       line++
       maximum(n,arr)
   }
}

function maximum(n,arr){
   var i = 0
   var bag = ""
   while(i<n){
       var temp = arr[i]
       var j=i
       var count = 0
       while(arr[j]===temp){
           count++
           j++
           i++
       }
       bag += temp + count
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
 