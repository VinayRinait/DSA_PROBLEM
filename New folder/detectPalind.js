const findPalidrome = (string,n)=>{
    let count = 0,obj = {};
    string.forEach((e)=>{if(!obj[e])obj[e]=1;else obj[e]++})
    for(key in obj)if(obj[key] %2 != 0)count++;
    count > 1 ? console.log("Yes") : console.log("No")
}

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let n = +input[line++],string = input[line++].trim().split("");
    findPalidrome(string, n);
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
 