function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number);
    }
    let arr=input[1]
    let el=input[0]
     let sum=0;
     let min=arr[0]
     for(let i=0;i<el;i++)
     {
      // console.log(arr[i],",,,,,,,",min)
        if(arr[i]<min)
        {
          min=arr[i]
        }
        sum+=min
     }
     console.log(sum)
  
  
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
 