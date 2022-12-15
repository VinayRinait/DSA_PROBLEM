const findQueue = (k,a, b, queue)=>{
  
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1,queue = [];
   for (let i = 0;i< cases; i++){
     let [k,a,b]= input[line++].trim().split(" ")
     findQueue(k,a,b,queue)
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
  
  
  