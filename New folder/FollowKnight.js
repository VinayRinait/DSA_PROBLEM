// function findPossibleMoves(mat, p, q)
// {
//     // All possible moves of a knight
//     let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
//     let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

//     let count = 0;

//     // Check if each possible move is valid or not
//     for (let i = 0; i < 8; i++) {

//         // Position of knight after move
//         let x = p + X[i];
//         let y = q + Y[i];

//         // count valid moves
//         if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0)
//             count++;
//     }
//        // Return number of possible moves
//        return count;
// }

function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number);
    }
    input = input[0];
    let obj = {};
    let ans = Possiblemove([input[0], input[1]], input[2], obj);
    console.log(ans);
}
function Possiblemove(arr, moves, obj){
   // console.log(arr,moves, obj)
    if (moves === 0 && obj[`${arr[0]}_${arr[1]}`] === undefined) {
        obj[`${arr[0]}_${arr[1]}`] = 1;
            return 1;
    }
    let res = 0;
    if(moves > 0){
    let ansindex = [[2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2]];
    for (let i = 0; i < ansindex.length; i++) {
      // console.log(ansindex[i][0],arr[0])
        if ((ansindex[i][0] + arr[0]) <= 10 && (ansindex[i][0] + arr[0]) >= 1 && (ansindex[i][1] + arr[1]) <= 10 && (ansindex[i][1] + arr[1]) >= 1){
           // console.log(ansindex[i][0],arr[0],"Insdie",arr[1],ansindex[i][1])
            res = res + Possiblemove([(ansindex[i][0] + arr[0]), (ansindex[i][1] + arr[1])], (moves - 1), obj);
            //console.log(res)
        }
    }
}
    return res;
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
   