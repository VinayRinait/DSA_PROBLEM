const runProgram = (input) => {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    let array = input[i].trim().split(" ").map(Number);
    let a = array[0] + array[1],
      b = array[1] + array[2],
      c = array[2] + array[0];
    if (a > array[2] && b > array[0] && c > array[1]) console.log("Yes");
    else console.log("No");
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
 