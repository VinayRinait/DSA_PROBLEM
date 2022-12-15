function runProgram(input) {

    input = input.trim().split(/[\r\n]+/);
     
    arr=[]
    for(var i=0;i<input.length;i++)
    {
        arr.push(input[i].trim().split(" ").map(Number))
    }

    var [row,col]=arr[0]
    arr.shift()
    var str=""
    for(var i=0;i<row;i++)
    {
       // console.log("hi")
       
        if(i%2==0)
        {
           for(var j=col-1;j>=0;j--)
           {
               str=str+arr[i][j]+" "
           }
        }
        else
        {
            for(var j=0;j<col;j++)
            {
                str=str+arr[i][j]+" "
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
   