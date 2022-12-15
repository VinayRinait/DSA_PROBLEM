function runProgram(input) {
    input = input.trim().split('\n')

    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let el=input[0]
    let arr1=input[1]
    let arr2=input[2]
    let flag=true
    for(let i=0;i<el;i++)
     {
         for(let j=0;j<el;j++)
         {
             if(arr1[i]==arr2[j])
             {
                 console.log(arr1[i])
                 flag=false
                 break
             }
         }
         if(flag===false)
         {
             break
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
   