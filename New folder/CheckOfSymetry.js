const vertical = (mat, n) => {
  for (let i = 0; i < n; i++) {
    if (mat[i][0] !== mat[i][n - 1]) return false;
  }
  return true;
};
const horizontal = (mat, n) => {
  for (let i = 0; i < n; i++) {
    if (mat[0][i] !== mat[n - 1][i]) return false;
  }
  return true;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++],
      mat = [];
    for (let j = 0; j < n; j++) mat.push(input[line++].trim().split(""));
    let x = vertical(mat, n);
    let y = horizontal(mat, n);
    if (x && y) console.log("both");
    else if (!x && !y) console.log("NO");
    else if (!x && y) console.log("HORIZONTAL");
    else if (x && !y) console.log("VERTICAL");
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
 