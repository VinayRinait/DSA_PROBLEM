function runProgram(input) {
    input=input.trim().split(" ").map(Number)
    //console.log(input)
    let r=input[0]
    let count=input[1]
    //console.log(r,count)
    let x= etoPower(r,count)
    console.log(x.toFixed(4))
    }
    function etoPower(r,count)
    {
        if(count===0) return 1
        if(count===1) return r+1
        return ((r**count)/factorial(count))+etoPower(r,count-1)
    }
    function factorial(input)
    {
        if(input===0) return 1
        if(input===1) return 1
        return input*factorial(input-1)
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
       