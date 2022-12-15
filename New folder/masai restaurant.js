//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var top = -1
   var line = 1
   var arr = []
   for(var i=0;i<tc;i++){
       var x = input[line].split(" ").map(Number)
       var [y,z] = [x[0],x[1]]
       line++
       if(y==1){
           if(top<0){
               console.log("No Food")
           }
           else{
               console.log(arr[top])
               top--
           }
       }
       else if(y==2){
           top++
           arr[top] = z
       }
       // else{
       //     if(top < 0){
       //         console.log("Empty!")
       //     }
       //     else{
       //         console.log(arr[top])
       //     }
       // }
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
 