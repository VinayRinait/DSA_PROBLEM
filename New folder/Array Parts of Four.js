//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    var n=+input[0]
    var list=input[1].split(" ").map(Number)
    const threePartIndex = Math.ceil(list.length / 4);
    
    const c4=list.splice(-threePartIndex);
    const c3 = list.splice(-threePartIndex);
    const c2 = list.splice(-threePartIndex);

const c1= list;

    var c1v=c1.reduce((a,b)=>{return a+b},0)
    var c2v=c2.reduce((a,b)=>{return a+b},0)
    var c3v=c3.reduce((a,b)=>{return a+b},0)
    var c4v=c4.reduce((a,b)=>{return a+b},0)
    
    console.log(2*c1v+ c2v + 2*c3v + c4v)
    
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