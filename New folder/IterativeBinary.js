function findit(array, k, i, j) {
  let mid = Math.floor(i + (j - i) / 2);
  if (i > j) return -1;
  if (array[mid] == k) return 1;
  if (array[mid] < k) return findit(array, k, mid + 1, j);
  if (array[mid] > k) return findit(array, k, i, mid - 1);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let i = 0,
    j = array.length - 1;
  console.log(findit(array, k, i, j));
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
 