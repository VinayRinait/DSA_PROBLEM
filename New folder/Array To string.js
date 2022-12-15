//Enter code here
function runProgram(input){
    var input=input.split("\n");
    var length=+input[0];
    var arr=input[1].split(" ").map(Number);
    arrayToString(length,arr);
    }
    
    function arrayToString(length,arr)
    {
    var bag="";
    for(var i=0;i<length;i++)
    {
    if(arr[i]<0)
    {
    bag=bag+0;
    }
    else
    {
    bag=bag+arr[i];
    }
    }
    console.log(bag);
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
       