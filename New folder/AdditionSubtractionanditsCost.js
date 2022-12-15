//Enter code here
function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    //console.log(input)
    let test=input[0]
    let line=1;
    let inc=3;
    let dec=5
    for(let i=0;i<test;i++)
    {
       let [el,target]=input[line++]
       let arr=input[line++]
    //  console.log(el,k,arr)
    let out=[]
    for(let j=0;j<el;j++)
    {
        let temp=[]
        for(let k=0;k<el;k++)
        {
           if(arr[j]>arr[k])
           {
               temp.push((arr[j]-arr[k])*inc)
           }
           else if(arr[j]<=arr[k])
           {
            temp.push((arr[k]-arr[j])*dec)
           }
        }
        temp.sort((a,b)=>a-b)
        //console.log(temp)
        let sum=0
        for(let k=0;k<target;k++)
        {
            sum+=temp[k]
        }
        out.push(sum)
    }
    console.log(Math.min(...out))
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
   