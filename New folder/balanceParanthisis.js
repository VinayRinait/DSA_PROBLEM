const findit = (str) => {
  let stack = [];
  for (let x of str) {
    if (x == "[" || x == "{" || x == "(") stack.push(x);
    else {
      if (stack.length == 0) return false;
      let y = stack.pop();
      if (
        (x == "]" && y != "[") ||
        (x == "}" && y != "{") ||
        (x == "(" && y != ")")
      )
        return false;
    }
  }
  return stack.length === 0;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let str = input[line++].trim();
    console.log(findit(str));
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
 