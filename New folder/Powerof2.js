function runProgram(input) {
    // Write code here
    input = input.trim();
    var a = input.split(/[\r\n]+/)
    var first = a[0]
     
    for(var i=1;i<=first;i++)
    {
        var out=a[i]
        out=Number(out)
        if(out<0)
        {
            console.log("False") 
        }
        else
        {
            for(var j=0;j<out;j++)
            {
                if (2**j>out)
                {
                    console.log("False") 
                }
                else if(2**j==out)
                {
                    console.log("True")
                }
            }
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
   