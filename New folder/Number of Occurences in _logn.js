//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    
   var[N,t]=input[0].trim().split(" ").map(Number)
   var array=input[1].trim().split(" ").map(Number)
   
   var sam=0;
   
  for(var i=0; i<N; i++)
  {
      if(array[i]==t)
      {
          sam++
      }
  } 
  console.log(sam)
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