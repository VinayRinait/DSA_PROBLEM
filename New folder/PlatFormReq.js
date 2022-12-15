function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ')
    }
    // console.log(input)
    let el=+input[0]
    input.shift()
    for(let i=0;i<input.length;i++)
    {
        let x=input[i]
        for(let j=0;j<el;j++)
        {
            x[j]=x[j].trim().split(":").map(Number)
        }
    }
    console.log(input)
   let come=input[0]
   let left=input[1]
   let count=0
   var max=0
   //console.log(come)
  for(let i=0;i<el;i++)
  {
       if(left[i]>come[i+1])
       {
           count++
       }
    // for(let j=i+1;j<el;j++)
    // {
    //     if(left[i]>come[j])
    //     {
    //         max++
    //     }
    // }
  }
 // console.log(max)
  console.log(count+1)
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
   