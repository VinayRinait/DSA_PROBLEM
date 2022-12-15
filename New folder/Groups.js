//Enter code here
function runProgram(input) {
    input=input.trim().split("\n")
    var test=+input[0];
    var l=1;
    
    for(var i=0; i<test; i++) 
    {
        var output=input[l++].trim().split("0");
        
        console.log(Group(output));
    }
  }

function Group(output){
    
    var sam=0;
    
    for(var i=0; i<output.length; i++) 
    {
        if(output[i]=="") 
        
        {
            sam++
        }
    }
    
    return Math.abs(output.length-sam)
}



if (process.env.USER === "sanagm") {
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