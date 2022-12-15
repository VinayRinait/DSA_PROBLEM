function findit(array,n){
    let res = [],res2= [];
    for(let i = 0;i< n; i++){
        for(let j = i+1;j < n; j++){
          if(array[j] < array[i]){
              res.push(j)
              break;
          }
          else if(j == n){
              res.push(-1)
              break;
          }
        }
    }
    for(let i = n-1;i>= 0; i--){
        for(let j = i-1;j >=0; j--){
          if(array[j] < array[i]){
              res2.push(j)
              break;
          }
          else if(j == 0){
              res2.push(-1)
              break;
          }
        }
    }
  let final = [];

}

function runProgram(input) {
   input = input.trim().split('\n')
   let cases = +input[0]
   let line = 1;
   for(let i = 0; i < cases; i++){
       let n = +input[line++]
       let array = input[line++].trim().split(" ").map(Number)
       findit(array,n)
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
   