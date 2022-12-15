function findit(mat, rc) {
  let left = 0,
    right = rc - 1,
    top = 0,
    bottom = rc - 1;
  let str = "";
  for (let i = bottom; i >= top; i--) {
    str += mat[i][left] + " ";
  }
  left++;
  for (let i = left; i <= right; i++) {
    str += mat[top][i] + " ";
  }
  top++;
  for (let i = top; i <= bottom; i++) {
    str += mat[i][right] + " ";
  }
  right--;
  for (let i = right; i >= left; i--) {
    str += mat[bottom][i] + " ";
  }
  console.log(str);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let rc = +input[line++];
    let mat = [];
    for (let j = 0; j < rc; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    findit(mat, rc);
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
 