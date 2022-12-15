const findit = (array, n, k) => {
  let i = 0,
    j = 0,
    sum = 0,
    count = 0,
    res = Infinity;
  while (i < n && j < n && j <= i) {
    if (sum < k) (sum += array[i++]), count++;
    if (sum === k) {
      res = Math.min(res, count);
      count = 0;
    //   break;
    }
    if (sum > k) (sum -= array[j++]), count--;
  }
  return res;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    let x = findit(array, n, k);
    console.log(x);
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
 