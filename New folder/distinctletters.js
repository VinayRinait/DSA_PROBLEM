function runProgram(input) {
  input = input.trim().split(/[\r\n]+/)
  var arr = []
  var [el, target] = input[0].trim().split(" ").map(Number)
  arr.shift()
  var test = input[1].trim()
  var count = 0;
  if(target>26)
  {
    console.log(0)
  }
  else{
    for (var i = 0; i <= el - target; i++) {
      var obj = {}
      for (var j = i; j < i + target; j++) {
        var data = test[j]
         console.log(data)
        if (obj[data] === undefined) {
          obj[data] = 1
        }
      }
      console.log(obj)
      var count1 = 0
      for (key in obj) {
        count1++
      }
      //  console.log(target,count1)
      if (target == count1) {
        count++
      }
    }
    console.log(count)
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
 