function runProgram(input) {
    // Write code here
    var input = input.trim().split(" ");
    var p1 = input[0];
    var p2 = input[1];
    var new_p1 = "";
    var new_p2 = "";
    var new_p3 = "";
    for (var i = 1; i <= p2; i++) {
        new_p1 += "#"
    }
    for (var i = 1; i <= p2; i++) {
        if (i == p2) {
            new_p2 += "#"
        }
        else {
            new_p2 += "."
        }
    }
    for (var i = 1; i <= p2; i++) {
        if (i == 1) {
            new_p3 += "#"
        }
        else {
            new_p3 += "."
        }
    }
    for (var i = 1; i <= p1; i++) {
        if (i % 2 != 0){
            console.log(new_p1);
        }
        else if(i % 4 == 0){
            console.log(new_p3)
        }
        else{
            console.log(new_p2);
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
   