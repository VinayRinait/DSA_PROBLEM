//Enter code here
function runProgram(input){
    input=input.trim().split("\n");
    var testCase=+input[0];
    var line=1;
    for(var i=0;i<testCase;i++)
    {
       var [N,s]=input[line].trim().split(" ").map(Number);
       line++;
       
       var arr=input[line].trim().split(" ").map(Number);
       line++;
       
       MinimumExpense(N,s,arr);
    }}

    function MinimumExpense(N,s,arr)
    {
    var add=0;
    for(var x=0; x<s; x++)
    {
      add=add+arr[x];
    }
  var result=0;
  
  var sam=add;
  
  for(var y=s; y<N; y++)
  {
    add=add+(arr[y]-arr[result]);
    result++;
    if(add<sam)
    {
        sam=add;
    }
  }
  console.log(sam);
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
  