function runProgram(input) {
    input=input.trim().split("\n")
    for(let i=0;i<input.length;i++)
    {
        input[i]=input[i].trim().split("")
    }
   // console.log(input)
     let test=+input[0]
     input.shift()
     for(let i=0;i<test;i++)
     {
        const stack=[]
        let str=input[i]
        console.log(str)
        if(str.length%2==0)
        {
            for(j=0;j<str.length;j++)
            {
                if(stack.length==0)
                {
                    stack.push(str[j])
                    continue;
                }
                for(let k=stack.length-1;k>=0;k--)
                {
                    if(stack[k]=="(")
                    {
                        if(str[j]==")")
                        {
                            stack.pop()
                        }
                    }
                    if(stack[k]=="{")
                    {
                        if(str[j]=="}")
                        {
                            stack.pop()
                        }
                    }
                    if(stack[k]=="[")
                    {
                        if(str[j]=="]")
                        {
                            stack.pop()
                        }
                    }
                }
                if(str[j]=="(")
                {
                    stack.push(str[j])
                }
                if(str[j]=="[")
                {
                    stack.push(str[j])
                }
                if(str[j]=="{")
                {
                    stack.push(str[j])
                }
               // console.log(stack)
            }
            if(stack.length==0)
            {
                console.log("YES")
            }
            else
            {
                console.log("NO")
            }
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
       