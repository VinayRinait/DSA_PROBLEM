function runProgram(input) {
    var input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].split(" ").map(Number);
    FindMiddle(arr,n)
}

function FindMiddle(arr,n){
    let ans = -1
   for(var i=0;i<n;i++){
       let f1 = 1
       let f2 = 1
       for(var j=0;j<i;j++){
           if(arr[j]>arr[i]){
               f1 = 0
           }
       }
       for(var j=i+1;j<n;j++){
           if(arr[j]<arr[i]){
               f2 = 0
           }
       }
       if(f1 && f2){
           ans = arr[i]
           break;
       }
   }
   console.log(ans)

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
   