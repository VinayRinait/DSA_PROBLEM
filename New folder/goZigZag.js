function runProgram(input) {
  input = input.trim().split("\n");
  let [r, c] = input[0].trim().split(" ").map(Number);
  let mat = [];
  for (let i = 1; i <= r; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }
  let res = "";
  for (let i = 0; i < r; i++) {
    if (i % 2 != 0) {
      for (let j = 0; j < c; j++) {
        res += mat[i][j] + " ";
      }
    } else {
      for (let j = c - 1; j >= 0; j--) {
        res += mat[i][j] + " ";
      }
    }
  }
  console.log(res);
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
 