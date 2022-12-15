function runProgram(input) {
    input = +input.trim();
  //  console.log(input)
  let x=numOfWay(input)
  console.log(x)
}
function numOfWay(input)
{
    if(input===0) return 1;
    if(input<0) return 0;
    return numOfWay(input-1)+numOfWay(input-2)+numOfWay(input-3)
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
 