function findit(array, querry) {
  for (let i = 0; i < querry.length; i++) {
    if (binary(array, querry[i])) {
      console.log("YES");
    } else console.log("NO");
  }
}
function binary(array, k) {
  let low = 0,
    high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == k) return true;
    if (array[mid] > k) high = mid - 1;
    else low = mid + 1;
  }
  return false;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let querry = input[3].trim().split(" ").map(Number);
  findit(array, querry);
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
 