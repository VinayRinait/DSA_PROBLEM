//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   let tc = input[0]
   let line = 1
   for(let i=0;i<tc;i++){
       let [a,b] = input[line].split(" ").map(Number)
       
       let ans = gcd(a,b)
       console.log(ans)
       line++
   }
}

function gcd(a,b){
   if(a === 0 || b === 0){
       return Math.max(a,b)
   }
   if(a < b){
       return gcd(a, b%a)
   }
   return gcd(a%b, b)
}


// Method 1

// function gcd(a,b){
//     if(a === b){
//         return a
//     }
//     if(a === 1 || b === 1){
//         return 1
//     }
//     if(a < b){
//         return gcd(a, b - a)
//     }
//     return gcd(a - b, b)
// }


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
 