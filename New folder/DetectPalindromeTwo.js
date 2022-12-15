const findit = (str, n) => {
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[str[i]] === undefined) obj[str[i]] = 1;
    else obj[str[i]]++;
  }
  let count = 0;
  for (key in obj) {
    if (obj[key] % 2 != 0) count++;
  }
  if (count > 1) console.log("Not Possible!");
  else console.log("Possible!");
};

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let str = input[line++].trim();
    findit(str, n);
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
 