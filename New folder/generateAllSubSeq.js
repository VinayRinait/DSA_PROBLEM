function findit(str, n, res, curr) {
  if (res.length > 0) console.log(res);
  for (let i = curr; i < n; i++) {
    res += str[i];
    findit(str, n, res, i + 1);
    res = res.substring(0, res.length - 1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let str = input[1].trim();
  findit(str, n, "", 0);
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
 