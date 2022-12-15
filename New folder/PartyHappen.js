function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number);
    }
    let C = input[0][1];
    let R = input[0][2];
    let arr = input[1].sort((a,b)=>a-b);
    CheckPerson(C,R,arr,0);
}
function CheckPerson(people,Amount,Options,start){
     if(people === 0){
       if(Amount >= 0){
           console.log("Party");
       }
       else{
           console.log("Sad");
       }
       return;
     }
     else{
          CheckPerson(people-1,Amount-Options[start],Options,start+1);
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
   