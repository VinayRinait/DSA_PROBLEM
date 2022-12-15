//Enter code here
function runProgram(input){
    
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    var str=input[line]
   

    LeftRightInsertion(test,str);
	console.log();
}

function LeftRightInsertion(n,str){
    var out=[];
    
    out[0]=0;
for(var i=0; i<n; i++)
{
    if(str[i]=="L")
    {
        var a ;
        out.forEach((el,x)=>{if(el==i){a=x}})
        out.splice(a,0,i+1)
    }
    else if(str[i]=="R")
    {
        //   var a ;
        out.forEach((el,x)=>
        {
         if(el==i){a=x}})
        out.splice(a+1,0,i+1)
    }
}
console.log(out.join(" "))
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
  
