function runProgram(input){
    input =input.trim().split("\n")
    let tc = +input[0]
    let line =1
    for(let i=0;i<tc;i++){
        let n = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
         Dailly(n,arr)
    }
}
function Dailly(n,arr){
    let arr1 = []
    for(let i=0;i<arr.length;i++){
        let count =0
        for(let j=i;j<n;j++){
            if(arr[j]-arr[i]>0){
                count = j-i;
                break
            }
        }
        arr1.push(count)
    }
    console.log(arr1.join(" "))
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
 