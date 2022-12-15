const runProgram = (input) => {
  input = input.trim().split("\n");
  let n = +input[0],res = [],
    array = input[1].trim().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) {
        if(i > j){
          if(array[j] > array[i])break;  
        }
        else if(array[j] < array[i])break;
        else if(j == n)res.push(array[i])
    }
  }
  console.log(res.length > 0 ? res[0] : -1);
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
 