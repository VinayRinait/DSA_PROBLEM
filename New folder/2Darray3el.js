function runProgram(input) {

  input = input.trim().split(/[\r\n]+/);
  for (var i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(" ").map(Number);
  }
  var cases = input[0][0];
  input.shift();
  var m=0
  for (var i = 0; i < cases; i++) {
      var rows = input[m][0];
      var cols = input[m][1];
      var sum = input[m][2];
      var count = 0;
      input.shift();
      //horizontal
      for (var r = 0; r < rows; r++) {
          for (var c = 0; c < cols - 2; c++) {
              if (input[r][c] + input[r][c + 1] + input[r][c + 2] == sum) {
                  count += 1;
              }
          }
      }
      for (var r = 0; r < rows; r++) {
        console.log(input[r])
        //  input.shift();
      }
      m=m+rows+1
      console.log(count);
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
 