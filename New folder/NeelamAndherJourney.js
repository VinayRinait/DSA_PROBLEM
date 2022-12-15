function runProgram(input) {
   input = input.trim().split('\n')
   let n = +input[0]
   let array = input[1].trim().split(' ').map(Number)
   let sum = 0;
   for(let i = 0;i< n;i++){
       if(array[i] < array[0])array[0] = array[i]
       sum += array[0]
   }
   console.log(sum);
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
   