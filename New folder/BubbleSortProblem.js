function runProgram(input) {
    input = input.trim().split("\n")
    var el=+input[0].trim();
    var arr=input[1].trim().split(" ").map(Number)
   // console.log(el,arr)
   for(var i=0;i<el-1;i++)
   {
     for(var j=0;j<el-1-i;j++)
     {
       if(arr[j]>arr[j+1])
       {
         arr[j]=arr[j]+arr[j+1]
         arr[j+1]=arr[j]-arr[j+1]
         arr[j]=arr[j]-arr[j+1]
       }
     }
   }
   //console.log(arr)
   var str=""
   for(var i=0;i<arr.length;i++)
   {
       str=str+arr[i]+" "
   }
   console.log(str.trim())
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
   