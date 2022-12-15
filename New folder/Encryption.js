function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim().split("");
  let k = +input[1];
  let res1 = 0;
  let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < ABC.length; j++) {
      if (str[i] == ABC[j]) {
        let x = (j + k) % ABC.length;
        str[i] = ABC[x];
        break;
      }
    }
  }
  let num = "1234567890";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (str[i] == num[j]) {
        let x = (j + k) % num.length;
        str[i] = num[x];
        break;
      }
    }
  }
  let abc = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < abc.length; j++) {
      if (str[i] == abc[j]) {
        let x = (j + k) % abc.length;
        str[i] = abc[x];
        break;
      }
    }
  }

  console.log(str.join(""));
  console.table(str)
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
 