
const findit = (arr1,arr2)=>{
    if(arr1[0] > arr2[0])return "False";
     if(arr1[0] >= arr2[0] && arr1[1] > arr2[1])return "False";
     if(arr1[0] >= arr2[0] && arr1[1] >= arr2[1] && arr1[2] > arr2[2])return "False";
   return "True";
}

const runProgram = (input) => {
  input = input.trim().split("\n");
  let cases = +input[0],
    line = 1;
  for (let i = 0; i < cases; i++) {
    let arr1 = input[line++].trim().split(".").map(Number);
    let arr2 = input[line++].trim().split(".").map(Number);
    console.log(findit(arr1, arr2));
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
 