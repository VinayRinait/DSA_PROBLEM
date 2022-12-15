const findit = (array, a, b, n, curr, flag) => {
  if (curr === n) {
    let sum = 0;
    for (let i = a; i < b; i++) {
      sum += array[i];
    }
    if (sum % 2 !== 0) flag.push(0);
  }
  for (let i = curr; i < array.length; i++) {
    let temp = array[curr];
    array[curr] = array[i];
    array[i] = temp;
    findit(array, a, b, n, curr + 1, flag);
    let temp2 = array[i];
    array[i] = array[curr];
    array[curr] = temp2;
  }
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let n = +input[0];
  let [a, b] = input[1].trim().split(" ").map(Number);
  let array = [],
    flag = [];
  for (let i = 1; i <= n; i++) array.push(i);
  findit(array, a, b, n, 0, flag);
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
 