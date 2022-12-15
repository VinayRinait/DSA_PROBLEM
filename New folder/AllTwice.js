const findUnique = (array, n) => {
  for (let i = 0; i < n; i++) {
    if (array[i] !== array[i + 1] && array[i] !== array[i - 1]) return array[i];
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    console.log(findUnique(array, n));
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
 
