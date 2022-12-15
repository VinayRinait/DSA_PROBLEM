//Enter code here
function runProgram(input) {
    
    input=input.trim().split("\n");
    var [first,second]=input[0].trim().split(" ").map(Number);
    
    var patt=[];
    for(var x=1; x<=first; x++)
    {
        patt.push(input[x].trim().split(" ").map(Number));
    }
    
    ColumnMinimum(first,second,patt);
}

function ColumnMinimum(first,second,patt){
    
    var bag=[];
    for(var a=0; a<second; a++)
    {
    var sam=patt[0][a];
    
    for(var b=0; b<first; b++)
    {
        if(patt[b][a]<sam)
        {
            sam=patt[b][a];
            }
        }
    bag.push(sam);
        
    }
    console.log(bag.join(" "));
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