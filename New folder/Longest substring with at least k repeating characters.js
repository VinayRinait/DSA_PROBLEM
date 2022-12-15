//Enter code here
function runProgram(input){
    input=input.trim().split("\n")

    var first=input[1].trim().split("")
    var sec=+input[2]
    
    var long=sam(first,sec)
    
    console.log(long)
}
function sam(first,sec){
  var bag = [];
  
    for(let sec of first)
    {
        if(!bag[sec])
        {
             bag[sec]=0;
        }
        
        bag[sec]++;
    }
    
    var y=0;
    var z=0;
    
    var value= true;
    
    for(var a=0; a<first.length; a++) 
    {
        if(bag[first[a]]<sec)
        {
   
            value=false;
            y=a+1;
        }
    }
    if(value)return first.length;
    
    return Math.max(z,sam(first.slice(y),sec));
    
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