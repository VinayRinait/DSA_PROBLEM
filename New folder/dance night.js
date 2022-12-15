//Enter code here
function runProgram(input) {
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(var i =0;i<test;i++){
    var [M,N]=input[line++].trim().split(" ").map(Number);
    var swati=input[line++].trim().split(" ").map(Number);
    var mini=input[line++].trim().split(" ").map(Number);
    DanceNight(M,N,swati,mini);
    }
    }
    function DanceNight(M,N,swati,mini){
    swati.sort((a,b)=>a-b);
    mini.sort((a,b)=>a-b);
    var i=0;
    var j=0;
    var count=0;
    while(i<M&&j<N)
    {
    if(mini[i]<swati[j]){
    count++;
    j++;
    }else{
    j++;
    }
    }
    if(count==M){
    console.log("YES");
    }
    else{
    console.log("NO");
    }
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