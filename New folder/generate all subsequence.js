function runProgram(input) {
   input = input.split("\n")
   
   let n = +input[0]
   let str = input[1]
   let ans = ""
   gs(str, ans, 0)
}


function gs(str, ans, index) {
   
   if(ans.length > 0){
       console.log(ans)
   }
   if(index === str.length){
       return
   }
   
   for(let i=index; i<str.length; i++) {
       ans += str[i]
       gs(str, ans, i + 1)
       ans = ans.substring(0,ans.length-1)
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
 