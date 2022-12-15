function findit(n, k, curr, res) {
  if (res.length == k) console.log(res.join(" "));
  for (let i = curr; i <= n; i++) {
    res.push(i);
    findit(n, k, i + 1, res);
    res.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let curr = 1,
    res = [];
  findit(n, k, curr, res);
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
 