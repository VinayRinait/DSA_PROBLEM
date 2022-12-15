function findit(array,a,b,c,k){
    let low = 0,high = array.length-1;
    while(low <= high){
        let mid = Math.floor(low + (high-low)/2);
        // if(a[mid * mid] +)
    }
}

function runProgram(input) {
   input = input.trim().split('\n')
   let n = +input[0]
   let array = input[1].trim().split(' ').map(Number)
   let [a,b,c,k] = input[1].trim().split(' ').map(Number)
   console.log(findit(array,a,b,c,k));
   
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
   