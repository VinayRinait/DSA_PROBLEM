const runProgram = (input)=> {
  input = input.trim().split('\n')
   let array = input[0].trim().split(" ").toString();
   let flag = false;
   for(let i = 0;i< array.length; i++){
       if(array[i] == '4' && array[i+1] == "2" && array[i+2] == '0')flag = true;
   }
   flag ? console.log("Yes") : console.log("No");
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
   