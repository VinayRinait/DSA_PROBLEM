//Enter code here
function runProgram(input){
    input=input.trim().split('\n');
    var [N]=input[0].trim().split(" ").map(Number)
    var l=1;
    var box=[];
    
    for(var i=0; i<N; i++)
    {
      var arr=input[l++].trim().split(" ").map(Number);
       box.push(arr)
     }
    console.log(numArm(box))
   }
function numArm(masai){

    var jack=0;

    for(var i=0; i<masai.length; i++)
    {
        
    for(var j=0; j<masai[0].length; j++)
     {
        if (masai[i][j] == '1') 
     {
        out(masai,i,j);
        
        jack++;
    }}}
    
    return jack;
}

 
function out(masai,i,j){
    
    if (i<0 || i>=masai.length || j<0 || j>=masai[i].length || masai[i][j] =='0')
    {
        return;
    }
    
   masai[i][j]='0';
   
    out(masai,i+1,j);
    out(masai,i-1,j);
    out(masai,i,j+1);
    out(masai,i,j-1);

}


if (process.env.USER === "sangam"){
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