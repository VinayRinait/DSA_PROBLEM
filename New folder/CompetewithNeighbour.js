function runProgram(input) {
  input = input.trim().split('\n')

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  let el = input[0]
  let arr = input[1]
  let count = 0
  for(let i=0;i<el;i++)
  {
      if(i==0)
      {
         if(arr[0]>arr[1])
         {
             count++
         }
      }
      if(i==el-1)
      {
        if(arr[el-1]>arr[el-2])
        {
            count++
        }
      }
      else
      {
          if(arr[i]>arr[i-1]&&arr[i]>arr[i+1])
          {
              count++
          }
      }
  }
  console.log(count)
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
 