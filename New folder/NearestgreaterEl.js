function runProgram(input) {
    input = input.trim().split('\n');
    const tests = +input[0];
    let line = 1;
    for (let i = 0; i < tests; i++) {
      const size = +input[line++];
      const arr = input[line++].trim().split(' ').map(Number);
      nearestGreaterElement(size, arr);
    }
    function nearestGreaterElement(size, arr) {
      const leftGreater = leftGreatestNums(size, arr);
      const rightGreater = rightGreatestNums(size, arr);
      // console.log(leftGreater, rightGreater);
      const nearestGreatest = [];
      let left = -1;
      let right = -1;
      for (let i = 0; i < size; i++) {
        if (leftGreater[i] === -1 && rightGreater[i] === -1) {
          nearestGreatest.push(-1);
        } else if (leftGreater[i] === -1) {
          nearestGreatest.push(arr[rightGreater[i]]);
        } else if (rightGreater[i] === -1) {
          nearestGreatest.push(arr[leftGreater[i]]);
        } else {
          left = i - leftGreater[i];
          right = rightGreater[i] - i;
          if (right < left) {
            nearestGreatest.push(arr[rightGreater[i]]);
          } else {
            nearestGreatest.push(arr[leftGreater[i]]);
          }
        }
      }
      const answer = nearestGreatest.join(' ');
      console.log(answer.trim());
    }
    function leftGreatestNums(size, arr) {
      const leftGreater = [];
      const stack = [];
      for (let i = 0; i < size; i++) {
        if (i === 0) {
          leftGreater.push(-1);
          stack.push([i, arr[i]]);
          continue;
        }
        for (let j = stack.length - 1; j >= 0; j--) {
          if (stack[j][1] > arr[i]) {
            leftGreater.push(stack[j][0]);
            break;
          }
          stack.pop();
        }
        if (stack.length === 0) {
          leftGreater.push(-1);
        }
        stack.push([i, arr[i]]);
      }
      return leftGreater;
    }
    function rightGreatestNums(size, arr) {
      const rightGreater = [];
      const stack = [];
      for (let i = size - 1; i >= 0; i--) {
        if (i === size - 1) {
          rightGreater.push(-1);
          stack.push([i, arr[i]]);
          continue;
        }
        for (let j = stack.length - 1; j >= 0; j--) {
          if (stack[j][1] > arr[i]) {
            rightGreater.push(stack[j][0]);
            break;
          }
          stack.pop();
        }
        if (stack.length === 0) {
          rightGreater.push(-1);
        }
        stack.push([i, arr[i]]);
      }
      const revRightGreater = [];
      for (let i = size - 1; i >= 0; i--) {
        revRightGreater.push(rightGreater[i]);
      }
      return revRightGreater;
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
   