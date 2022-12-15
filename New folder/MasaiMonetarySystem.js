function runProgram(input) {
    input = input.trim().split('\n')
   // console.log(input)
   for(let i=0;i<input.length;i++)
   {
       let x=+input[i].trim()
       //console.log(x)
       let m1=x/2
       let m2=x/3
       let m3=x/4
      // console.log(m1,m2,m3)
       let sum=m1+m2+m3;
       console.log(Math.max(x,Math.floor(sum)))

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
   