function runProgram(input)
{
  input=input.trim().split(/[\r\n]+/)
  var array=[]
  for(var i=0;i<input.length;i++)
  {
      array.push(input[i].split(" ").map(Number))
  }
  var count=0;
  for(var i=1;i<=array[0][0];i++)
  {
      var sum=0;
      for(var j=0;j<array[0][1];j++)
      {
          sum=sum+array[i][j]
          
       //  console.log(array[i][j])
      }
    //   console.log(sum)
    //   console.log()
      if(sum==array[0][2])
      {
          count++
      }
  }
  for(var i=0;i<array[0][1];i++)
  {
      var sum=0
      for(var j=1;j<=array[0][0];j++)
      {
          sum=sum+array[j][i]
         // console.log(array[j][i])
      }
      if(sum==array[0][2])
      {
          count++
      }
  }
   
  var sum=0;
  for(var i=1;i<=array[0][0];i++)
  {
      
      for(var j=0;j<array[0][1];j++)
      {
          if(i-1==j)
          {
           // console.log(array[i][j])
            sum=sum+array[i][j]
           
          }    
      }
    //  console.log(sum)
    //   console.log()
      if(sum==array[0][2])
      {
          count++
      }
  }
var count1=0;
var sum=0;
for(var i=1;i<=array[0][0];i++)
  {
      
      for(var j=array[0][1]-1;j>=0;j--)
      {
           if(count1==i-1)
           {
           // console.log(array[i][j])
            sum=sum+array[i][j]
            break;
           }
            
      }
      count1++
    //  console.log(sum)
    //   console.log()
      if(sum==array[0][2])
      {
          count++
      }
  }


  console.log(count)

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
 

