function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[1].trim();
  let res = "";
  let [a, k] = input[2].trim().split(" ").map(Number);
  for (let i = 0; i < str.length; i++) {
    if (i < a) {
      res += str[i];
    }
    if (i > k) res += str[i];
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
 