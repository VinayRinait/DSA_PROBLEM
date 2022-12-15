function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number);
    }
    let el=input[0]
    let arr=input[1]
    let max=1
    let count=1
    let flag=false
    for(let i=0;i<el-1;i++)
    {
        if (arr[i] % 2 == 1) {
            flag = true
            if (arr[i] == arr[i + 1]) {
                count++
                if (max <= count) {
                    max = count
                }
            } else {
                count = 1
            }
        } else {
            count = 1
        }
    }
    if (flag) { console.log(max) }
    else {
        console.log(0)
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
   