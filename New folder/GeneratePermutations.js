function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    let start = 0
    let end = input[0] - 1
    let arr = input[1]
    permulationArr(arr, start, end)
  // const final=[]
    console.log(final)
    let x=final.sort()
   for(let i=0;i<x.length;i++ )
   {
       x[i]=x[i].trim().split("")
       console.log(x[i].join(" "))
   }

}
const final=[]
function permulationArr(arr, start, end) {
    // console.log(start,end)
    
    if (start === end) {
      //  console.log(arr.join(" "))
        final.push(arr.join(""))
        return
    }
    for (let j = start; j <= end; j++) {
        let temp = arr[j]
        arr[j] = arr[start]
        arr[start] = temp
        permulationArr(arr, start + 1, end)
      
            let temp1 = arr[j]
            arr[j] = arr[start]
            arr[start] = temp1
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
   