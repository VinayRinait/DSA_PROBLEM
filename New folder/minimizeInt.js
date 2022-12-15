const findit = (n) => {
  if (n[0] == "-") {
    let x = n.map(Number).sort((a, b) => b - a);
    x[0] = "-";
    console.log(x.join(""));
  } else {
    let x = n.map(Number).sort((a, b) => a - b);
    if (x[0] === 0) {
      for (let i = 0; i < x.length; i++) {
        if (x[i] != 0) {
          [x[0], x[i]] = [x[i], x[0]];
          break;
        }
      }
      console.log(x.join(""));
    } else console.log(x.join(""));
  }
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = input[line++].trim().split("");
    findit(n);
  }
};
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
