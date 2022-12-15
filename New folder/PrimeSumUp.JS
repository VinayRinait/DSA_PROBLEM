function runProgram(input) {
    input=+input.trim()
    //console.log(input)
    
    var arr=[]
    var total=0
    for(var i=2;i<=input;i++)
    {
        var flag=false;
        for(var j=2;j<i;j++)
        {
          //  console.log(i,j)
            if(i%j==0)
            {
                flag=true;
                break;
            }
        }
        if(flag==false)
        {
          arr.push(i)
        }
    }
    //console.log(arr)
    for(var i=0;i<arr.length;i++)
    {
        total=total+arr[i]
    }
    console.log(total)
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
     