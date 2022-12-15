function runProgram(input) {

  input = input.trim();

  var count = 0;





  for (var i = 0; i < input.length; i++) {
    var count1 = 0;
   
      if (input[i] == input[j]) {
        count1++
      }
      else {
        break
      }
  
    if (count1 == input.length) {
      count = count1
      break
    }
    else if (count1 > count) {
        count = count1
    }

  }
  console.log(count)


  // var max = 0;
  // var i = 0;
  // var r = 0;
  // while (i < input.length || r < input.length) {
  //     if (input[i] == input[r]) {
  //         var count = 0;
  //         while (input[i] == input[r]) {
  //             count += 1;
  //             r += 1;
  //         }
  //         i = r;
  //     } else {
  //         i = r;
  //     }
  //     max = Math.max(count, max);
  // }
  // console.log(max);
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
 