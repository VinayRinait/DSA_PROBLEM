//Enter code here
function runProgram(input){
   input = input.trim().split(" ").map(Number)
   let i = input[0]
   let j = input[1]
   let N = input[2]
   
   let chessboard = []
   
   for(let i=0;i<10;i++){
       let temp = []
       for(let j=0;j<10;j++){
           temp.push(false)
       }
       chessboard.push(temp)
   }
   // console.log(chessboard)
   knight(i-1,j-1,chessboard,N)
   // console.log(chessboard)
   let count = 0
   for(let i=0;i<10;i++){
       for(let j=0;j<10;j++){
           if(chessboard[i][j]){
               count++
           }
       }
   }
   
   console.log(count)
}

function knight(i,j,chessboard,N){
   if(i>9 || j>9 || i<0 || j<0){
       return 
   }
   if(N === 0){
       chessboard[i][j] = true
       return
   }
   knight(i-2,j+1,chessboard,N-1)
   knight(i-2,j-1,chessboard,N-1)
   knight(i-1,j+2,chessboard,N-1)
   knight(i-1,j-2,chessboard,N-1)
   knight(i+2,j+1,chessboard,N-1)
   knight(i+2,j-1,chessboard,N-1)
   knight(i+1,j-2,chessboard,N-1)
   knight(i+1,j+2,chessboard,N-1)
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
   