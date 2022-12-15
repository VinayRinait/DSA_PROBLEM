// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ")
    }
   // console.log(input)
    const stack=[];
    let test=input[0]
    input.shift()
    for(let i=0;i<test;i++)
    {
        let x=input[i]
        if(x[0]=="E")
        {
            stack.unshift(Number(x[1]))
            console.log(stack.length)
        }
        if(x[0]=="D")
        {
            if(stack.length!=0)
            {
                let x=stack[stack.length-1]
                stack.pop()
                console.log(x+" "+stack.length)
            }
            else
            {
                console.log(-1+" "+stack.length)
            }
      
        }
    
    }
    //console.log(queue)
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
   