function runProgram(input) {
    input = input.trim().split("\n")
   // console.log(input)
    const [el,target]=input[0].trim().split(" ").map(Number)
    const str=input[1].trim()
    console.log(el,target,str)
    if(target<26)
    {
      for(let i=0;i<el-target;i++)
      {
          let arr=""
          for(let j=0;j<target+i;j++)
          {
              arr+=str[j]
          }
          console.log(arr)
      }

    }
    else
    {
        console.log(0)
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
   