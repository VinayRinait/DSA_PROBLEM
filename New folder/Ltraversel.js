const findMat = (mat,r,c)=>{
    let down = r-1,left = 0,right = c-1;
    let count = 0,res = '';
    while(count < r*c && left < c && down >= 0){
    for(let i = 0;i<= down;i++)res += mat[i][left] + " ";left++, count++;
    for(let i = left;i<= right; i++)res += mat[down][i] + " ";down--,count++;
    }
    console.log(res);
}


const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let [r, c] = input[line++].trim().split(" ").map(Number);
    let mat = [];
    for (let j = 0; j < r; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    findMat(mat, r, c);
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
