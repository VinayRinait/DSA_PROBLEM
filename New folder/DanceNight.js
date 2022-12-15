function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
   // console.log(input)
   let test=input[0]
   let line=1;
   for(let i=0;i<test;i++)
   {
       let [b,g]=input[line++]
       let bArr=input[line++]
       let gArr=input[line++]
       bArr.sort((a,b)=>a-b)
       gArr.sort((a,b)=>a-b)
       let count=0
       for(let i=0;i<b;i++)
       {
           if(bArr[i]>gArr[i])
           {
               count++
           }
       }
       if(count===b)
       {
           console.log("YES")
       }
       else
       {
        console.log("NO")
       }
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
   