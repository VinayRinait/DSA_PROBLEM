function find(array) {
  let low = 0,
    high = array.length - 1;
  let k = 4;
  let res = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (array[mid] == k) {
        res = mid;
        high = mid-1;
    }
    if (array[mid] > k) high = mid - 1;
    if (array[mid] < k) low = mid + 1;
  }
return res
}

function runProgram(input) {
  input = input.trim().split("\n");
  let array = input[0].trim().split(" ").map(Number);
  console.log(find(array));
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
 
