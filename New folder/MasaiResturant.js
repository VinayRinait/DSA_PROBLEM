function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0].trim()
    input.shift()
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    const stack=[]
    for(let i=0;i<test;i++)
    {
        if(input[i][0]==1)
        {
           if(stack.length>0)
           {
               console.log(stack[stack.length-1])
               stack.pop()
           }
           else
           {
               console.log("No Food")
           }
        }
        else if(input[i][0]==2)
        {
            stack.push(input[i][1])
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
   