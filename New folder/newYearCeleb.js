function findit(array, stack, queue) {
  if (array[0] == 1) queue.push(array[1]);
  if (array[0] == 2) stack.push(array[1]);
  if (array[0] == 3) queue.length > 0 ? console.log(queue[0]) : console.log(-1);
  if (array[0] == 4)
    stack.length > 0 ? console.log(stack[stack.length - 1]) : console.log(-1);
  if (array[0] == 5) {
    if (queue.length > 0) {
      let x = queue.shift();
      stack.push(x);
    } else console.log(-1);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let stack = [],
    queue = [];
  for (let i = 0; i < n; i++) {
    let array = input[line++].trim().split(" ").map(Number);
    findit(array, stack, queue);
  }
}
//Enter code here
function runProgram(input){
  input=input.trim().split("\n")
  
  var test=input[0]
  var s=1;
  
  for(var i=0; i<test; i++)
  {
      var size=+input[s++]
      
      var arr1=input[s++].trim().split(" ").map(Number)
      var arr2=input[s++].trim().split(" ").map(Number)
      
      var x=fun(size,arr1,arr2)
      
      if(x===true)
      {
          console.log("Ash Finally Wins")
      }
      else
      {
          console.log("Train Hard Again")
      }
  }
  
 function fun(size,arr1,arr2){
     
     arr1=arr1.sort((a,b)=>(a-b))
     arr2=arr2.sort((a,b)=>(a-b))
     
      var i=0;
      var j=0;
      
      while(i<size && j<size)
      {
          if(arr1[i]<=arr2[j])
          {
              return false
          }
          i++
          j++
      }
      return true;
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
 
  
 