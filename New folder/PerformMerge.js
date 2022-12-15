function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+input[0];
    let arr1=input[1].trim().split(" ").map(Number);
    let arr2=input[2].trim().split(" ").map(Number);
    // console.log(arr1,arr2,n);
    let k=0;
    let l=0;
    let ans=[];
    while(l<n && k<n){
        if(arr1[l]<arr2[k]){
            ans.push(arr1[l]);
            l++;
        }else{
            ans.push(arr2[k]);
            k++;
        }
    }

    while(l<n){
        ans.push(arr1[l]);
        l++;
    }
    while(k<n){
        ans.push(arr2[k]);
        k++;
    }
    console.log(ans.join(" "));


    
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
   