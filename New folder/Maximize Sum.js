//Enter code here
function runProgram(input){
    
    input= input.trim().split('\n');
    var test= +input[0];
    var l=1;
    
    for(var i=0; i<test; i++)
    {
        var N=+input[l++]
        var array=input[l++].trim().split(" ").map(Number)
       
        console.log(MaximizeSum(array,N))
    }
    
}

function MaximizeSum(array,N){
  
  array.sort((a,b)=>(a)-(b));
  var out=0;

  for(var i=0; i<array.length; i+=2)
  {
    out+=array[i];
  }
  return out;

}

if (process.env.USER === "sangam"){
  runProgram(``);
 }else{
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input){
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
