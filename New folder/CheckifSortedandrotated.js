function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    // console.log(input)
    const el = input[0]
    const arr = input[1]
    let low = 0
    let high = el - 1
    let ans = -1 //if the value of lowerbound is -1, indicating that the element is not present.
    while (low <= high) {
      // var mid = low + Math.floor((high - low) / 2)
      if((low+high)%2===1)
      {
        var mid=Math.ceil((low+high)/2)
      }
      else
      {
        var mid=(low+high)/2
      }
      let mid_val = arr[mid]
      if (
        (mid === el - 1 || mid_val <= arr[mid + 1]) &&
        (mid === 0 || mid_val <= arr[mid - 1])
      ) {
        ans = arr[mid+1]
         break;
      }
     else if (mid > 0 && mid_val > arr[mid - 1]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    //console.log(ans)
    if(ans>0 && arr[0]>arr[arr.length-1])
    {
      let min=[]
      for(let i=ans;i<arr.length;i++)
      {
       min.push(arr[i])
      }
      let min2=[]
      for(i=0;i<ans;i++)
      {
       min2.push(arr[i])
      }
      min.sort((a,b)=>a-b)
      min2.sort((a,b)=>a-b)
      if(arr[0]==min2[0] && arr[ans]===min[0] && arr[ans-1]==min2[min2.length-1] 
        && arr[arr.length-1]===min[min.length-1])
      {
        console.log("YES")
      }
      else
      {
        console.log("NO")
      }
    }
    else
    {
      console.log("NO")
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
   