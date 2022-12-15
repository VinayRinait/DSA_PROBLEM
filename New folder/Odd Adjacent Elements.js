//Enter code here
function runProgram(input){
    
    input=input.trim().split('\n') ;
    var [N,m]=input[0].trim().split(' ').map(Number);
    var empt=[];
    var l=1;
    
    for(var i=0; i<N; i++)
    {
      empt.push(input[l++].trim().split(' ').map(Number))
    }
    
    main(empt,N,m);
}
function main(empt,N,m){
    var out=[];
    
    for(var i=0; i<N; i++)
    {
        var array=[];
        
        for(var j=0; j<m; j++)
        {
         array.push(oddAdj(empt,i,j))
        }
        out.push(array.join(' '))
    }
    console.log(out.join('\n'))
}  
function oddAdj(empt,i,j){
    var a=0;
    var b=0;
    var c=0;
    var d=0;
    var sam=0;
    
    if(i+1<empt.length)
    {
       a=empt[i+1][j]
       if(a%2==1)sam++;
    }
    if(i-1>=0)
    {
       b=empt[i-1][j]
       if(b%2==1)sam++;
    }
    if(j+1<empt[0].length)
    {
        c=empt[i][j+1]
        if(c%2==1)sam++;
    }
    if(j-1>=0)
    {
        d=empt[i][j-1]
        if(d%2==1)sam++;
    }
    
    if(sam>=2)
    return empt[i][j]*-1;
    return empt[i][j];
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