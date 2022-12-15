function runProgram(input) {
    var input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let el = input[0]
    let arr = input[1]
    let x = minJump(arr, el)
    console.log(x)
  }
  function minJump(arr, n) {
    if (n <= 1) {
      return 0
    }
    if (arr[0] == 0) {
      return -1
    }
    let maxReach = arr[0]
    let step = arr[0]
    let jump = 1
    for (let i = 1; i < n; i++) {
      if (i == n - 1) {
        return jump
      }
      maxReach = Math.max(maxReach, i + arr[i])
      step--
      if (step == 0) {
        jump++
        if (i >= maxReach) {
          return -1
        }
        step = maxReach - i
      }
    }
    return -1
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
   