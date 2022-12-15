function runProgram(input) {
   var input = input.trim().split("\n");

   let [N, M] = input[0].trim().split(" ").map(Number);

   let line = 1;

   let mySet = new Set();

   for(let i = 0; i < M; i++){

    let [X, Y] = input[line].trim().split(" ").map(Number);
    line++;
    let temp = X + " " + Y;
    // console.log(temp);
   mySet.add(temp)
    // console.log(mySet);
   }
    // console.log(mySet);

    let q = +input[line];
   line++;

    for(let i = 0; i < q; i++){
        let [X, Y] = input[line].trim().split(" ").map(Number);
        line++;
        let check = X + " " + Y;
        
        if(mySet.has(check)){
            console.log("YES")
        }else{
            
            console.log("NO");
        }
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
  