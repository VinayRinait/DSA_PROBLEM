function max(a, b) {
  return a > b ? a : b;
}

function findit(str1, str2, m, n) {
  if (m == 0 || n == 0) return 0;
  if (str1[m] == str2[n]) return 1 + findit(str1, str2, m - 1, n - 1);
  else {
    return max(findit(str1, str2, m - 1, n - 1), findit(str1, str2, m - 1, n));
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let m = str1.length,
    n = str2.length;
  let x = findit(str1, str2, m, n);
  console.log(x);
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
 