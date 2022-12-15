//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var query = +input[0]
   var line = 1
   for(let i=0;i<query;i++){
       let x = input[line].trim().split(" ").map(Number)
       let type = x[0]
       let n = null 
       if(type === 1 || type === 2){
           n = x[1]
       }
       line++
       celeb(type,n)
   }
}
var stack = []
var queue = []
var i = 0
function celeb(type,n){
   // console.log(type,n)

   if(type === 1){
       queue.push(n)
   }
   else if(type === 2){
       stack.push(n)
   }
   else if(type === 3){
       if(queue.length === 0){
           console.log(-1)
       }
       else{
           console.log(queue[i])
           i++
           // queue.shift()
       }
   }
   else if(type === 4){
       if(stack.length === 0){
           console.log(-1)
       }
       else{
           console.log(stack[stack.length-1])
           // stack.pop()
       }
   }
   else{
       var temp = queue.shift()
       stack.push(temp)
       i = 0
   }
   // console.log("stack",stack)
   // console.log("queue",queue)
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
   