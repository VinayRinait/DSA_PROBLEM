// TC=o[n*m]
function runProgram(input) {
  input=input.trim().split("\n")
  for(let i=0;i<input.length;i++)
  {
      input[i]=input[i].trim().split(" ").map(Number)
  }
  //console.log(input)
  let test=input[0]
  input.shift()
  const stack=[]
  var max=[];
  
  for(let i=0;i<test;i++)
  {
      let x=input[i]
      var flag=false
       if(x[0]==1)
       {
           stack.push(x[1])
           if(max[max.length-1]<=x[1]||max[max.length-1]===undefined)
           {
               max.push(x[1])
           }
       }
       else if(x[0]==2)
       {  
           if(stack[stack.length-1]==max[max.length-1])
           {
              flag=true
           }
           stack.pop()
           if(flag===true)
           {
               max.pop()
           }
       }
      else if(x[0]==3)
      {
         console.log(max[max.length-1])  
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
 