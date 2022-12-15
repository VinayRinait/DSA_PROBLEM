function runProgram(input) {
    var input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim()
    }
    let test = input[0]
    let line=1;
    for(let i=0;i<test;i++)
    {
        let el=+input[line++]
        let str=input[line++].trim().split("")
        //console.log(str)
        let low=0;
        let high=el-1
        let ans=code(low,high,str)
        console.log(ans)
    }
  }
  function code(low,high,str)
  {
      if(low==high)
      {
          return str[low]
      }
      else
      {
        if(low<high){
            var mid=Math.floor((low+high)/2)
            return str[mid]+code(low,mid-1,str)+code(mid+1,high,str)
        }
        else
            return ""
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
   