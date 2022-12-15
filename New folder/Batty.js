const findit = (n, k, res, current, flag) => {
  if (res.length == k) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) sum += res[i];
    if (sum == n) flag.push(res.join(" "));
  }
  for (let i = current; i <= 9; i++) {
    res.push(i);
    findit(n, k, res, i + 1, flag);
    res.pop();
  }
  return flag;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number),
    flag = [];
  findit(n, k, [], 1, flag);
  if (flag.length > 0)
    for (let i = 0; i < flag.length; i++) console.log(flag[i]);
  else console.log(-1);
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
 