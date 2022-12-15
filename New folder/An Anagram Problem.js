//Enter code here
function runProgram(input) {
     
    var newInput=input.split("\n");
    var array=newInput.slice(1).map((elem)=>elem.trim());
    
        AnagramProblem(array);
        console.log(box.length);
        console.log(box.sort().join("\n"));
 }
    var box=[];
    
    function AnagramProblem(array){
    var sam={};
    
    for (var x=0; x<array.length; x++)
    {
        
    var str=array[x].split("").sort().join("");
    
    if (!sam[str])
    {
        box.push(array[x]);
        sam[str]=1;
    }
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
  