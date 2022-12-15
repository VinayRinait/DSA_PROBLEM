function runProgram(input) {
    input = input.trim().split("\n")
    var test = +input[0].trim()
    input.shift()
    for(var i=0;i<test;i++)
    {
        var el=+input[0].trim()
      //  console.log(el)
        input.shift()
        var str = input[0].trim().split(" ").map(Number)
       //  console.log(el,str)
         input.shift()
        var arr2=[]
        for (var j = 0; j < el; j++) {
            arr2.push(str[j])
        }
        arr2=arr2.map(Number)
       //  console.log(arr2)
        for (var k = 0; k < el - 1; k++) {
            for (var j = 0; j < el - 1 - k; j++) {
                if (str[j] > str[j + 1]) {
                    str[j] = str[j] + str[j + 1];
                    str[j + 1] = str[j] - str[j + 1];
                    str[j] = str[j] - str[j + 1]
                }
            }
        }
      // console.log(str)
      var x=""
       for( let j=0;j<arr2.length;j++)
       {
          // console.log(arr2[j])
        //   console.log(str.indexOf(arr2[j]))
        x=x+(j-str.indexOf(arr2[j]))+" "
       }
       console.log(x.trim())

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
   