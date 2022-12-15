function runProgram(input) {
  input = input.trim().split('\n')

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  // console.log(input)
  let test = input[0]
  let line = 1
  for (let i = 0; i < test; i++) {
    let el = input[line++]
    let arr = input[line++]
    let high = el - 1
    let low = 0
    let ans = -1
    while (low <= high) {
      let mid = Math.floor((high + low) / 2)
      let mid_val = arr[mid]
      if (
        (mid === el - 1 || mid_val >= arr[mid + 1]) &&
        (mid === 0 || mid_val >= arr[mid - 1])
      ) {
        ans = mid
         break;
      }
     else if (mid > 0 && mid_val < arr[mid - 1]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    console.log(ans)
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
 
