const findit = (array, n) => {
  let next = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j <= n; j++) {
      count++;
      if (array[j] < array[i]) {
        next.push([count, j]);
        count = 0;
        break;
      }
      if (j == n) {
        next.push([-1, -1]);
        break;
      }
    }
  }
  let prev = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i - 1; j >= -1; j--) {
      count++;
      if (array[j] < array[i]) {
        prev.push([count, j]);
        count = 0;
        break;
      }
      if (j == -1) {
        prev.push([-1, -1]);
      }
    }
  }
  for (let i = 0; i < prev.length; i++) {
    if (prev[i][0] == -1) {
      prev[i] = next[i];
    }
  }
  for (let i = 0; i < prev.length; i++) {
    if (next[i][0] == -1) {
      next[i] = prev[i];
    }
  }
  for (let i = 0; i < prev.length; i++) {
    if (prev[i][0] > next[i][0]) {
      prev[i] = next[i];
    }
  }
  let final = [];
  for (let i = 0; i < prev.length; i++) {
    if (prev[i][0] != -1) final.push(array[prev[i][1]]);
    else final.push(-1);
  }
  console.log(final.join(" "));
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n);
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
 