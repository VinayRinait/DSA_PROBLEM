//Enter code here
function G_Operator(tc,N){
    var x = Math.floor(N/2);
    console.log(x);
}

function runProgram(input){
    input = input.trim().split("\n");
    var tc = +input[0].trim();
    
    var line = 1;
    for(var i =0; i<tc; i++){
        
        var N = input[line++].trim();
    
        // console.log(tc,N)
        G_Operator(tc,N);
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
 