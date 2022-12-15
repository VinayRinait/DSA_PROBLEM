function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = +input[i].trim().split(' ')
    }
    // console.log(input)
    const el = input[0]
    const arr=[];
    const ansArr=[]
    let line=1;
    let sum=0
    for(let i=0;i<el;i++)
    {
        arr.push(input[line])
        sum+=input[line]
        ansArr.push(sum);
        line++     
    }
    
    arr.sort((a,b)=>a-b)
    ansArr.sort((a,b)=>a-b)
  //console.log(arr,ansArr)
    let test=input[line++]
    for(let i=0;i<test;i++)
    {
       
      let target=input[line++]
      //  console.log(target)
       let low = 0
       let high = el - 1
       let ans = -1 //if the value of Upper is -1, indicating that the element is not present.
       while (low <= high) {
         if((low+high)%2===1)
         {
           var mid=Math.ceil((low+high)/2)
         }
         else
         {
           var mid=(low+high)/2
         }
        if (arr[mid] === target) {
          ans = mid;
          low=mid+1; 
        }
        if (arr[mid] < target) {
         ans = mid
          low=mid+1; 
        } else
        {
            high = mid - 1
        }
      }
      //console.log(ans+1)
      if(ansArr[ans+1])
      {
        console.log(arr[ans]+" "+ansArr[ans])
      }
      else
      {
        console.log(arr[ans]+" "+ansArr[ansArr.length-1])
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
   