function maxDistance(n,arr)  {
       
    let map = new Map();

   
    let max_dist = 0;

    for (let i = 0; i < n; i++) {
        
        
        if (!map.has(arr[i]))
            map.set(arr[i], i);
    
    
      else
            max_dist = Math.max(max_dist, i - map.get(arr[i]));
    }

    return max_dist;
}





function runProgram(input) {
input=input.trim().split("\n");

var tc  = +input[0];
var line  =1;
for(var i=0;i<tc;i++){
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(maxDistance(n,arr));
}


}
if (process.env.USER === "sanagm") {
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