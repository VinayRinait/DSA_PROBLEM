function runProgram(input) {
    input = input.trim().split('\n');
    let test=+input[0].trim()
    let line=1
    for(let k=0;k<test;k++)
    {
        let el=+input[line++].trim()
        let arr=input[line++].trim().split(" ").map(Number)
        let stack=[];
        let ans=""
        for(let i=arr.length-1;i>=0;i--)
        {
            if(stack.length===0)
            {
                ans+="-1"+" "
            }
            else if(stack.length>0 && stack[stack.length-1]>arr[i])
            {
                ans+=stack[stack.length-1]+" "
            }
            else if(stack.length>0 && stack[stack.length-1]<=arr[i])
            {
                while(stack.length>0 &&stack[stack.length-1]<=arr[i])
                {
                    stack.pop()
                }
                if(stack.length===0)
                {
                    ans+="-1"+" "
                }
                else
                {
                    ans+=stack[stack.length-1]+" "
                }
            }
            //console.log(stack)
            stack.push(arr[i])
        }
        //console.log(ans)
        console.log(ans.trim().split(" ").map(Number).reverse().join(" "))
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
   