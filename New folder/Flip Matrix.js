//Enter code here
function runProgram (input){
    input= input.trim().split("\n")
    var n=input[0]
    var l=1;
    for(var i=0; i<n; i++){
        var arr= input[l++].trim().split(" ").map(Number)
        
        arr= arr.reverse()
        
        sam(arr)
    }
    
    function sam(arr){
        
        arr1=[];
        for(var i=0; i<arr.length; i++){
            if(arr[i] ==0){
                arr1.push(1)
            }
            else{
                arr1.push(0)
            }
        }
        console.log(arr1.join(" "))
    }
}

if (process.env.USER === "sangam"){
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