function runProgram(input) {
  var input = input.trim().split('\n')
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  let el = input[0]
  let arr = input[1]
  let low = 0
  let high = el - 1
  let ans = -1
  while (low <= high) {
    if((low+high)%2===1)
    {
      var mid=Math.ceil((low+high)/2)
    }
    else
    {
      var mid=(low+high)/2
    }
    let  mid_val = arr[mid]
   // console.log(mid,mid_val)
    if (
        (mid === el - 1 || mid_val <= arr[mid + 1]) &&
        (mid === 0 || mid_val <= arr[mid - 1])
    )
     {
        ans = mid

      break
    } else if (mid > 0 && mid_val > arr[mid - 1]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  console.log(ans)
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
 