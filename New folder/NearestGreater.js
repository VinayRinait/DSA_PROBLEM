function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for(let i =0; i<input.length; i++){
        input[i] = input[i].trim().split(" ").map(Number);
    }
 //  console.log(input)
 const test=input[0]
 let line=1;
 for(let i=0;i<test;i++)
 {
   let el=input[line++]
   let arr=input[line++]
 console.log(stack(el,arr))
 }
 function stack(el,arr)
 {
   //  console.log(el,arr)
     const stackIs=[]
     str=""

     for(let i=el-1;i>=0;i--)
     {
         if(stackIs.length===0)
         {
             str+="1-"+" "
             stackIs.push(arr[i])
             continue
         }
         for(j=stackIs.length-1;j>=0;j--)
         {
             if(stackIs[j]>arr[i])
             {
                 str+=stackIs[j]+" "
                 break
             }
             stackIs.pop()
         }
         if(stackIs.length===0)
         {
             str+="1-"+" "
         }
         stackIs.push(arr[i])
     }
    var str2="";
    const stackIs1=[]
     for(let i=0;i<el;i++)
     {
         if(stackIs1.length===0)
         {
             str2+="-1"+" "
             stackIs1.push(arr[i])
             continue
         }
         for(j=stackIs1.length-1;j>=0;j--)
         {
             if(stackIs1[j]>arr[i])
             {
                 str2+=stackIs1[j]+" "
                 break
             }
             stackIs1.pop()
         }
         if(stackIs1.length===0)
         {
             str2+="-1"+" "
         }
         stackIs1.push(arr[i])
     }
    // console.log(str2)
     var str1=""
     for(i=str.length-1;i>=0;i--)
     {
       str1+=str[i]
     }
     console.log(str1)
     return str2 
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
   