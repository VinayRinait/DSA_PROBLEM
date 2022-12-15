//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var x = input[0].trim().split(" ").map(Number)
   var [n,k] = [x[0],x[1]]
   var arr = input[1].trim().split(" ").map(Number)
   
   sorting(n,k,arr)
}

function obj(){
   var object ={}
}

function sorting(n,k,arr){
   var modulo = []
   for(var i=0;i<n;i++){
       modulo.push(arr[i]%k)
   }
   bubbleSort(n,modulo,arr)
   console.log(arr.join(" "))
}

function bubbleSort(N,modulo,arr){
   for(var i=0;i<N;i++){
       for(var j=0;j<N-i-1;j++){
           if(modulo[j]>modulo[j+1]){
               swap(modulo,j)
               swap(arr,j)
           }
       }
   }
   return arr
}


function swap(arr,j){
   var temp = arr[j]
   arr[j] = arr[j+1]
   arr[j+1] = temp
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
  