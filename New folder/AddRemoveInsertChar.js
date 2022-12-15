

function runProgram(input) {
    input = input.trim().split('\n')
    let test=+input[0].trim()
    let line=1;
    for(let i=0;i<test;i++)
    {
        let give=input[line++].trim()
        let out=input[line++].trim()
        let x=edit(give,out,give.length,out.length)
        console.log(x)
    }
  }
  
  function edit(str1,str2,n1,n2)
  {
    let dp=[]
    for(let i=0;i<=n1;i++)
    {
        let x=[]
      for(let j=0;j<=n2;j++)
      {
        x.push(-1)
      }
      dp.push(x)
    }
    for(let i=0;i<=n1;i++)
    {
      for(let j=0;j<=n2;j++)
      {
         if(i==0) dp[i][j]=j
         if(j==0) dp[i][j]=i
      }
    }
    for(let i=1;i<=n1;i++)
    {
      for(let j=1;j<=n2;j++)
      {
          if(str1[i-1]===str2[j-1])
          {
             dp[i][j]=dp[i-1][j-1]
          }
          else
          {
               dp[i][j]= 1+Math.min(dp[i][j-1],dp[i-1][j],
              dp[i-1][j-1])
          }
      }
    }
    return dp[n1][n2]
    // if(n1==0) return n2
    // if(n2==0) return n1
    //   //console.log(str1,str2,n1,n2)
    //   if(str1[n1-1]===str2[n2-1])
    //   {
    //       return edit(str1,str2,n1-1,n2-1)
    //   }
      
    //   else
    //   {
    //       return 1+Math.min(edit(str1,str2,n1,n2-1),edit(str1,str2,n1-1,n2),
    //       edit(str1,str2,n1-1,n2-1))
    //   }
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
  
   