const findit = (array1, array2, n, m) => {
  let i = 0,
    j = 0,
    res = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
      res.push(array1[i]);
      i++, j++;
    }
    else if (array1[i] < array2[j]) i++;
    else j++;
  }
  res.length === 0 ? console.log(-1) : console.log(res.join(" "));
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    let m = +input[line++];
    let array2 = input[line++].trim().split(" ").map(Number);
    findit(array, array2, n, m);
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