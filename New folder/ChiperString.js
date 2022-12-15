const findShiperString = (array,n)=>{
    let count = 0,res = "";
    for(let i = 0; i < n; i++){
        count++;
        if(array[i] !== array[i+1]){
            res += array[i] + count;
            count = 0;
        }
    }
    console.log(res);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let n = +input[line++]
       let str = input[line++].trim();
       findShiperString(str,n)
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