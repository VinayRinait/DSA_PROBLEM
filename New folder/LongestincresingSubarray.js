// const findit = (array, n) => {
//   let max = 1,
//     sum = 1;
//   for (let i = 1; i < n; i++) {
//     if (array[i] > array[i - 1]) sum++;
//     else {
//       max = Math.max(max, sum);
//       sum = 1;
//     }
//   }
//   max = Math.max(max, sum);
//   return max;
// };
const findit = (array, n) => {
    let max = 1,
      sum = 1;
    for (let i = 1; i < n; i++) {
      if (array[i] > array[i - 1]) sum++;
      else {
        max = Math.max(max, sum);
        sum = 1;
      }
      console.log(sum);
    }
    max = Math.max(max, sum);
    // return max;
  };

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    console.log(findit(array, n));
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
