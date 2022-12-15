function runProgram(input) {
  input = input.trim().split(" ").map(Number);

  let n = input[0];
  let k = input[1];

  let str = n.toString();

  let p = superDig(str);
  // console.log(p);
  p = p * k;
  // console.log(p);

  let ans = superDig(p * k);
  console.log(ans);
}

function superDig(str) {
  if (str.lenth == 0) return 0;

  if (str.length == 1) return 1;

  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  //console.log(sum);
  let updateStr = sum.toString();
  if ((updateStr.length = 1)) return sum;

  return superDig(updateStr);
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
 
