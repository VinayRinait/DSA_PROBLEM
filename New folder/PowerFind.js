function findit(n) {
  let low = 0,
    high = n,
    res = -1;
  while (low <= high) {
    let mid = parseInt(low + (high - low) / 2);
    if (mid * mid == n) {
      res = mid;
      return res;
    }
    if (mid * mid > n) {
      res = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return res - 1;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    console.log(findit(n));
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
 