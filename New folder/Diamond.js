const findDiamond = (mat, n) => {
    let a = n-1,b = n-1,res = "";
    for(let i = Math.floor(a/2);i >= 0; i--)res += mat[i][b--] + " ";
    for(let i = 1; i <= Math.floor(a/ 2);i++)res += mat[i][b--] + " ";
    b = 1;
    for(let i = Math.floor(a / 2)+1; i <= a; i++)res += mat[i][b++] + " ";
    for(let i = a-1; i > Math.floor(a/ 2);i--)res += mat[i][b++] + " ";
    console.log(res);
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++];
    let mat = [];
    for (let j = 0; j < n; j++)
      mat.push(input[line++].trim().split(" ").map(Number));
    findDiamond(mat, n);
  }
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
 