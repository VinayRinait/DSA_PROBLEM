function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split("");
  if (
    array[0] == "a" ||
    array[0] == "e" ||
    array[0] == "i" ||
    array[0] == "o" ||
    array[0] == "u"
  ) {
    let hulk = "hulk";
    for (let i = 0; i < hulk.length; i++) {
      array.push(hulk[i]);
    }
    console.log(array.join(""));
  } else {
    let thor = "thor";
    for (let i = 0; i < thor.length; i++) {
      array.push(thor[i]);
    }
    console.log(array.join(""));
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
 