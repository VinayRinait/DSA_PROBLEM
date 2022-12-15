

function check2(n){
    let sum=0;
    
    while(n!==0){
        let rem=n%10;
        sum=sum+rem;
        n=Math.floor(n/10);
    }
    
    if(sum>=10){
        return check2(sum);
    }
    return sum;
}

function runProgram(input) {
    // Write code here
    let [n,k]=input.trim().split(" ").map(Number);
    let a=check2(n);
    a=a*k;
    if(a>=10){
        a=check2(a);   
    }
    console.log(a);
  }
  if (process.env.USERNAME === "sangam") {
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
      process.exit(0) ;
    });
  }