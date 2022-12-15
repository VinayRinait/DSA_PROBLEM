function runProgram(input) {
    input = input.trim().split("\n")
    var el = +input[0].trim()
    var str = input[1].trim().split(" ").map(Number)
    var chechArr=str.map(el=>{
        return el
    }).sort((a,b)=>a-b).map(Number).join("")
    // console.log(chechArr)
    // console.log(str)
    var flag=false
    if(el>5000)
    {
        console.log("NO")
    }
    else{
        for(let i=0;i<=str.length;i++)
        {
            // var firstArr=str.slice(0,i)
            // console.log(firstArr)
            if(flag===false)
            {
                var j=i+1
                while(j<str.length)
                {
                    var firstArr=str.slice(0,i)
                    var secondArr=str.slice(i,j+1).reverse()
                      var thirdArr=str.slice(j+1)
                      var FinalArr=firstArr.join("")+secondArr.join("")+thirdArr.join("")
                      if(FinalArr===chechArr)
                      {
                          console.log("YES")
                          flag=true
                          break;
                      } 
                      j++
                }
            }
            
        }
        if(flag==false)
        {
            console.log("NO")
        }
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
   