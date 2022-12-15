//Enter code here
function runProgram(input){
   input = input.trim().split("\n")
   let n = +input[0]
   let arr =  input[1].trim().split(" ").map(Number)
   let ans = recursiveSort(arr,n)
   console.log(ans.join(" "))
}

function recursiveSort(arr,n){
 if(n === 1){
   return arr
 }
 
 for(let i=0; i<n-1; i++){
   if(arr[i] > arr[i + 1]){
       swap(arr, i)
   }
 }
 return recursiveSort(arr, n-1);
}

function swap(arr, i){
   let temp = arr[i]
   arr[i] = arr[i+1]
   arr[i+1] = temp
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
 