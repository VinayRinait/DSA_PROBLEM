function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  let odd = 0,
    even = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) odd += array[i];
    else even += array[i];
  }
  odd > even ? console.log("Odd") : console.log("Even");
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
 