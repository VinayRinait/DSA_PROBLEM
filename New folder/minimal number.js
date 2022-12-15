//Enter code here
function runProgram(input){
    input=input.split("\n")
    let tc=+input[0]
    let l=1;
    for(let i=0;i<tc;i++){
        let n=+input[l++]
        let arr=input[l++].split(" ").map(Number).sort((a,b)=>a-b)
        smallest(arr,n)
    }
    function smallest(arr,n){
        let ind=false
        for(let i=0;i<n;i++){
            if(arr[i]==0){
                ind=true
            }else if(ind&&arr[i]>0){
                swap(arr,0,i)
                break
            }
        }
        console.log(arr.join(""))
    }
   function swap(arr,a,b){
        let temp=arr[a]
        arr[a]=arr[b]
        arr[b]=temp
    }
    
}


 

if (process.env.USER === "sanagam") {
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