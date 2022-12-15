function runProgram(input) {
  input = input.trim().split(/[\r+\n]+/)
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  //console.log(input)
  let target = input[0][0]
  let arr = input[1]
  let ans = []
  transport(target, arr, ans)
  if (ans.length == 0) {
    console.log(0)
  } else {
    console.log(ans.length)
  }
}
function transport(target, arr, ans) {
    //console.log(target, arr, ans)
  if (target <= 0) {
    if (target === 0) {
      ans.push(1)
    }
    return
  } else {
    for (let i = 0; i < arr.length; i++) {
      transport(target - arr[i], arr, ans)
    }
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
 