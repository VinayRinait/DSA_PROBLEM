function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array1 = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    let array2 = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    let array3 = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    if (n === 0) console.log(0);
    else {
      console.log(array1[0] + array2[0] + array3[0]);
    }
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
