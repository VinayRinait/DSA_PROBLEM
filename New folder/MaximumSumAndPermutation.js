function runProgram(input) {
    var input = input.trim().split("\n")
    let el=+input[0].trim()
    let arr = input[1].trim().split(" ").map(Number)
    arr.sort((a, b) => (a - b))
    sum = 0
    for (let i = 0; i < el; i++) {
        sum += arr[i] * i
    }
    console.log(sum)
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
 