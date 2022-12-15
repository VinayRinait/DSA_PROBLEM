
function runProgram(input) {
    input = + input;
    let chessboard = [];
    for (let i = 0; i < input; i++) {
        let arr = [];
        for (let j = 0; j < input; j++) {
            arr.push(0);
        }
        chessboard.push(arr);
    }
    let countsarr = [];
    GetCounts(chessboard, 0, input, countsarr, 0);
    console.log(countsarr.length);
}
function GetCounts(arr, row, size, count, n) {
    if (row === size) {
        // if (n === size) {
            count.push(1);
            return
        // }
    }
    for (let i = 0; i < size; i++) {
        if(isQueenSafe(row, i, arr, size)){
            let newarr = arr.map(el => {
                return [...el];
            })
            newarr[row][i] = 1;
         GetCounts(newarr, row + 1, size, count, n + 1);
        }
    }
}
function isQueenSafe(row, column, arr, Size) {
    if (StraightCheck(row, column, arr) && leftDiagonal(row, column, arr) && RightDiagonal(row, column, arr, Size)) {
        return true
    }
    return false;
}
function StraightCheck(row, column, arr) {
    while (row >= 0 && column >= 0) {
        if (arr[row][column] === 1) {
            return false;
        }
        row--;
    }
    return true;
}
function leftDiagonal(row, column, arr) {
    while (row >= 0 && column >= 0) {
        if (arr[row][column] === 1) {
            return false;
        }
        row--;
        column--;
    }
    return true;
}
function RightDiagonal(row, column, arr, Size) {
    while (row >= 0 && column < Size) {
        if (arr[row][column] === 1) {
            return false;
        }
        row--;
        column++;
    }
    return true;
}