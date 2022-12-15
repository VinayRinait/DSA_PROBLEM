function runProgram(input) {
  //Enter your code here
  input = input.split('\n')
  var t = Number(input[0])
  var line = 1
  var inc = 3
  var dec = 5
  for (var i = 0; i < t; i++) {
    var [n, k] = input[line++].trim().split(' ').map(Number)
    var arr = input[line++].trim().split(' ').map(Number)
    //console.log(n,k,arr)
    var res = findCost(arr, n, k)
    console.log(res)
  }
  function findCost(arr, n, k) {
    var minSum = []
    console.log(arr, n, k)
    for (var j = 0; j < n; j++) {
      var costArr = []
      for (var i = 0; i < n; i++) {
        if (arr[j] <= arr[i]) {
          costArr.push((arr[i] - arr[j]) * dec)
        } else {
          costArr.push((arr[j] - arr[i]) * inc)
        }
      }
      console.log(costArr)
      costArr.sort((a, b) => a - b)
      //console.log(costArr)
      var sum = 0
      console.log(k)
      for (var i = 0; i < k; i++) {
        sum += costArr[i]
      }
      // console.log(sum)
      minSum.push(sum)
      // console.log(minSum)
    }
    return Math.min(...minSum)
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