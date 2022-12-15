const findProd = (array,n)=>{
    let max = 0,index;
    let res = 0;
    for(let i = 0; i < n; i++)if(array[i] > max){max = array[i];index = i};
    for(let i = 0;i< n; i++)if(i !== index){
        if(array[i] > res)res = array[i]
    }
    console.log(res * max);
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for (let i = 0; i < cases; i++) {
       let n = +input[line++],array = input[line++].trim().split(" ").map(Number);
       findProd(array,n)
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
  