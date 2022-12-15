// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
 //  console.log(input)
let test=input[0]
input.shift()
let line=0
for(let i=0;i<test;i++)
{
    let el=input[line++]
    let arr=input[line++]
  //  console.log(el,arr)
  let x=left(el,arr)
  let y=right(el,arr)
  console.log(x,y)
}
function left(el,arr)
{
    const stack=[];
    const main=[]
    for(let i=0;i<el;i++)
    {
        if(stack.length===0)
        {
            main.push(-1)
            stack.push(i,arr[i])
            continue;
        }
        for(let j=stack.length-1;j>=0;j--)
        {
            if(stack[j][1]>arr[i])
            {
                main.push(stack[j][0])
                break;

            }
            stack.pop()
        }
        if(stack.length===0)
        {
            main.push(-1)
        }
        stack.push(i,arr[i])
    }
    console.log(stack)
    return main
}
function right(el,arr)
{
    const stack1=[];
    const main1=[]
    for(let i=el-1;i>=0;i--)
    {
        if(stack1.length===0)
        {
            main1.push(-1)
            stack1.push(i,arr[i])
            continue
        }
        for(let j=stack1.length-1;j>=0;j--)
        {
            if(stack1[j][1]>arr[i])
            {
                main1.push(stack1[j][0])
                break;

            }
            stack1.pop();
        }
        if(stack1.length===0)
        {
            main1.push(-1)
        }
        stack1.push(i,arr[i])
    }
    console.log(stack1)
    const x = [];
    for (let i = el-1; i >= 0; i--) {
      x.push(main1[i]);
    }
    return x
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
   