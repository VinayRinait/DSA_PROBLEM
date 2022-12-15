const findDifference = (array, n, k) => {
  let count = 0,
    i = 0,
    j = 0;
  while (j < n) {
    if (array[j] - array[i] == k) {
      count++;
      i++;
      j++;
    } else if (array[j] - array[i] > k) i++;
    else j++;
  }
  count > 0 ? console.log("Yes") : console.log("No");
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let array = input[line++].trim().split(" ").map(Number);
    findDifference(array, n, k);
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
 