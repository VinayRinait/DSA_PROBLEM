function findit(array, n, res, curr) {
  if (curr === n - 1) res.push(array.join(" "));
  for (let i = curr; i < n; i++) {
    let temp = array[i];
    array[i] = array[curr];
    array[curr] = temp;
    findit(array, n, res, curr + 1);
    let tam = array[i];
    array[i] = array[curr];
    array[curr] = tam;
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let res = [];
  findit(array, n, res, 0);
  res.sort();
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
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
 