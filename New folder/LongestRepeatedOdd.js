function runProgram(input) {

    input = input.trim().split("\n");
    var loop=+input[0]
    var data=input[1].trim().split(" ").map(Number)
  //  console.log(loop, data)
    var count=0;
    
    for(var i=0;i<loop;i++)
    {
        var count1=0;
      if(data[i]%2==1)
      {
        for(var j=i;j<loop;j++)
        {
          if(data[i]==data[j])
          {
            count1++
          }
          else
          {
            break
          }
        }
      }
      if(count1>count)
      {
        count=count1
      }

    }
    console.log(count)
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
   