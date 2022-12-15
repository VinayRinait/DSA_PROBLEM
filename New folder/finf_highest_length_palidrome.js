function runProgram(input) {
    input = input.trim();
    var a=[];
    for (var i=0;i<input.length;i++)
    {
        var string=""
        for(var j=i;j<input.length;j++)
        {
            string=string+input[j]
            // console.log(string)
            str=""
            for(var k=string.length-1;k>=0;k--)
            {
                 str=str+string[k]

                 if(string==str)
                 {
                     a.push(string)
                 }
            }
            // console.log(str)
        }
       
    }
var length=a[0].length
for(var i=0;i<a.length;i++)
{
    if(a[i].length>length)
    {
        length=a[i].length
        var final=a[i]
    }
}
//  console.log(final)
 console.log(length)

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
   