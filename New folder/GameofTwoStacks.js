// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
   // console.log(input)
   let test=input[0]
   input.shift()
   for(let i=0;i<test;i++)
   {
       let[el,el2,target]=input[0]
       let str=input[1]
       let str2=input[2]
       let sum=0
       const stack=[];
       const stack2=[];
       const stack3=[]
         for(let j=0;j<el;j++)
         {
            sum+=str[j]
            if(sum<=target)
            {
                stack.push(sum)
                stack2.push(str[j])
                stack3.push(sum)
            }
         }
         console.log(stack,stack2,stack3)
         for(let j=0;j<el2;j++)
         {    
             let flag=true
              var y=stack3[stack3.length-1]+str2[j]
              console.log(y)
              if(y<=target)
              {
                stack3.push(y)
                stack2.push(str2[j])
              }
              flag=false
              if(flag==false){
                 stack3[stack3.length-1] = stack3[stack3.length-1]
              }
              else
              {
        
                  stack3.pop()
                  stack2.pop()
                  let flag1=true
                  var x=(stack3[stack3.length-1]+str2[j])
                  console.log(x)
                  if(x<=target)
                  {
                    stack3.push(x)
                    stack2.push(str2[j])
                  }
                  flag1=false
                  if(flag1==false){
                    stack3[stack3.length-1] = stack3[stack3.length-1]
                 }
              }
         }
         console.log(stack,stack2,stack3)
       
       //console.log(stack.length)
       input.shift()
       input.shift()
       input.shift()
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
   