//Enter code here
function runProgram(input){
    input=input.trim().split("\n");
    var [data,mini]=input[0].trim().split(" ").map(Number);
    var myarr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    count(myarr,mini,data);
    }
    function count(myarr,mini,data){
    let bag=0;
    for(let k=0;k<data;k++){
    if(myarr[k]<mini){
    bag++;
    }
    mini=mini-myarr[k];
    }
    console.log(bag);
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