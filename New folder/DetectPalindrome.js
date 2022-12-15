function runProgram(input) {
    input = input.trim();
    var array = "";
    for (var i = 0; i < input.length; i++) {
        array = array + (input[input.length - 1 - i])
    }
    //   console.log(array)
    //   console.log(input)
    if (array == input) {
        console.log("Yes")
    }
    else {
        console.log("No")
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
  