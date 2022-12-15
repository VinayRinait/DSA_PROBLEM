function runProgram(input) {
    input= input.trim().split("\n")
    let [el,key]=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number)
   // console.log(el,key,arr)
   let low=0;
   let high=el-1;
   let flag=true
   while(low<=high)
   {
      let mid=Math.floor((low+high)/2)
      let mid_val=arr[mid] 
     // console.log(mid,mid_val)
      if(mid_val===key)
      {
            console.log(1)
            flag=false
            break
      }
      else if(mid_val<key)
      {
          low=mid+1
      }
      else
      {
          high=mid-1
      }
   }
   if(flag===true)
   {
    console.log(-1)
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
       