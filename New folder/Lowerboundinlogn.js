function runProgram(input) {
  input = input.trim().split('\n')

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  // console.log(input)
  const [el, target] = input[0]
  const arr = input[1]
  let low = 0
  let high = el - 1
  let ans = -1 //if the value of lowerbound is -1, indicating that the element is not present.
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (arr[mid] == target) {
      ans = mid
      high = mid - 1
    } else if (arr[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  console.log(ans)
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
 