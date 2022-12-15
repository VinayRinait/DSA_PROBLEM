function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0]; let l=1;
    for(i=0;i<tc;i++){
        let n=+input[l++];
        let arrayof1=input[l++].trim().split(" ").map(Number);
        console.log(verylow(n,arrayof1));
    }
  }
  


function verylow(n,arrayof1){
      let add ="";
    
    for(let i=0;i<n;i++){    
        let ma=arrayof1[i];
        for(let j=i+1;j<n;j++){
            if(arrayof1[i] >= arrayof1[j]){
                ma -=arrayof1[j];
                break;
            }
        }
        add+=ma+" ";
    }
    
    return add
      
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
 