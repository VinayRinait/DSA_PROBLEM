function runProgram(input) {
   input = input.trim().split('\n')
   let str = input[0].trim()
   let flag = 0;
   for(let i = 0;i< str.length;i++){
       for(let j = i;j< str.length;j++){
           let res = ''
           for(let k = i;k<= j;k++){
               res += str[k]
           }if(res == res.split('').reverse().join('')){
               flag = Math.max(flag,res.length)
           }
       }
   }
   console.log(flag);
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
  