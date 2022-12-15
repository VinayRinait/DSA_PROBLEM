function runProgram(input){
    input = input.trim().split("\n")
    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)
    console.log(Absolute(arr,n))
}
function Absolute(arr,n){
    arr.sort((a,b)=>a-b)
    let abs = Infinity
    for(var i=1;i<n;i++){
         var abs2 = Math.abs(arr[i]-arr[i-1])
          if(abs>abs2){
              abs = abs2
          }
      }
        return abs
     
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
 