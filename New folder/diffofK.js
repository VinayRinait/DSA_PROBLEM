function diffOfK(N, K, arr){
    console.log(N, K, arr)
}


function runProgram(input) {
   var input = input.trim().split("\n");
   var testCases = +input[0];

   var line = 1;
   for( var i = 0; i < testCases; i++){
       var arr1 = input[line].split(" ").map(Number);
       line++;
       var arr = input[line].split(" ").map(Number);

       var N = +arr1[0];
       var K = +arr1[1];

       diffOfK(N, K, arr);
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
   