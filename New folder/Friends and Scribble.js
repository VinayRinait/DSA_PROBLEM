//Enter code here
function runProgram(input){
    input=input.trim().split('\n')
    var test=+input[0];
    var line=1;
    
    for(var i=0; i<test; i++)
    {
        var l=+input[line++];
        
        var sam1=input[line++].trim();
        var sam2=input[line++].trim();
        
        FriendsandScribble(l,sam1,sam2)
    }
}

function FriendsandScribble(l,sam1,sam2){
    
    var out=[];
    var out1=[];
    
    for(var i=0; i<l; i++)
    {
        if(sam1[i]=="#")
        {
          out.pop()
        }
        else
        {
         out.push(sam1[i])
        }
    }
    
    for(var i=0; i<l; i++)
    {
        if(sam2[i]=="#")
        {
          out1.pop()
        }
        else
        {
          out1.push(sam2[i])
        }
    }
    
    if(out.join("")==out1.join(""))
    
    {
      console.log("CORRECT")
    }
    else
    {
        console.log("WRONG")
    }
}


if(process.env.USER === "sangam"){
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