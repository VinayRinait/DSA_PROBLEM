const findit = (array, flag, current, res) => {
  if (res.length > 0) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) sum += res[i];
    if (sum % 2 !== 0) flag.push(0);
  }
  for (let i = current; i < array.length; i++) {
    res.push(array[i]);
    findit(array, flag, i + 1, res);
    res.pop();
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  let flag = [];
  findit(array, flag, 0, []);
  console.log(flag.length);
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
 