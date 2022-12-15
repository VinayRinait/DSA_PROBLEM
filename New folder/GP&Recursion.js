function runProgram(input) {
    input=input.trim().split(" ").map(Number)
    //console.log(input)
    let r=input[1]
    let count=input[0]
    //console.log(r,count)
    let x= gp(r,count)
    console.log(x.toFixed(4))
    }
    function gp(r,count)
    {
        if(count===0) return 1
        return (1/r**count)+gp(r,count-1)
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
       