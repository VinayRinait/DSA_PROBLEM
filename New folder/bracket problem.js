function runProgram(input){
   input = input.trim().split("\n")
   var tc = +input[0]
   var line = 1
   for(var i=0;i<tc;i++){
       var str = input[line].trim()
       line++
       console.log(bracket(str))
   }
}

function bracket(str){
   var n = str.length
   var stack = []
   var obj = {
       ')' : '(',
       ']' : '[',
       '}' : '{'
   }
   
   for(var i=0;i<n;i++){
       if(str[i]=='(' || str[i]=='[' || str[i]=='{'){
           stack.push(str[i])
       //     console.log(i,stack)
       }
       else{
           // console.log(stack.length)
           if(stack.length == 0){
               
           return "not balanced"
           }
           if(obj[str[i]] != stack[stack.length-1]){
               return "not balanced"
           }
           else{
               stack.pop()
           }
       }
       // console.log(stack)
       // console.log(str[i])
   }
   if(stack.length==0){
       return "balanced"
   }
   else{
       return "not balanced"
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
   