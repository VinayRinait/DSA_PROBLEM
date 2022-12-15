function subarr(arr,n,cur){

    // console.log(arr);
    let sum=0;
    let size=-1;
    let l=0;
    let h=0;

    for(let i=0;i<n-1;i++){
        sum=(arr[i]===0)?-1:1;
        for(let j=i;j<n;j++){
            if(arr[j]===0){
                sum=sum+-1;
            }else{
                sum=sum+1;
            }

            if(sum===0 && size<j-i+1){
                size=j-i+1;
                l=i;
            }
        }
    }

    h=l+size-1;
    if(h===-1){
        console.log("No");
    }else{
        console.log("Yes");
    }

}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let test=+input[0];
    let line=1;
    for(let i=0;i<test;i++){
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        subarr(arr,n);
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
