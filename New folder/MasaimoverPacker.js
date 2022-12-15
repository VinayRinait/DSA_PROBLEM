let sum=0;
let max=-Infinity;
let min=Infinity;
function ways(arr,n,k,cur){
    // console.log(k);

    if(k===0){
        // console.log("sum",sum)
        
        if(min>sum){
            min=sum;
        }
        if(max<sum){
            max=sum;
        }
        sum++;

        return;
    }

    if(k<0){
        return;
    }
    
    for(let i=0;i<n;i++){
        ways(arr,n,k-arr[i],cur+1);
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [k,n]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
    // console.log(n,k,arr);
    ways(arr,n,k,0);
    // console.log(sum,min,max);
    if(sum===0){
        console.log(-1);
    }else{
        console.log(min+1,max);
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
  