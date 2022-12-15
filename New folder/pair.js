function runProgram(input) {
    input = input.trim().split("\n");
    for( var i=0;i<input.length;i++)
    {
      input[i]=input[i].trim().split(" ").map(Number)
    }
   // console.log(input)
    var test=input[0]
    input.shift()
    //console.log(input)
    for(var i=0;i<test;i++)
    {
      var [el,target]=input[0]
      input.shift()
      var count=0
      for(var j=0;j<el;j++)
      {
         var x=input[0][j]-target
      }

       // console.log(el,target)

      if(count==0)
      {
        console.log(-1)
      }
      else
      {
        console.log(1)
      }
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
   