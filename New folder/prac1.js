function runProgram(input) {
    input = input.trim().split("\n")
    //console.log(input)
  
    for (var i = 0; i < input.length; i++) {
        input[i]=input[i].trim().split(" ").map(Number)
    }
  //  console.log(input)
    var [row] = input[0]
    input.shift()
    sum=0
    for( var i=0;i<row;i++ )
    {
        sum +=input[0][i]
    }
    for( var i=0;i<row;i++ )
    {
        sum +=input[row-1][i]
    }
    for( var i=1;i<row-1;i++)
    {
        sum +=input[i][0]
    }
    for( var i=1;i<row-1;i++)
    {
        sum +=input[i][row-1]
    }
    for(var i=1;i<row-1;i++)
    {
        for(var j=1;j<row-1;j++)
        {
            if(i==j)
            {
                sum +=input[i][j]
            }
            else if(i+j==row-1)
            {
                if(i!=j)
                {
                    sum +=input[i][j]
                }
            }
            
        }
    }
    // for( var i=0;i<row;i++)
    // {
    //     if(i==0||i==row-1)
    //     {
    //         for( var j=0;j<row;j++)
    //         {
    //             sum +=input[i][j]
    //         }
    //     }

    // }
    
   console.log(sum)
}

// 5 5
// 2 6 1 0 9
// 2 3 4 1 0
// 2 7 8 2 1
// 9 2 3 5 0
// 6 1 1 1 1
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
   