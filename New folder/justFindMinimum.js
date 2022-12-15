function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    let minStack = [];
    let stack = [];
    let ans = [];

    for (let i = 1; i <= t; i++) {
        let inp = newInput[i].trim().split(" ");
        let n = minStack.length;

        if (inp[0] === "PUSH") {
            inp[1] = Number(inp[1]);
            stack.push(inp[1]);
            if (n === 0 || inp[1] < minStack[n - 1]) {
                minStack.push(inp[1]);
            } else {
                let ele = minStack[n - 1];
                minStack.push(ele);
            }
        } else if (inp[0] === "MIN") {
            if (n === 0) ans.push("EMPTY");
            else ans.push(minStack[n - 1]);
        } else {
            if (n === 0) ans.push("EMPTY");
            else {
                stack.pop();
                minStack.pop();
            }
        }
    }
    console.log(ans.join("\n"));
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
  