const findit = (array, n) => {
  let res = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (array[j] > array[i]) {
        res.push(j);
        break;
      }
      if (j === n) res.push(-1);
    }
  }
  let newRes = [];
  for (let i = 0; i < res.length; i++) {
    for (let j = res[i] + 1; j <= array.length; j++) {
      if (res[i] != -1) {
        if (array[j] <= array[res[i]]) {
          newRes.push(array[j]);
          break;
        }
        if (j === n) {
          newRes.push(-1);
        }
      }
      if (res[i] == -1) {
        newRes.push(-1);
        break;
      }
    }
  }
  let prod = 1;
  for (let i = 0; i < n; i++) {
    prod = prod * newRes[i];
  }
  console.log(prod);
};

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, n);
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
 