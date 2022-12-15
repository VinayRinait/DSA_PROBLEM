   function runProgram(input) {
       input=input.trim().split("")
     //  console.log(input)
       var a=[0,1,2,3,4,5,6,7,8,9]
       for(var i=0;i<input.length;i++)
       {
           for(var j=0;j<a.length;j++)
           {
            if(input[i]==a[j])
            {
                input[i]=+input[i]
            }
           }
           
       }
  //     console.log(input)
       var str="";
       for(var i=0;i<input.length;i++)
       {
           if(i%2==0)
           {
               for(var j=0;j<input[i+1];j++)
               {
                  str=str+input[i]
               }
           }
       }
       console.log(str)

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
 