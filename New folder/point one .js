//Enter code here
function runProgram(input){
    input = input.trim().split("\n")
    var test  =+input[0]
    var line =1
    for(var i=0;i<test;i++){
        var n =+input[line++]
        var arr  = input[line++].trim().split(" ").map(Number)
        sam(arr,n)
    }
}
function sam(arr,n){
    var flag = 0
    var bag = 0
    for(var i=0;i<n;i++){
        if(arr[i]==1){
            flag = 1
            bag = i
            break;
        }
    }
    if(flag){
        console.log(bag)
    }
    else{
        console.log(-1)
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