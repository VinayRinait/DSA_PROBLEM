//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    var test=+input[0]
    var len=1;
    for(var i=0; i<test; i++)
    {
        var n=+input[len++]
        
       console.log(out(n))
    }
    function out(n)
    {
        while (true)
        {
            if (n==1)
                return true;
 
            n =Sqr(n);
 
            if (n == 4)
        return false;
        }
    }
    function Sqr(n)
    {
        var s=0;
        
        while (n !== 0)
        {
            var val=n%10;
            
            s+=val*val;
            
            n=parseInt(n/10,10);
        }
        return s;
    }
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