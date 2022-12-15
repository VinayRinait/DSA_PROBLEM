function runProgram(input) {
    input = input.trim();
    var a = input.split(/[\r\n]+/);
    var num = a[0]
    var num1 = a[1].split(" ").map(Number);
    var find = []
    var value=[]
    for (var i = 0; i < num; i++) 
    {
        var total = 0
        for (var j = 0; j < num; j++) 
        {
            if (i != j) 
            {
                total = total + num1[j]
            }
            else
            {
                total=total;
            }
        }
        if (total % 7 == 0) 
        {
            find.push(i)
            value.push(num1[i])
        }
    }
    var small = find[0];
    var index=value[0];
    // console.log(find)
    // console.log(value)
    for (var i = 0;i<find.length;i++) 
    {
        if (index>value[i]) 
        {
            small = find[i]
            index=value[i]
        }
    }
    if(small==undefined)
    {
        console.log("-1")
    }
    else
    {
        console.log(small)
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
   