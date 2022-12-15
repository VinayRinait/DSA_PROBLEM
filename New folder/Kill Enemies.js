//Enter code here
function runProgram(input){
    input=input.trim().split('\n')
    var test=+input[0];
    var line=1;
    
    for(var i=0; i<test; i++)
    {
        var len=+input[line++];
        var array=input[line++].trim().split(' ').map(Number);
        
        KillEnemies(len,array)
    }
}
function KillEnemies(len,array){
    
    var sam=[];
    sam[0]=array[0];
    sam[1]=array[1];
    sam[2]=sam[0]+array[2];
    
    for(var i=3; i<len; i++)
    {
      sam[i]=Math.max(sam[i-3],sam[i-2])+array[i]
    }
    
    console.log(Math.max(sam[sam.length-1],sam[sam.length-2]))
}


if (process.env.USER === "sanagm"){
  runProgram(``);
 }else{
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
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}