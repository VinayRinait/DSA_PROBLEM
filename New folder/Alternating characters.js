function runProgram(input){
    input = input.trim().split("\n")
    let tc = +input[0]
    let line = 1
    for(var i=0;i<tc;i++){
        let str = input[line++]
        FindDeleteion(str)
    }
}
function FindDeleteion(str){
    let bag = []
    for(var i=0;i<str.length;i++){
        if(str[i]!=str[i+1])
        bag.push(str[i])
       
    }
    console.log(str.length-bag.length)
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
 