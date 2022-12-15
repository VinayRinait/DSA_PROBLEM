// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
   // console.log(input)
    const stack=[];
    const stack2=[];
    let test=input[0]
    input.shift()
    const queue=[]
    for(let i=0;i<test;i++)
    {
        let x=input[i]
        if(x[0]==0)
        {
            if(i===0)
            {
                stack.push(x[1])
                continue
            }
            if(stack.length>0)
            {
                for(let j=stack.length-1;j>=0;j--)
                {
                    stack2.push(stack[j])
                    stack.pop()
                }
                stack.push(x[1])
                for(let j=stack2.length-1;j>=0;j--)
                {
                    stack.push(stack2[j])
                    stack2.pop()
                }
            }
            
        }
        for(let j=stack.length-1;j>=0;j--)
        {
            queue.push(stack[j])
        }
        if(x[0]==1)
        {
            console.log(queue[0])
        }
        if(x[0]==2)
        {
            queue.shift()
        }
    }
    //console.log(stack)
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
   