const findMax = (array,n)=>{
    let sum = 0;
    for(let i = 0;i < n; i++){
        let max = 0;
        for(let j = 0; j < n; j++){
          if(array[j] >= array[i])max += array[i];
          else max += (array[j] * -1);
        }sum = Math.max(sum,max)
    }
console.log(sum);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for(let i = 0; i < cases; i++){
       let n = +input[line++],array = input[line++].trim().split(" ").map(Number);findMax(array,n);
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
   