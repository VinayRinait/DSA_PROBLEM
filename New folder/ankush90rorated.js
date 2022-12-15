function runProgram(input) {
    input = input.trim().split("\n");
    var array = [];
    for (var i = 0; i < input.length; i++) {
      array.push(input[i].trim().split(" ").map(Number))
    } 
  //      console.log(array)
    var [n]=array[0]
    array.shift()


    for(var i=0;i<n/2;i++)
    {
        for(var j=i;j<n-i-1;j++)
        {
            var temp=array[i][j]
            array[i][j]=array[j][n-i-1]
            array[j][n-i-1]=array[n-i-1][n-j-1]
            array[n-i-1][n-j-1]=array[n-j-1][i]
            array[n-j-1][i]=temp
        }
        
    }
    console.log(array)
 
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
   