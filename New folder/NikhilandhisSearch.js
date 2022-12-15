function runProgram(input) {
  input = input.trim().split('\n')

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  // console.log(input)
  let line = 0
  let el = input[line++]
  let arr = input[line++]
  let test = input[line++]
  arr.sort((a,b)=>a-b)
  for(let i=0;i<test;i++)
  {
    let x=input[line++]
   // console.log(x)
    if(x[0]==0)
    {
       let ans=-1
       let low=0;
       let high=el-1;
       let target=x[1]
       while(low<=high)
       {
         let mid=low+Math.floor((high-low)/2)
         if(arr[mid]>=target)
         {
            ans=mid
            high=mid-1
         }
         else
         {
           low=mid+1
         }
       }
       if(ans===-1)
       {
         console.log(0)
       }
       else
       {
        console.log(arr.length-ans)
       }
      
    }
    else
    {
      let ans=-1
      let low=0;
      let high=el-1;
      let target=x[1]
      while(low<=high)
      {
        let mid=low+Math.floor((high-low)/2)
        if(arr[mid]>target)
        {
           ans=mid
           high=mid-1
        }
        else
        {
          low=mid+1
        }
      }
      if(ans===-1)
      {
        console.log(0)
      }
      else
      {
       console.log(arr.length-ans)
      }
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
 