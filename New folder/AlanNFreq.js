function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[1].trim().split("").sort().join("");
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) obj[str[i]] = 1;
    else obj[str[i]]++;
  }
  for (key in obj) {
    console.log(key + "-" + obj[key]);
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
 
