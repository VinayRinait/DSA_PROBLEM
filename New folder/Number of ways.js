//Enter code here
function runProgram(input){
   input = +input
   let result = ways(input)
   console.log(result)
}

// ways(4) = ways(3) + ways(2) + ways(1)
//         = ways(2) + ways(1) + ways(0) + 2 + 1
//         = 2 + 1 + 1 + 2 + 1 = 7
function ways(n){
   if(n === 1 || n === 0){
       return 1
   }
   if(n === 2 ){
       return 2
   }
   if(n === 3 ){
       return 4
   }
   return ways(n-1) + ways(n-2) + ways(n-3)
}

// no. of ways to reach step 4 is equal to no of ways to reach 
// step3 + step2 + step1 just like fibonacci series
// step1 = 1
// step2 = 2
// step3 = 4
// step4 = step3 + step2 + step1
// step5 = step4 + step3 + step2

if (process.env.USER === "") {
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