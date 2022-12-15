//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    var test=+input[0];
    l=1;
    
    for(var i=0; i<test; i++)
    {
        var[N,k]=input[l++].trim().split(" ").map(Number);
        var array=input[l++].trim().split(" ").map(Number);
        
        FindMeInSorted(N,k,array)
    }
    
  }
 function FindMeInSorted(N,k,array) {
     
    var out=0;
    
    for(var i=0; i<array.length; i++)
    
    {
        if(array[i] < array[k])
        
        {
            out++
        }
        
        if(array[i] == array[k] && i<k)
        
        {
            out++
        }
    }
    
    console.log(out)
    
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


 