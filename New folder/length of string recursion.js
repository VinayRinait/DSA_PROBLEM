//Enter code here
function runProgram(input){
   input = input.trim()
   let result = count(input, 0)
   console.log(result)
}

function count(str,i){
   if(str[i] === undefined){
       return  0
   }
   return 1 + count(str,i+1)
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
 