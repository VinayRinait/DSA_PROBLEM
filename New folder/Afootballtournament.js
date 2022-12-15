function runProgram(input) {
  input = input.trim().split("\n")
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].trim()
  }
  var el = +input[0]
  // console.log(input,el)
  input.shift()
  var obj = {};
  for (var i = 0; i < el; i++) {
    for (j = 0; j < input[0].length; j++) {
      var x = input[j]
      if (obj[x] === undefined) {
        obj[x] = 1
      }

      else {
        obj[x]++
      }
    }

    input.shift()
  }
//  console.log(obj)
  var arr = []
  for (key in obj) {
    arr.push(key)
    arr.push(obj[key])
  }
  if(obj.length==4)
  {
    if (arr[3] > arr[1]) {
      console.log(arr[2])
    }
    else {
      console.log(arr[0])
    }
  }
  else {
    console.log(arr[0])
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
 