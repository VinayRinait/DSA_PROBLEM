const runProgram = (input)=> {
  input = input.trim().split('\n')
   let [r,c,k] = input[0].trim().split(" ").map(Number);
   let mat = [],count = 0,prod = 1,n = r;
   for(let i = 1; i < input.length; i++)mat.push(input[i].trim().split(" ").map(Number));
   for(let i = 0;i< mat.length;i++)prod *= mat[i][i];
   if(prod === k){count++,prod = 1}
   else prod = 1;
   for(let i = 0;i< r-1; i++){
     let res = 1;
     for(let j = 0; j < c-1; j++)res *= mat[i][j];
     if(res === k)count++;
   }   
   for(let i = 0;i < r-1;i++){
      let res = 1;
     for(let j = 0;j< c-1; j++)res *= mat[j][i];
     if(res === k)count++;
   }
   for(let i = 0;i< mat.length-1;i++){n--;prod *= mat[i][n]}
   if(prod === k)count++;
  // console.log(count);
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
   
  