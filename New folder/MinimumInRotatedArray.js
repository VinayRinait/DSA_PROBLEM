function find(arr,n){
    // console.log(arr,n);
    let l=0;
    let h=n-1;

    while(l<=h){
        let mid=Math.floor(l+(h-l)/2);

        if(arr[mid+1]<arr[mid]){
            return arr[mid+1];
        }
        if(arr[mid]<arr[mid-1]){
            return arr[mid];
        }

        else if(arr[mid]>arr[h]){
            l=mid+1;
        }else{
            h=mid-1;
        }
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    // console.log(arr,n);
    
    let a=find(arr,n);
    console.log(a);
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
   