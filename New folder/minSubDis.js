



const findit = (str, k) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) if (!obj[str[i]]) obj[str[i]] = 1;
  return Object.keys(obj).length === k;
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let str = input[0].trim();
  let obj = {};
  for (let i = 0; i < str.length; i++) if (!obj[str[i]]) obj[str[i]] = 1;
  let k = Object.keys(obj).length,
    max = Infinity;
  for (let i = 0; i < str.length; i++) {
    let res = "";
    for (let j = i; j < str.length; j++) {
      res += str[j];
      if (findit(res, k)) max = Math.min(max, res.length);
    }
  }
  console.log(max);
};

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
 