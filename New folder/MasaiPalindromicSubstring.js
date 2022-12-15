function runProgram(input) {
    input = input.trim();
     var array=[];
     var array2=[];
     for (var i=0;i<input.length;i++)
     {
         var string="";
        //  console.log(1)
         for(var j=i;j<input.length;j++)
         {
            // console.log(1)
            string=string+input[j]
            array.push(string)
         }
     }

     for(var i=0;i<array.length;i++)
     {
         var string="";
         for(var j=array[i].length-1;j>=0;j--)
         {
             string=string+array[i][j]
         }

         if(array[i]==string)
         {
             array2.push(array[i])
         }
        // array[i]==string?array2.push(array[i]):""
        
     }

     var max=0;
     for( var i=0;i<array2.length;i++)
     {
         if(array2[i].length>max)
         {
             max=array2[i].length
         }
     }
     console.log(max)



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
  