function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0].trim()
    input.shift()
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let stack=[]
    let queue=[]
    let temp=[]
    for(i=0;i<test;i++)
    {
      let x=input[i]
      if(x[0]==1)
      {
          queue.push(x[1])
      }
      else if(x[0]==2)
      {
          stack.push(x[1])
      }
      else if(x[0]==3)
      {
        if(queue.length>0)
        {
            console.log(queue[0])
            var m = queue[0]
            queue.shift()
        }
        else
        {
            console.log(-1)
        }
      }
      else if(x[0]==4)
      {
        if(stack.length>0)
        {
            console.log(stack[stack.length-1])
           // stack.pop()
        }
        else
        {
            console.log(-1)
        }
      }
      else if(x[0]==5)
      {
          stack.push(m)
         // temp.shift()
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
   