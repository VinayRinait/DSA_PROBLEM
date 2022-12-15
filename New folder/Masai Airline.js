function    masaiAir(N, bagArr, handArr){

    // console.log(N, bagArr, handArr);

    for(let i = 0; i < N; i++){

        if( bagArr[i] > 15 || handArr[i] > 7){
            console.log("Stop");
        }else{
            console.log("Boarding");
        }

    }

}

function runProgram(input) {
   var input = input.trim().split("\n");

   var N = +input[0];
   var bagArr = input[1].trim().split(" ").map(Number);
   var handArr = input[2].trim().split(" ").map(Number);

   masaiAir(N, bagArr, handArr);

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
  