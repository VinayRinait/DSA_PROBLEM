function runProgram(input) {
    input = input.trim().split("\n")
  
    for (var i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(" ").map(Number)
    }
   // console.log(input)
    var el=input[0]
    input.shift()
    var arr=[]
  
    for(i=0;i<el;i++)
    {
        var str=input[i]
       // console.log(str[0])
        if(str[0]==1)
        {
            if(arr.length==0)
            {
                console.log("No Food")
            }
            else
            {
                console.log(arr[arr.length-1])
                arr.pop()
            }
        }
        else if(str[0]==2)
        {
           arr.push(str[1])
        }
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
   