let obj = {};
function findit( n) {
if(obj[n])return obj[n]
if(n == 0)return 0;
if(n ==1)return 1;
let a = findit(Math.floor(n/2))
let b = findit(Math.floor(n/3))
let c = findit(Math.floor(n/4))
obj[Math.floor(n /2)] = a
obj[Math.floor(n /3)] = b
obj[Math.floor(n /4)] = c
return Math.max(n,a+b+c)
}
function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 0; i < input.length; i++) {
    let n = +input[i];

    console.log(findit(n));
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
