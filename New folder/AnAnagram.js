const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   let obj = {};
   for(let i = 0;i< cases; i++){
       let array = input[line++].trim()
       if(!obj[array.split("").sort().join("")]){obj[array.split("").sort().join("")] = array;}
   }
   let res = Object.values(obj).sort((a, b) => a - b)
   console.log(res.length);
   res.map((e)=>console.log(e))
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
   
  
  