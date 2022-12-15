const findMax = (array) => {
  let a = 0,
    b = 0,
    flag = true;
  for (let i = 0; i < array.length; i++) {
    flag ? (a += array[i]) : (b += array[i]);
    if (array[i] % 2 != 0) flag = flag ? false : true;
    if ((i + 1) % 6 == 0) flag = flag ? false : true;
  }
  if (a > b) console.log("AB de Villiers");
  else if (b > a) console.log("Virat Kohli");
  else console.log("Tie");
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let array = input[line++].trim().split(" ").map(Number);
    findMax(array);
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
