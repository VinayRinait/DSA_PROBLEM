function runProgram(input) {
  var input = input.trim().split('\n')
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  let test = input[0]

  let line = 1
  for (let j = 0; j < test; j++) {
    let el = input[line++]
    let inc = input[line++]
    let dec = input[line++]
    let inarr = []
    let out = []
    for (let k = 0; k < el; k++) {
      let x = input[line++]
      inarr.push(x[0])
      out.push(x[1])
    }
    //console.log(inarr,out)
    inarr.sort((a, b) => a - b)
    out.sort((a, b) => a - b)
    let sum=0
    for (let k = 0; k < el; k++) {
         if(inarr[k]<=out[k])
         {
             sum+=(out[k]-inarr[k])*inc
         }
         else
         {
            sum+=(inarr[k]-out[k])*dec
         }
    }
    console.log(sum)
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
 