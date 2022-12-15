const findBetty = (array,n,k)=>{
    if(n == 0 || k == 0)return 0;
    if(array[n-1] < k)return 1 + findBetty(array,n-1,k);
    else return 1 + findBetty(array,n-1,k-array[n-1]) || findBetty(array,n-1,k)
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let [n, k] = input[0].trim().split(' ').map(Number)
   let array = input[1].trim().split(' ').map(Number)
   console.log(findBetty(array,n,k));
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
   