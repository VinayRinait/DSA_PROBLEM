function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim().split(" ").map(Number);
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var [size] = input[line++].trim().split(" ");
    var arr = input[line++].trim().split(" ").map(Number);
    sum(arr, size);
  }
  function sum(arr) {
    //// using SETs concept
    var Sub_Set = new Set(); /// {}
    var first_value = 0;
    var second_value = 0;
    var maximum = 0;
    while (second_value < arr.length) {
      if (!Sub_Set.has(arr[second_value])) {
        Sub_Set.add(arr[second_value]);
      //  console.log(Sub_Set, "add");
        second_value++;
        maximum = Math.max(Sub_Set.size, maximum);
      } else {
        Sub_Set.delete(arr[first_value]);
        first_value++;
      }
    }
    console.log(maximum);
    // }
    //////
    /////// WITH USING OBJECT
    // var first_value = 0;
    // var second_value = 0;
    // var maximum = 0;
    // var obj = {};
    // while (second_value < arr.length) {
    //   obj[arr[second_value]] = 1;
    //   if (obj[arr[second_value]]) {
    //     maximum = Math.max(maximum, second_value - first_value + 1);
    //     second_value++;
    //   } else {
    //     delete obj[arr[first_value]];
    //     first_value++;
    //   }
    // }
    // console.log(maximum);
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
 