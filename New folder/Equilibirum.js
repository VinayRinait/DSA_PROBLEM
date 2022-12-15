const findEquillibirum = (array,n)=>{
    for(let i = 0;i< n; i++){
        let sum1 = 0,sum2 = 0;
        for(let j = 0;j < n; j++){
            if(j < i)sum1 += array[j];
            if(j > i)sum2 += array[j];
        }
        if(sum1 === sum2)return i+1;
    }
    return -1;
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let n = +input[0],array = input[1].trim().split(' ').map(Number);
   console.log(findEquillibirum(array,n));
   
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
   
  
  