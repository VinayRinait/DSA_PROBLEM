function findit(array, k, n) {
  if (k == 0) return 1;
  if (k < 0) return 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += findit(array, k - array[i], n);
  }
  return sum;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [k, n] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  console.log(findit(array, k, n));
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
