const findit = (array) => {
let i = 0,j = 0,k = 0;
let a = array[0],b = array[1],c = array[2]
let res = "";
while(i < a.length && j < b.length && k < c.length){
   if(a[i] === b[j] && c[k] === b[j]){
       res += a[i];
       i++,j++,k++;
   }
}
res.length === 0 ? console.log(-1) : console.log(res)
};

const runProgram = (input) => {
  input = input.trim().split("\n");
  let line = 1,
    cases = +input[0];
  for (let i = 0; i < cases; i++) {
    let array = input[line++].trim().split(" ");
    findit(array);
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
