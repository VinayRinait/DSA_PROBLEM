//Enter code here
function runProgram(input){
   input = input.split(" ").map(Number)
   var l = input.length
   miss(l,input)
}

function miss(l,input){
   var num = null;
   for(i=1;i<=l+1;i++){
       var a = true
       for(var j=0;j<l;j++){
           if(i==input[j]){
              a = false
           }
       } 
       if(a){
           num = i
           break;
       }
   }
   console.log(num)

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
 