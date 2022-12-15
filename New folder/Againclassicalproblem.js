    function runProgram(input) {
    input = input.trim().split('\n');
    const test=+input[0]
    let line=1
    for(i=0;i<test;i++)
    {
     input[line]=input[line].trim().split("");
       // console.log(x)   
       console.log(find(input[line]))
        line++
    }
    function find(x){
        //console.log(x)
        const stack=[]
        if(x.length%2==0)
        {
          for(let i=0;i<x.length;i++)
          {
             if(stack.length==0)
             {
               stack.push(x[i])
             //  console.log(stack)
               continue;
             }
             for(let j=stack.length-1;j>=0;j--)
             {
                if(stack[j]=="(")
                {
                  if(x[i]==")")
                  {
                    stack.pop()
                  }
                  break;
                }
                if(stack[j]=="[")
                {
                  if(x[i]=="]")
                  {
                    stack.pop()
                  }
                  break;
                }
                if(stack[j]=="{")
                {
                  if(x[i]=="}")
                  {
                    stack.pop()
                  }
                  break;
                }
             }
             if(x[i]=="{")
             {
               stack.push(x[i])
             }
             if(x[i]=="[")
             {
               stack.push(x[i])
             }
             if(x[i]=="(")
             {
               stack.push(x[i])
             }
          }
         // console.log(stack)
          if(stack.length==0)
          {
            return "balanced"
          }
          else
          {
            return "Not balances"
          }
        }
        else
        {
          return "Not balances"
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
   