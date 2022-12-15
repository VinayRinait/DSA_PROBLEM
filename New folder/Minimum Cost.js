//Enter code here
function runProgram(input){
    input=input.trim().split("\n");
    var test=+input[0];
    var l=1;
    
    for(var i=0; i<test; i++) 
    {
        var N=+input[l++];
        
        var array=input[l++].trim().split(" ").map(Number);
        console.log(MinimumCost(N,array));
    }
}

function MinimumCost(N,array){
    array.sort((a,b)=>b-a);
    
    var sam=0;
    
    for(var i=0; i<N; i++)
    {
        if(i%3===2)
        {
            continue;
        }
        sam+=array[i];
    }
    return sam;
}

if (process.env.USER === "sangam"){
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input){
      read += input;
    });
    process.stdin.on("end", function (){
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function (){
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  