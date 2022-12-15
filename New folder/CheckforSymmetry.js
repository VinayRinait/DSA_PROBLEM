function runProgram(input) {
  input = input.trim().split('\n');
  const tests = Number(input[0]);
  let line = 1;
  for (let i = 0; i < tests; i++) {
    const size = Number(input[line++]);
    const arr = [];
    for (let j = 0; j < size; j++) {
      arr.push(input[line++].trim().split(''));
    }
    let horizontalSymmetry = checkForHorizontalSymmetry(arr, size);
    let verticalSymmetry = checkForVerticalSymmetry(arr, size);
    if (horizontalSymmetry && verticalSymmetry) {
      console.log('BOTH');
    } else if (horizontalSymmetry) {
      console.log('HORIZONTAL');
    } else if (verticalSymmetry) {
      console.log('VERTICAL');
    } else {
      console.log('NO');
    }
  }
  function checkForHorizontalSymmetry(arr, size) {
    let top = 0;
    let bottom = size - 1;
    while (bottom > top) {
      for (let i = 0; i < size; i++) {
        if (arr[top][i] != arr[bottom][i]) {
          return false;
        }
      }
      bottom--;
      top++;
    }
    return true;
  }
  function checkForVerticalSymmetry(arr, size) {
    let left = 0;
    let right = size - 1;
    while (right > left) {
      for (let i = 0; i < size - 1; i++) {
        if (arr[i][left] != arr[i][right]) {
          return false;
        }
      }
      left++;
      right--;
    }
    return true;
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
 