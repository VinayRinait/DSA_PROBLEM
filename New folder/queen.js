let count = 0;
function check(board, r, c, n) {
  for (let i = 0; i < n; i++) {
    if (board[r][i]) return true;
  }
  for (let i = 0; i < n; i++) {
    if (board[i][c]) return true;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j === r + c && board[i][j]) return true;
      if (i - j === r - c && board[i][j]) return true;
    }
  }
  return false;
}

function solve(j, board, n) {
  if (n === 0) {
    count = count + 1;
    return true;
  }
  for (let i = 0; i < board.length; i++) {
    // console.log(i,j)
    if (check(board, i, j, board.length)) {
    } else {
      board[i][j] = 1;
      let a = solve(j + 1, board, n - 1);
      board[i][j] = 0;
    }
  }
  return false;
}

function runProgram(input) {
  // Write code here
  let n = +input;
  let board = [...Array(n)].map((e) => Array(n).fill(0));
  let possible = solve(0, board, n);
  //    console.log(possible)
  //    console.log(board)
  console.log(count);
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
 