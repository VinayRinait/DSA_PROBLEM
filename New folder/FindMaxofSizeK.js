function findit(array,n,k){
let sum = 0;
for(let i = 0;i < k;i++){
  sum += array[i]
}
let x = sum ;
for(let i = k;i< n;i++){
  x += array[i] - array[i-k]
  sum = Math.min(sum,x)
}
console.log(sum);
}



function runProgram(input) {
   input = input.trim().split('\n')
   let [n,k] = input[0].trim().split(' ').map(Number)
   let array = input[1].trim().split(' ').map(Number)
   findit(array,n,k)
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
   