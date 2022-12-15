//Enter code here
function runProgram(input){
    input = input.trim().split("\n");
    var testCase = +input[0];
    var line=1;
    
    for(var i=0; i<testCase; i++) 
    {
        var array=input[line].trim().split(' ').map(Number);line++;
        
        raceDay(array);
    }
}

function raceDay(array){
    var sam=0;
    
    for(var i=0; i<array.length; i++)
    {
        if(array[0]<array[i])
        {
            sam++;
        }
    }
    console.log(sam);
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


