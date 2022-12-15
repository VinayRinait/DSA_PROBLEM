//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    
    var test=+input[0]
    var l=1;
    
    for(var i=0; i<test; i++)
    {
        var [N,S]=input[l++].split(" ").map(Number)
        var masai=input[l++].split(" ").map(Number)
        var val=input[l++].split(" ").map(Number)
        
        sam(N,S,masai,val)
    }
    
    function sam(N,S,masai,val){
        
        var arr=[];
        
        for(var i=0; i<N; i++)
        {
            for(var j=0; j<S; j++)
            {
            if(masai[i]==val[j])
            {
            arr.push(val[j])
            delete val[j]
        }}}
        
        var out=[];
        
       for(var i=0; i<S; i++)
       {
           
           if(val[i])
           {
               out.push(val[i])
           }
       }
       
       out=out.sort((a,b)=>a-b)
     
       for(var x=0; x<out.length; x++)
       {
          arr.push(out[x])
       }
       console.log(arr.join(" "))
    }
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