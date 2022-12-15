function runProgram(input) {
    let [start,end] = input.trim().split(" ").map(Number)
    let arr=[]
    for(let i=start;i<=end;i++)
    {
           arr.push(i)
           i++
    }
   console.log(arr.join(" "))
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
   