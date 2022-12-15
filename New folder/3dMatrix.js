function runProgram(input) {
  input = input.trim().split("\n");
  let [n, r, c] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let res = [];
  let line = 0;
  for (let i = 0; i < n; i++) {
    let mat = [];
    for (let j = 0; j < r; j++) {
      let ne = [];
      for (let k = 0; k < c; k++) {
        ne.push(array[line++]);
      }
      console.log(ne.join(" "));
    }
    // console.log(mat);
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
 