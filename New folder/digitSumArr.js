function add(input) {
    var sum = 0;

    for (var i = 0; i < input.length; i++) {
        sum += +input[i];
    }
    return sum;
}

function dSumArr(N, arr){
        var out = "";
    for( var i = 0; i < arr.length; i++ ){
        out += add(arr[i]) + " ";
    }
    console.log(out);
}

 
function runProgram(input) {
    
    var input = input.split("\n");
    var testCases = +input[0];

    var line= 1;
    for( var i = 0; i < testCases; i++){
        var N = +input[line];
        line++;
        var arr = input[line].trim().split(" ")
        line++;

            dSumArr(N, arr);
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
   