function runProgram(input) {
    // Write code here
    var input = input.trim().split(/[\r\n]+/);
    for (var i = 0; i < input.length; i++) {
      input[i] = input[i].split(" ").map(Number);
    }
  ​
    var rows = input[0][0];
    var cols = input[0][1];
    var sum = input[0][2];
    var count = 0;
    input.shift();
  ​
    //console.log(input);
    //rows
    for (var j = 0; j < rows; j++) {
      for (var i = 0; i < cols - 2; i++) {
        if (input[j][i] + input[j][i + 1] + input[j][i + 2] == sum) {
          count++;
        }
        // console.log(input[j][i], input[j][i + 1], input[j][i + 2]);
      }
    }
    //cols
    for (var j = 0; j < rows; j++) {
      for (var i = 0; i < cols - 2; i++) {
        if (input[i][j] + input[i + 1][j] + input[i + 2][j] == sum) {
          count++;
        }
        // console.log(input[j][i], input[j][i + 1], input[j][i + 2]);
      }
    }
  ​
    //diagonal
    for (var j = 0; j < rows - 2; j++) {
      for (var i = 0; i < cols - 2; i++) {
        if (input[i][j] + input[i + 1][j + 1] + input[i + 2][j + 2] == sum) {
          count++;
        }
      }
    }
  ​
    //anti diagonal
    for (var j = rows - 1; j > 1; j--) {
      for (var i = 0; i < cols - 2; i++) {
        if (input[j][i] + input[j - 1][i + 1] + input[j - 2][i + 2] == sum) {
          count++;
        }
      }
    }
  ​
    console.log(count);
  }
  ​
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
   