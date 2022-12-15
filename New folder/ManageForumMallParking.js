function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
   // console.log(input)
   let target=input[0]
   let arrive=input[1]
   let left=input[2];
   arrive.sort((a,b)=>a-b)
   left.sort((a,b)=>a-b)
   let i=0;
   let j=0;
   let count=0;
   let ans=0
   while(i<arrive.length && j<arrive.length)
   {
       if(arrive[i]<=left[j])
       {
           count++;
           i++
       }
       else
       {
           count --;
           j++
       }
       ans=Math.max(ans,count)
   }
//    console.log(count)
if(ans===target)
{
    console.log("Possible")
}
else
{
    console.log("Not Possible")
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
   