function runProgram(input){
    
    input=input.trim();
    input=Number(input)
    //     if(input>5)
    //    {
    //     var num2=input/5
    //     num2=Math.floor(num2)
    //     if(input%5==0)
    //     {
    //         var total=num2
    //     }
    //     else
    //     {
    //         var  total=num2+1
    //     }
        
    //    }
    //    else
    //    {
    //      var total=1
    //    }  
    // console.log(total)


    //OR

    var step=0;
    var current=0;
    var destination=input;

    while(current!=destination)
    {
        var max=0;
        for(var i=0;i<=5;i++)
        {
            var temp_position=current+i
            if(temp_position<=destination)
            {
                max=i;
            }
        }
        current=current+max;
        step++
    }
    console.log(step)
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
   