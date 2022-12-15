//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   var a = input[0].trim().split(" ").map(Number)
   var [K1,N1,M1] = [a[0],a[1],a[2]]
   var b = input[1].trim().split(" ").map(Number)
   var Mat = []
   var line = 0
   for(var i=0;i<K1;i++){
       var col = []
       for(var j=0;j<N1;j++){
           var row = []
           for(var k=0;k<M1;k++){
               row.push(b[line])
               line++
           }
           col.push(row)
       }
       Mat.push(col)
   }
   
   // console.log(K1,N1,M1,Mat)
   print(N1,M1,K1,Mat)
}

function print(N1,M1,K1,Mat){
   for(var i=0;i<K1;i++){
       for(var j=0;j<N1;j++){
           var bag = ""
           for(var k=0;k<M1;k++){
               bag += Mat[i][j][k] + " "
           }
           console.log(bag)
       }
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
 