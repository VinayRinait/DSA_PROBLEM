function runProgram(input) {
    var input = input.trim().split("\n");
    let n = +input[0];
    let line = 1;
    let arr = input[1].split(" ").map(Number);
    let res = [];
    let stock = 0;
    res[0] = stock;
    
    for(let i=0;i<n;i++){
        stock += arr[i];
        res.push(stock);
    }
    console.log(Math.max(...res))
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
     