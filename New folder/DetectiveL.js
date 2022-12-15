function runProgram(input) {
    input = input.trim().split("\n")
    for (var j = 0; j < input.length; j++) 
    {
        input[j] = input[j].trim().split(" ").map(Number)
    }
    var test = +input[0]
   // console.log(test)
    input.shift()
    for (var i = 0; i < test; i++) {

        var [row, col] = input[0]
      //  console.log(row, col)
        input.shift()
           var str=""
           var vertical=0;
           var horizontal=row
        //   console.log(vertical,horizontal)
           while(vertical<col&&horizontal-1>=0)
           {
            for(var j=vertical;j<=vertical;j++)
            {
                for(var k=0;k<horizontal;k++)
                {
                 str +=(input[k][j])+" "
                }
                break
            }
            for( var j=horizontal-1;j>=0;j--)
            {
                for( var k=vertical+1;k<col;k++)
                {
                    str+=input[j][k]+" "
                }
                
                break
            }
            vertical++;
            horizontal--;
           }
         
           console.log(str)
           for(var j=0;j<row;j++)
           {
               input.shift()
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
   