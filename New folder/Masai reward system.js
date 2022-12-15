//Enter code here
function runProgram(input){
    input=input.split("\n")
    
    var test= +input[0]
    var line =1;
    
    for(var i=0; i<test; i++)
    {
    var n=+input[line++]
    var str=input[line++]
    
    masaiReward(n,str)
}
    function masaiReward(n,str){
        
        var obj ={};
        
        for(var i=0; i<n; i++)
        {
            if(obj[str[i]]==undefined)
            {
                obj[str[i]]=1
            }
            else
            {
                obj[str[i]]++
            }
        }
        var sum=0
       
        for(key in obj)
        {
            if(obj[key]===1)
            {
                sum+=2
            }
            else
            {
                sum=sum+obj[key]+1
            }
        }
        console.log(sum)
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

