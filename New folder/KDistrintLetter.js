const findit = (i, j, str) => {
console.log(i,j);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let str = input[1].trim();
  let obj = {},
    j = k,
    count = 0;
  for (let i = 0, j = i + k; i < n && j < n; i++,j++) {
    findit(i,j,str)
  }
//   console.log(count);
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
 