function runProgram(input) {
    var input = +input.trim()
    let arr=[];
    for(let i=0;i<input;i++)
    {
        let out=[];
        for(let j=0;j<input;j++)
        {
            out.push(0)
        }
        arr.push(out)
    }
   // console.log(arr)
   NQueen(arr,0,input)
   console.log(count)
  }
  let count = 0
  function NQueen(arr,row,el)
  {
      if(row==el)
      {
        return count++
      }
      for (let i = 0; i < el; i++) {
        if (isQueenSafe(arr, row, i)) {
          // row++
          arr[row][i] = 1
          NQueen(arr, row + 1, el)
          arr[row][i] = 0
        }
      }
  }
  function isQueenSafe(chess, row, col) {
    //vertical
    for (i = row - 1, j = col; i >= 0; i--) {
      if (chess[i][j] == 1) {
        return false
      }
    }
  
    //left Diagonal
    for (i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chess[i][j] == 1) {
        return false
      }
    }
  
    // right Diagonal
  
    for (i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
      if (chess[i][j] == 1) {
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
   
  