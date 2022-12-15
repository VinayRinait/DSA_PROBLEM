//Enter code here

let count = 0
function runProgram(input) {
    input = +input
    let board = []
    for(let i=0; i<input;i++) {
        let temp = []
        for(let j=0; j<input; j++) {
            temp.push(false)
        }
        board.push(temp)
    }
    queen(board, 0)
    console.log(count)
}


function queen(board, row) {

   if(row === board.length) {
        count++
        return
   }
   
   for(let i=0; i<board.length; i++) {
       if(checkSafe(board, row, i) === true) {
           board[row][i] = true
           queen(board, row+1)
           board[row][i] = false
       }
   }
}

const checkSafe = (board, row, col) => {
    for(let i=0; i<row; i++) {
        if(board[i][col] === true) {
            return false
        }
    }
    
    for(let i=row-1, j=col-1; i>=0 && j>=0; i--, j--) {
        if(board[i][j] === true) {
            return false
        }
    }
    
    for(let i=row-1, j=col+1; i>=0 && j<board.length; i--, j++) {
        if(board[i][j] === true) {
            return false
        }
    }
    return true
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
   