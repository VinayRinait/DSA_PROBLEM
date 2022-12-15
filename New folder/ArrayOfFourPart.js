const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0],array = input[1].trim().split(' ').map(Number);
   let res = [],count = 0,sum = 0;
   for(let i = 0; i < n; i++){
     sum += array[i];count++;
     if(count === Math.floor(Math.floor(n/2)/2)){res.push(sum),sum = 0,count = 0; }}
   console.log((res[0] * 2) + res[1] + res[3] + (res[2] * 2));
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
   