function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[0].trim().split(" ").map(Number);
  let obj = {};
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
    if (obj[array[i]] == undefined) obj[array[i]] = 1;
  }
  for (let i = 1; i <= max; i++) {
    if (obj[i] == undefined) obj[i] = 1;
    else obj[i]++;
  }
  for (key in obj) {
    if (obj[key] == 1) console.log(key);
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
 