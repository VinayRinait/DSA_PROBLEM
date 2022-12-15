function lower(array, n, k) {
  let low = 0,
    high = n - 1,
    res = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == k) {
      res = mid;
      high = mid - 1;
    } else if (array[mid] > k) high = mid - 1;
    else low = mid + 1;
  }
  return res;
}

function upper(array, n, k) {
  let low = 0,
    high = n - 1,
    res = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == k) {
      res = mid;
      low = mid + 1;
    } else if (array[mid] > k) high = mid - 1;
    else low = mid + 1;
  }
  return res;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let k = +input[2];
  let a = lower(array, n, k);
  let b = upper(array, n, k);
  console.log(a, b, b - a + 1);
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
 