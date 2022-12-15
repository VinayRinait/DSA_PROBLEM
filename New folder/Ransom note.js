function runProgram(input) {
    input=input.trim().split("\n");
    
    let [one, two] = input[0].trim().split(" ").map(Number);
    let ransomNote  = input[1].trim().split(" ");
    let magazine  = input[2].trim().split(" ");
    
ransomleet(one , two , ransomNote, magazine)

  }
  
function ransomleet(one,two,ransomNote, magazine){
    for(let i = 0 ; i<one; i++){
        if(magazine[i]==ransomNote[i]){
            console.log("Yes");
            break;
        }else{
            console.log("No")
            break;
        }
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
   
   