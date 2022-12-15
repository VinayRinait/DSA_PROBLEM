//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var query = +input[0]
   var line = 1
   for(let i=0;i<query;i++){
       let x = input[line].trim().split(" ")
       let type = x[0]
       let n = null 
       if(type === "E"){
           n = x[1]
       }
       line++
       celeb(type,n)
   }
}
var queue = []

function celeb(type,n){

   if(type === "E"){
       queue.push(n)
   }
   else if(type === "D"){
       let temp = queue.shift()
       if(temp === undefined){
           console.log("Empty")
       }
       else{
           console.log(temp)
       }
       
   }


}




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