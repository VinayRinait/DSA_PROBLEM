const PrimeCheck = (n)=>{
    let count = 0;
    for(let i = 1; i <= n; i++)if(n % i === 0)count++;
    return count === 2;
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let [r,c] = input[0].trim().split(" ").map(Number);
   let mat = [],count = 0,index = 0,res = [];
   for(let i = 1;i< input.length; i++)mat.push(input[i].trim().split(" ").map(Number));
   for(let i = 0;i< (r*c);i++){
       count++;
       if(i % c === 0)count = 1,index++;
       
       if(PrimeCheck(mat[index-1][count-1]))res.push(mat[index-1][count-1])
   }
   console.log(res.length);
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
  