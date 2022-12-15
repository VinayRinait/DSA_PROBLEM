const NearestSmaller = (array,n)=>{
    let stack = [],res1 = [],res2 = [],index = [];
    for(let i = n - 1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length - 1][0] >= array[i]) stack.pop();
        stack.length > 0 ? res1.push([ i - stack[stack.length - 1][1],stack[stack.length - 1]]) : res1.push(-1)
        stack.push([array[i],i])
    }
    stack.length = 0;
    for(let i = 0; i < n; i++){
        while(stack.length > 0 && stack[stack.length - 1][0] >= array[i]) stack.pop();
        stack.length > 0 ? res2.push([i - stack[stack.length - 1][1],stack[stack.length - 1]]) : res2.push(-1)
        stack.push([array[i],i])
    }
    res1 = res1.reverse()
    console.log(res1);
    console.log(res2);
}
const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for(let i = 0;i< cases; i++){
       let n = +input[line++],array = input[line++].trim().split(" ").map(Number);
       NearestSmaller(array,n)
    };
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
   