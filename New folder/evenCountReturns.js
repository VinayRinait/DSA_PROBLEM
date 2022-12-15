function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[0].trim();
  let dp = Array(array.length).fill(-1);
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = i; j < array.length; j++) {
      if (array[j] % 2 == 0) {
        count++;
      }
    }
    dp[i] = count;
  }
  console.log(dp.join(" "));
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
 