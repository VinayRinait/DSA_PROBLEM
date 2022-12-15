//Enter code here
function runProgram(input){
    var input1=input.trim().split("\n");
    
    var test=+input1[0].trim();
    var line=1;
    
    for(var i=0; i<test; i++) 
    {
        var n=+input1[line++].trim();
        
        var c=input1[line++].trim().split(" ").map(Number);
        
        var m=+input1[line++].trim();
        
        var arr1=input1[line++].trim().split(' ').map(Number);
        
        fool(n,c,m,arr1);
    }
}


function fool(n,c,m,arr1){
    
    for(var i=0; i<m; i++)
    {
        for(var j=0; j<arr1[i]; j++)
        {
            var x=c.shift();
            
            c.push(x);
        }
    }
    console.log(c.shift());
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

