// TC=o[n*m]
function runProgram(input) {

  //ab+c-def-*g/+hij/*+
    input=input.trim().split("")
  //  console.log(input)
  //a+b-c+d*(e-f)/g+(h*(i/j))
    const stack=[];
    const queue=[]
    for(let i=0;i<input.length;i++)
    {

       if(AlfaNumeric(input[i]))
       {
         queue.push(input[i])
       }
        else if(input[i]=="(")
        {
            stack.push(input[i])
        }
        else if(input[i]==")")
        {  
           
            while(stack[stack.length-1]!="(")
            {
              queue.push(stack[stack.length-1])
              stack.pop()
            }
            if(stack[stack.length-1]==="(")
            {
              stack.pop()
            }
        }
        else
        {   
          if(stack.length!==0)
          {
            while(Priority(stack[stack.length-1])>=Priority(input[i]))
            {
              queue.push(stack[stack.length-1]) 
              stack.pop()      
            }
            stack.push(input[i]) 
          }
          else
          {
            stack.push(input[i])
          }  
           //  continue;
        }
    }
    //console.log(queue,stack)
    let str=queue.join("")+stack.join("")
    console.log(str)
   }

   function AlfaNumeric(a)
   {
     let string=a.toString();
     let result=string.charCodeAt(0);
     if(result>=48&&result<=57||result>=65&&result<=90||result>=97&&result<=122)
     {
       return true
     }
     else
     {
       return false
     }
   }


   function Priority(a)
   {
     if(a=="^")
     {
       return 3
     }
     else if(a=="*"||a=="/")
     {
       return 2
     }
     else if(a=="+"||a=="-")
     {
       return 1
     }
     else if(a=="(")
     {
       return 0
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
   