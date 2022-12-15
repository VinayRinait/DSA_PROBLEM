function runProgram(input) {
  input = input.trim().split("\n");
  var array = [];
  for (var i = 1; i < input.length; i++) {
    array.push(input[i].trim().split(""))
  }
  var [row, col] = (input[0].trim().split(" ").map(Number))

  var count = 0;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col-3; j++) {
      if (array[i][j] == "s") {
        if (array[i][j + 1] == "a" && array[i][j + 2] == "b" && array[i][j + 3] == "a") {
          count++
        }
      }
    }
  }
  for (var i = 0; i < row-3; i++) {
    for (var j = 0; j < col; j++) {
      if (array[i][j] == "s") {
        if (array[i + 1][j] == "a" && array[i + 2][j] == "b" && array[i + 3][j] == "a") {
          count++
        }
      }
    }
  }
  for (var i = 0; i < row-3; i++) {
    for (var j = 0; j < col-3; j++) {
      if (array[i][j] == "s") {
        if (array[i + 1][j + 1] == "a" && array[i + 2][j + 2] == "b" && array[i + 3][j + 3] == "a") {
          count++
        }
      }
    }
  }
  for (var i = row - 1; i >2; i--) {
    for (var j = 0; j < col-3; j++) {

      if (array[i][j] == "s") {
        if (array[i - 1][j + 1] == "a" && array[i - 2][j + 2] == "b" && array[i - 3][j + 3] == "a") {
          count++
        }
      }
    }
  }
  console.log(count)
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
 