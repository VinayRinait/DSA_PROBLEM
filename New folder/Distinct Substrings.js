//Enter code here
function runProgram(input){
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1
    for(var i=0;i<test;i++){
        let size = +input[line++]
        let str = input[line++].trim().split("");
        sam(str,size)
    }
}
function sam(str,size){
    let arr = [];
    for(var i=0;i<size;i++){
        for(var j=0;j<size;j++){
            let bag = ""
            for(var k =i;k<=j;k++){
                bag = bag+str[k]
            }
            if(bag!=[]){
                arr.push(bag)
            }
        }
    }
    let uniqeChar = [...new Set(arr)];
    console.log(uniqeChar.length)
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
 