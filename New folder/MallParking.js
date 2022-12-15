function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 1; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }   
        let k=+input[0].trim()
        let arrive=input[1]
        let depart=input[2]
        arrive.sort((a,b)=>a-b)
        depart.sort((a,b)=>a-b)
        let i=0;
        let j=0;
        let count=0;
        let ans=true
        while(i<arrive.length && j<arrive.length)
        {
            if(arrive[i]<=depart[j])
            {
                count++;
                i++
                if(count>k)
                {
                    console.log("Not Possible")
                    ans=false;
                    break;
                }
            }
            else
            {
                count --;
                j++
            }
        }
        if(ans)
        {
            console.log("Possible")
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
     