function runProgram(input) {
  input = input.split('\n')
  let test = +input[0].trim()

  let line = 1
  for (let j = 0; j < test; j++) {
    let num =input[line++].trim()
  // console.log(num)
    var p = +superd(num)
    //console.log(p)
    if (superd(p+"")=== "1") {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}
function rep(p) {
  var result = 0
  for (var i = 0; i < p.length; i++) {
    result += (p[i]) ** 2
  }
  return result
}
function superd(p) {
  if (p.length == 1) return p

  return superd(rep(p) + '')
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
 