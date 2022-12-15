function runProgram(input) {
    input = input.trim().split("\n")
  
    for (var i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(" ").map(Number)
    }
  
    var test = input[0]
    input.shift()
    for (var i = 0; i < test; i++) {
      var el = input[0]
      var str = input[1].sort((a, b) => a - b)
      var target = input[2]
      var y = el-1
      var arr=[]
      for(var  j=0;j<y;j++)
      {
        while(j<y)
        {
           if(str[j]+str[y]<target)
           {
            arr.push(str[j]+str[y])
             break
           }
           if(j==y)
           {
              break
           }
           --y
        }
      }
      arr.sort((a,b)=>a-b)
      if(arr[arr.length-1]==undefined)
      {
        console.log(-1)
      }
      else
      {
        console.log(arr[arr.length-1])
      }
      input.shift()
      input.shift()
      input.shift()
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
   