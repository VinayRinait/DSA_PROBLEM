//Enter code here
function runProgram(input){
    input=input.trim().split("\n");
    var n=+input[0];
    
    var arr=input[1].trim().split(" ").map(Number);
   
    MarksCompetition(n,arr)
    
}
function MarksCompetition(n,arr){
    var sam=[]
    for(i=0;i<n;++i)
    {
        
    var s=1;
    for(j=i+1;j<n;++j)
        {
    if(arr[i]<arr[j])
    {
    s=0;
    break;
    }
    
    }
    if(s)
    {
    sam.push(arr[i])
    }
    }
    console.log(...sam)
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