function runProgram(input) {
    var input = input.trim().split("")
  //  console.log(input)
    let result=input[0]
    input.shift()
    //console.log(result,input)
    space(input,result)
  }
  function space(arr,o)
  {
      console.log(o)
      if(arr.length===0)
      {
         // console.log(o)
          return
      }
        var str1=o
        var str2=o
      //  console.log(str1,str2)
       str1+=" "+arr[0]
       str2+=arr[0]
       arr.shift()
       space(arr,str1)
       space(arr,str2)
       return
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
   