function runProgram(input) {
  input = +input.trim()
  let chess = []
  for (let i = 0; i < input; i++) {
    let arr = []
    for (let j = 0; j < input; j++) {
      arr.push(0)
    }
    chess.push(arr)
  }
  //console.log(chess)
  NQueen(chess, 0, chess.length)
  console.log(count)
}
let count = 0
function NQueen(arr, row, size) {
  // console.log(arr, row, size)
  if (row === size) {
    // console.log(arr)
     return count++
  }
  for (let i = 0; i < size; i++) {
    if (isQueenSafe(arr, row, i)) {
      // row++
      arr[row][i] = 1
      NQueen(arr, row + 1, size)
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
 