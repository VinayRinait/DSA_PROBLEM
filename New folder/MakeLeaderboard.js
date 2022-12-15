function runProgram(input) {
  input = input.trim().split('\n')
  let test = +input[0].trim()
  input.shift()
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ')
  }
  input.sort((a,b)=>
  {
      a[1]=Number(a[1])
      b[1]=Number(b[1])

      if(b[1]>a[1])
      {
          return 1
      }
      else if(b[1]<a[1])
      {
          return -1
      }
      else if(b[1]==a[1])
      {
          if(b[0]<a[0])
          {
              return 1
          }
          else
          {
              return -1
          }
      }
  })
  let count=1;
  let temp=0
  for(let i=0;i<test;i++)
  {
      
         if(i==0)
         {
             count=count
             temp++
         }
         else if(input[i][1]==input[i-1][1])
         {
             count=count
             temp++
         }
         else
         {
             count+=temp
             temp=1
         }
        let str=count+" "+input[i][0]
        console.log(str)
  }
  //console.log(input)
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
 
