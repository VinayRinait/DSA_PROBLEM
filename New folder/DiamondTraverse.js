function traverse(mat, n) {
  var a = n - 1;
  var b = n - 1;
  var str = "";
  for (var i = Math.floor(a / 2); i >= 0; i--) {
    str += mat[i][b--] + " ";
  }
  for (var i = 1; i <= Math.floor(a / 2); i++) {
    str += mat[i][b--] + " ";
  }
  b = 1;
  for (var i = Math.floor(a / 2) + 1; i <= a; i++) {
    str += mat[i][b++] + " ";
  }
  for (var i = a - 1; i > Math.floor(a / 2); i--) {
    str += mat[i][b++] + " ";
  }
  console.log(str);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (var i = 0; i < cases; i++) {
    var mat = [];
    var n = +input[line++];
    for (var j = 0; j < n; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    traverse(mat, n);
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
 