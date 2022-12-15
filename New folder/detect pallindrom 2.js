//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var n = +input[line]
       line++
       var arr = input[line].trim().split("")
       line++
       find(n,arr)
       // console.log(n,arr)
   }
}

function find(n,arr){
   arr = arr.sort()
   // console.log(arr)
   var count = 0
   var i = 0
   while(i<n){
       var bag = ""
       var k = 0
       for(var j=0;j<n;j++){
           if(arr[i] == arr[j]){
               bag += arr[j]
               k++
           }
           
       }
       i = i + k
       // console.log(bag)
       var l = bag.length
       // console.log(l)
       if(l%2!==0){
           count++
           // console.log(count)
       }
   }
   if(count>1){
       console.log("Not Possible!")
   }
   else{
       console.log("Possible!")
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
   