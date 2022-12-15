function pairsPresent(arr, k) {
    var set = new Set();
    for (var i = arr.length - 1; i >= 0; i--) {
        if (set.has(arr[i] + k))
            return "Yes";
        set.add(arr[i]);
    }
    return "No";
}

function runProgram(input) {
    var newInput = input.trim().split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i < t * 2; i += 2) {
        var nk = newInput[i].split(" ").map(Number);
        var k = nk[1];
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(pairsPresent(arr, k));

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
  