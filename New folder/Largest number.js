//Enter code here
function runProgram(input){
    input=input.split("\n")
    var test=input[0]
    var l=1;
    var sam=[];
    
    for(var i=0; i<test; i++)
    {
      var N=+input[l++]
      sam.push(N)
    }
   var out=Largestnumber(sam)
   
   console.log(out)
    
    function Largestnumber(sam){
        
        sam.sort((a,b)=>{
            
        return (b +""+a)-(a+""+ b);
    });

    if(sam[0]===0)
    {
     return '0';
    }

    return sam.join('')
      
    }
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
