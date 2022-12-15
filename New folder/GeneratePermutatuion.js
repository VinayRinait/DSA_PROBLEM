let ans = [];
const swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
const findPermut = (array, current) => {
  if (current == array.length) ans.push(array.join(" "));
  for (let i = current; i < array.length; i++) {
    swap(i, current, array);
    findPermut(array, current + 1);
    swap(i, current, array);
  }
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let array = input[1].trim().split(" ").map(Number);
  findPermut(array, 0);
  ans.sort();
  for (let i = 0; i < ans.length; i++) console.log(ans[i]);
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
 