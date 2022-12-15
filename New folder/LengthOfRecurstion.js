const findLength = (str) => {
  if (str === "") return 0;
  let x = str.substring(0, str.length - 1);
  return findLength(x) + 1;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let str = input[0].trim();
  console.log(findLength(str));
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
 