function runProgram(input){
    input=input.split("\n");
    var s= input[0];
    
    var array=input[1].split(" ").map(Number);
    
    HigestStock(s,array);
    
    
   }
   
   
    
   function HigestStock(s,array){
       let bucket=[0];
       let sum=0;
       for (let i=0;i<s;i++){
           sum=sum+array[i];
           bucket.push(sum);
           
       }
       
       let Maximum=-Infinity;
       for(let i=0; i<bucket.length;i++){
       Maximum=Math.max(Maximum,bucket[i]);    
       
       }
       console.log(Maximum);
       
       
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