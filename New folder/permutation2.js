const findit = (current, array, res) => {
  if (current == array.length) {
    res.push(array.join(" "));
  }
  for (let i = current; i < array.length; i++) {
    swap(array, i, current);
    findit(current + 1, array, res);
    swap(array, i, current);
  }
  return res;
};

function swap(array, i, current) {
  let temp = array[i];
  array[i] = array[current];
  array[current] = temp;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let current = 0;
  let array = input[1].trim().split(" ").map(Number);
  let x = findit(current, array, []);
  x.sort((a, b) => a - b);
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
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
 