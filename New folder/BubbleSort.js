// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split(" ").map(Number)
  //  console.log(input)
  ///-----bubble sort----------
    for(let i=0;i<input.length-1;i++)
    {
        
        for(let k=0;k<input.length-i-1;k++)
        {
          
            if(input[k]<input[k+1])
            {
                 //   let  temp=input[k]
                 //     input[k]=input[k+1]
                 //     input[k+1]=temp
                input[k]=input[k+1]+input[k]  //2*7=5+2//5=>8=3+5
                input[k+1]=input[k]-input[k+1]//5*2=7-5//3=>5=8-3
                input[k]=input[k]-input[k+1]//7*5=7-2// 8=>3 =8-5
            }
        }
    }
   // console.log(input)


    ///-----selection sort------
    var minimum;
    for(let i=0;i<input.length-1;i++)
    {
        minimum=i
        for(let j=i+1;j<input.length;j++)
        {
            if(input[j]>input[minimum])
            {
               minimum=j
            }
        }
        let temp=input[i]
        input[i]=input[minimum];
        input[minimum]=temp
    }
    console.log(input)
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
   