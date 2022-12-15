function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(' ').map(Number)
      }
    let [row,col]=input[0]
    input.shift()
    let str=""
    for(let i=0;i<row;i++)
    {
        if(i%2==0)
        {
            for(let j=col-1;j>=0;j--)
            {
                str+=input[i][j]+" "
            }
        }
        else
        {
            for(let j=0;j<col;j++)
            {
                str+=input[i][j]+" "
            }
        }
    }
   console.log(str)
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
   