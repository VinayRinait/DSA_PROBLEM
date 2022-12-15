function runProgram(input)
{
  input=input.trim();
  input=input.split("\n");
  var a=input[0];
  for(var i=1;i<input.length;i++)
  {
     if(i%2==1)
     {
         var b=input[i]//
     }
     else{
         var arr=input[i].split(" ")
         for( var j=0;j<=arr.length-3;j++)
         {
             if(arr[j]%2==0&&arr[j+1]%2==0&&arr[j+2]%2==0)
             {
                 console.log("Yes")
                 break;
             }
             else if(arr.length-3==j)
             {
                 console.log("No")
             }
         }
       
     }
  
    
  }
  //2
  //3
  //1 2 3
  //5
  // 1 2 4 6 8


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
   