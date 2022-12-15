function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let test=input[0]
    let line=1
    for(let i=0;i<test;i++)
    {
        let x=input[line++]
        let a=x[0]
        let b=x[1]
        let c=x[2]
        let k=x[3]
        let low=0;
        let high=k;
        let ans=-1

        while(low<=high)
        {
          // if((high+low)%2===1)
          // {
          //   var mid=Math.ceil((high+low)/2)
          // }
          // else
          // {
          //   var mid=(high+low)/2
          // }
          if(a*mid**2+b*mid+c>=k)
          {
             ans=mid;
             high=mid-1
          }
          else
          {
            low=mid+1
          }
        }
        if(ans===0)
        {
          console.log(-1)
        }
        else console.log(ans)
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
   