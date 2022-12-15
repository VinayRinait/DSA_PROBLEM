const findit = (str, current, res) => {
  if (res.length > 0) console.log(res);
  for (let i = current; i < str.length; i++) {
    res += str[i];
    findit(str, i + 1, res);
    res = res.substring(0, res.length - 1);
  }
};

function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[1].trim();
  let current = 0;
  let res = "";
  findit(str, current, res);
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
 