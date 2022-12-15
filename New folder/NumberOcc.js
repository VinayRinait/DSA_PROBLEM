const lower = (array, n, k) => {
  let res = -1,
    left = 0,
    right = n - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] == k) {
      res = mid;
      right = mid - 1;
    }
    if (array[mid] > k) right = mid - 1;
    if (array[mid] < k) left = mid + 1;
  }
  return res;
};
const upper = (array, n, k) => {
  let res = -1,
    left = 0,
    right = n - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] == k) {
      res = mid;
      left = mid + 1;
    }
    if (array[mid] > k) right = mid - 1;
    else left = mid + 1;
  }
  return res;
};
const runProgram = (input) => {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  let left = lower(array, n, k);
  let right = upper(array, n, k);
  console.log(right - left + 1);
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
 