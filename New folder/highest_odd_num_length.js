function runProgram(input) {
    input=input.trim();
    input=input.split(/[\r\n]+/);
    var a=input[0];
    var array=input[1].split(" ")
//   console.log(array)
    var sub=[]
    for(var i=0;i<a;i++)
    {
        var last=[]
        for(var j=i;j<a;j++)
        {
            last.push(array[j])
          //  console.log(last)
          
        }
        console.log(last)
        // if(all_odd(last))
        // {
        //     sub.push(last)
        // }
        
    }
    // console.log(sub)
    // function all_odd(a)
    // {
    //     var count=0;
    //     for(var i=0;i<a.length;i++)
    //     {
    //         if(a[i]%2==1)
    //         {
    //             count++
    //         }
    //     }
    //     if(a.length==count)
    //     {
    //         return true
    //     }
    //     else
    //     {
    //          return false
    //     }
    // }



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
   