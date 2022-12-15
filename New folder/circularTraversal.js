function circularTraversal(arr,n){

    let top=0;
    let left=0;
    let bottom=n-1;
    let right=n-1;

    let str="";

    for(let i=bottom;i>=top;i--){
        str+=arr[i][left]+" ";
    }
    left++;

    for(let i=left;i<=right;i++){
        str+=arr[top][i]+" ";
    }
    top++;
    for(let i=top;i<=bottom;i++){
        str+=arr[i][right]+" ";
    }

    right--;

    for(let i=right;i>=left;i--){
        str+=arr[bottom][i]+" ";
    }

    console.log(str);

}

function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let test=+input[0];
   let line=1;
   for(let i=0;i<test;i++){
       let n=+input[line++];
       let arr=[];
       for(let i=0;i<n;i++){
            let a=input[line++].trim().split(" ").map(Number);
            arr.push(a);
       }
       circularTraversal(arr,n);
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
   