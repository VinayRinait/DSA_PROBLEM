function solve(arr) {
    let virat = 0;
    let ab = 0;
    let turn = true; //true for ab, false for virat

    for (let i = 0; i < arr.length; i++) {
        if (turn) ab += arr[i];
        else virat += arr[i];

        if (arr[i] === 1 || arr[i] === 3) turn = !turn;

        if ((i + 1) % 6 === 0) {
            turn = !turn;
        }
    }
    // console.log(ab, virat);
    if (virat > ab) console.log("Virat Kohli");
    else if (ab > virat) console.log("AB de Villiers");
    else console.log("Tie");
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        solve(arr);
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
  