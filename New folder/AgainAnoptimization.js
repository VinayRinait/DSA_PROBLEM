function findit(weight,value,limit,n){
    if(n == 0)return 0;
    if(weight[n - 1] > limit)return findit(weight,value,limit,n-1)
    else return Math.max(value[n-1] + findit(weight,value,limit- weight[n-1],n-1) ,findit(weight,value,limit,n-1))
}

function runProgram(input) {
input = input.trim().split("\n");
let cases = input[0]
let line = 1;
for(let i = 0;i< cases; i++){
    let [limit,n] = input[line++].trim().split(" ").map(Number);
    let weight = [],value = [];
    for(let j = 0;j< n; j++){
        let x = input[line++].trim().split(" ").map(Number)
        weight.push(x[0])
        value.push(x[1])
    }
    console.log(findit(weight,value,limit,n));
}   
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
   
  
  