function findit(current,array,ans){
    if(ans.length > 0){
   console.log(ans);
    }
    for(let i = current;i < array.length;i++){
      ans.push(array[i]);
      findit(i+1,array,ans);
      ans.pop();
    }
  }

  function runProgram(input) {
     input = input.trim().split('\n');
     let array = input[1].trim().split(' ').map(Number);
      let current = 0,ans = [];
      findit(current,array,ans)
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
     