//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    
    var testCase=+input[0]
    var l=1;
    
    for(var x=0; x<testCase; x++)
    {
        var n=+input[l++]
        
        var array=input[l++].trim().split(" ").map(Number)
        
        var my=sam(array,n)
        
        console.log(my.join(" "))
    }
    function sam(array,n){
        
        var out=[];
        
        var jam=1;
        
    for(var x=0; x<n; x++)
    {
        out[x]=jam;
        
        jam*=array[x];
    }
    
    jam=1;
    
    for(var y=n-1; y>=0; y--)
    {
        out[y]*=jam;
        
        jam*=array[y];
    }
    return out;
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

