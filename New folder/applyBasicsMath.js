function runProgram(input) {
   input = input.trim().split('\n')
   let n = +input[0]
   let array = input[1].trim().split(' ').map(Number)
   let sum = 0;
   for(let i = 0;i< n;i++)sum += array[i];
   let res = [];
   for(let i = 0;i< n;i++){
       if((sum - array[i]) % 7 == 0)res.push([array[i],i])
   }
   res.sort((a,b)=>a[0] -b[0])
   if(res.length == 0)console.log(-1);
   else console.log(res[0][1]);
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
   