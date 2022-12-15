function runProgram(input) {
    // Write code here
    input=input.trim();
    var a=input.split(/[\r\n]+/)
    var first=a[0]
    var i=1
    
 //   console.log(first)
    while( i<=first)  
    {
         var b=a[i].trim()
         b=Number(b)
         var count=0;
         if(b<0)
         {
            console.log("False")
            count++
            i++
    
         }
         else if( b>0)
         {
            for(var j=0;j<b;j++)
            {
                
                if(2**j==b)
                {
                  if(2**j>b)
                {
                    console.log("False")
                    count++;
                    i++
                }
                    console.log("True")
                    count++
                    i++
                }

                
            }
         }
     
           
    
            if(count==0)
            {
               console.log("False")
               i++;
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
   