const findit = (mat, r, c, k) => {
  let sum = 0,
    count = 0;
  for (let i = 0; i < r; i++) {
    let res = 0;
    for (let j = 0; j < c; j++) {
      res += mat[i][j];
    }
    if (res === k) count++;
  }
  for (let i = 0; i < r; i++) {
    let res = 0;
    for (let j = 0; j < c; j++) {
      res += mat[j][i];
    }
    if (res === k) count++;
  }
  let one = 0;
  for (let i = 0; i < r; i++) {
    one += mat[i][i];
  }
  if (one === k) count++;
  let two = 0;
  for (let i = 0; i < r; i++) two += mat[--c][i];
  if (two === k) count++;
  console.log(count);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [r, c, k] = input[0].trim().split(" ").map(Number);
  let mat = [];
  for (let i = 1; i < input.length; i++)
    mat.push(input[i].trim().split(" ").map(Number));
  findit(mat, r, c, k);
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
 