//Enter code here
function sam(arr, n, m) {
    var res = "";
   var count = 0;
    var top = 0;
    var down = n - 1;
    var left = 0;
    var right = m - 1;

    while (count < m * n) {
        for (var i = top; i <= down && count < m * n; i++) {
            res += arr[i][left] + " ";
            count++;
        }
        left++;

        for (var i = left; i <= right && count < m * n; i++) {
            res += arr[down][i] + " ";
            count++;
        }

        down--;
    }

    console.log(res);
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i <= t; i++) {
        let [n, m] = newInput[i].trim().split(" ").map(Number);
        let arr = newInput.splice(i + 1, n);
        arr = arr.map((el) => el.trim().split(" ").map(Number));
        sam(arr, n, m);
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
 