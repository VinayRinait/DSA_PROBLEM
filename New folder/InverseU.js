function runProgram(input) {
    input=input.trim()
    let x=""
    let y=""
    let z="* "
    for(let i=0;i<input;i++)
    {
       x+="*"+" "
    }
    for(let i=0;i<input-2;i++)
    {
        y+=" "+" "
    } 
    for(let i=0;i<input;i++)
    {
        if(i==0)
        {
            console.log(x)
        }
        else
        {
           console.log(z+y+z)
        }
    }
  //  console.log(x)
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
   