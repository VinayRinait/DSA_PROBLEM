function runProgram(input){
    input=input.trim().split('\n')
    
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++){
        let str=input[line++]
    
        masai(str)
    }
}

function masai(str){
    let N=str.length
    
    let bag="";
    
    for(let i=0;i<N;i++){
        if(str[i]==str[i+1]){
            continue;
        }
        else{
           bag+=str[i] 
        }
    }
    console.log(bag);
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
 