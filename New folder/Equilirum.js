const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0],arr = input[1].trim().split(' ').map(Number),res = [];
   for(let i = 0;i< n; i++){
       let sum1 = 0,sum2 = 0;
       for(let j = 0; j < n; j++){
           if(j < i)sum1 += arr[j]
           if(j > i)sum2 += arr[j]
       }
       if(sum1 === sum2)res.push(i+1)
   }
   console.log(res.length > 0 ? res[0] : -1);
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
   
  
  