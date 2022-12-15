function makeSub(arr,n){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            sum=sum+1;
        }else{
            sum=sum-1;
        }
    }

    let obj={
        0:-1,
        1:1
    }

    let l=0;
    let h=n-1;

    while(l<h){
        if(sum===0){
            console.log(h-1);
            break;
        }
        if(sum-obj[arr[l]]===0){
            console.log(h-l);
            break;
        }else if(sum-obj[arr[h]]===0){
            console.log(h-l);
            break;
        }else{
            sum=sum-obj[arr[l]]-obj[arr[h]];
            l++;
            h--;
        }
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
        // console.log(arr,n);
        makeSub(arr,n);
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
   