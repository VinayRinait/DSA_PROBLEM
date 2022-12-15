function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    // console.log(input)

    let x = input[1]
    let y = input[2]
    let start=0;
    let end=input[0]
    let count=0
    while(start<end)
    {
        if(x[0]===y[start])
        {
          //  console.log("hi")
           start++;
          // let str=x.shift()
        //    x.push(str)
           count++
        }
        else if(x[0]!==y[start]) 
        {
        // console.log("meera")
          let str=x.shift()
          x.push(str)
         // console.log(str)
          count++
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
   