function runProgram(input) {
    input = +input.trim()
    //console.log(input)
     let size=input
     let num=size
    // console.log(size)
    let str=1;
    for(let i=0;i<size;i++)
    {
      let pair="";
      for(let j=0;j<num;j++)
      {
          pair+=" "
      }
      num--;
      for(let j=0;j<str;j++)
      {
          pair+="* "
      }
      str++
      console.log(pair)
    }
   let str2=input-1
   let num2=1
   for(let i=size-1;i>=0;i--)
   {
     let pair="";
     for(let j=num2;j>=0;j--)
     {
         pair+=" "
     }
     num2++;
     for(let j=0;j<str2;j++)
     {
         pair+="* "
     }
     str2--
     console.log(pair)
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
   
//              * 
//             * * 
//            * * * 
//           * * * * 
//          * * * * * 
//         * * * * * * 
//        * * * * * * * 
//       * * * * * * * * 
//      * * * * * * * * * 
//     * * * * * * * * * * 
//      * * * * * * * * * 
//       * * * * * * * * 
//        * * * * * * * 
//         * * * * * * 
//          * * * * * 
//           * * * * 
//            * * * 
//             * * 
//              * 