function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    let high = input[0] - 1
    let low = 0;
    let arr = input[1]
  console.log(quick_Sort(arr, low, high).join(" "))
}
function quick_Sort(arr,low,high)
{
   
    if(low<high)
    {
        var p=partitionArr(arr,low,high)
        quick_Sort(arr,low,p-1)
        quick_Sort(arr,p+1,high)     
    }
     return arr
}
function partitionArr(arr,low,high)
{
    let pivot=arr[high]
    var i=low
    for(j=low;j<high;j++)
    {
        if(arr[j]<=pivot)
        {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i=i+1
        }

    }
  
    let temp=arr[i];
    arr[i]=arr[high]
    arr[high]=temp 
   
    return i
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
   