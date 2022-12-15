function    noddyE(N, X, arr){

    // console.log(N, X, arr);
    
    var count = 0;
    var K = 0;

    for(var i = 0; i < N; i++){

      if( arr[i] <= X){
        count++;
      }

      if( arr[i] > X && K < 1 ){
        K++;
      }else if( arr[i] > X && K >= 1){
        break;
      }

    }
    

    console.log(count);

}

function runProgram(input) {
   var input = input.trim().split('\n');

   var [N, X] = input[0].trim().split(" ").map(Number);

   var arr =  input[1].trim().split(" ").map(Number);

        noddyE(N, X, arr);
   
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