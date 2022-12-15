//Enter code here
function runProgram(input){
    input = input.trim().split(" ")
    var sam = ""
    sam += input

const suballstring = "420";

if(sam.includes(suballstring)){
          console.log("Caught")
}else{
          console.log("Escaped")
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
   