function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number);
    }
    let totalcost = input[0][1];
    let arr = input[1].sort((a,b)=>a-b);
    GetmaxSamosa(totalcost,arr,0,0);
}
function GetmaxSamosa(cost,arr,count,start){
   if(cost <= 0 || arr[start] > cost){
       console.log(count);
       return;
   }
   else{
       GetmaxSamosa(cost-arr[start],arr,count+1,start+1);
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
 