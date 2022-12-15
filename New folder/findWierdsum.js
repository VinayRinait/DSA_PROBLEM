function findit(array,k,res,curr,flag){
    if(res.length > 0){
        let sum = 0;
        for(let i = 0;i< res.length;i++){
            sum += res[i]
        }
        if(sum === k)flag.push(0)
    }
    for(let i = curr;i< array.length;i++){
        res.push(array[i])
        findit(array,k,res,i+1,flag)
        res.pop()
    }
}

function runProgram(input) {
   input = input.trim().split('\n')
   let cases = +input[0]
   let line = 1;
   for(let i = 0;i< cases;i++){
       let n = +input[line++]
       let array = input[line++].trim().split(' ').map(Number)
       array.sort((a,b)=>a-b)
       let k = array.pop()
       let flag = []
       findit(array,k,[],0,flag)
       console.log(flag);
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
   
  
  console.log('hey');