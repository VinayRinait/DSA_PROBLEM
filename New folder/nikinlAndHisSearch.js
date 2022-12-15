function lower(array, k) {
  let low = 0,
    high = array.length - 1,
    res = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == k) {
      res = mid;
      high = mid - 1;
    }
    if (array[mid] > k) high = mid - 1;
    if (array[mid] < k) low = mid + 1;
  }
  return res;
}
function upper(array, k) {
  let low = 0,
    high = array.length - 1,
    res = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] <= k) low = mid + 1;
    else {
      res = mid;
      high = mid - 1;
    }
  }
  return res;
}
// console.log(upper([2,3,4,5,5,5,6],7));

function findit(array, a, k) {
  let n = array.length;
  if (a == 0) {
    let x = lower(array, k);
    if (x == -1) console.log(0);
    else if (x == 0) console.log(array.length);
    else console.log(array.length - x);
  }
  if (a == 1) {
    let x = upper(array, k);
    if (x == -1) console.log(0);
    else if (x == 0) return array.length - 1;
    else {
      console.log(array.length - x);
    }
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[2];
  let line = 3;
  let array = input[1].trim().split(" ").map(Number);
  array.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let [a, k] = input[line++].trim().split(" ").map(Number);
    findit(array, a, k);
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