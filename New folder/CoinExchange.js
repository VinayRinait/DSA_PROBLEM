function runProgram(input) {
    var input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let [target,el]=input[0]
    let arr=input[1]
   let x= count(arr,el,target)
   console.log(x)
}
function count(arr , el , n )
{
    if (n == 0)
        return 1;
    if (n < 0)
        return 0;

    if (el <=0 && n >= 1)
        return 0;

    return count( arr, el - 1, n ) +
           count( arr, el, n - arr[el - 1] );
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
 