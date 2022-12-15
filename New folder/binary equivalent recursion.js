//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   let tc = input[0]
   let line = 1
   for(let i=0;i<tc;i++){
       let n = +input[line]
       let ans = binary(n)
       let result = ""
       for(let i=ans.length-1; i>=0; i--){
           result += ans[i]
       }
       bag = ""
       line++
       console.log(result)
   }
}

let bag = ""
function binary(n){
   if(n === 1){
       bag += 1
       return
   }
   if(n === 0){
       bag += 0
       return
   }

   bag += (n%2)
   n = Math.floor(n/2)
   binary(n)
   return bag
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
 