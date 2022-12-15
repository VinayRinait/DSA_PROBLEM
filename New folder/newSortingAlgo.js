function findit(array, n, k) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] % k > array[j + 1] % k) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  findit(array, n, k);
  console.log(array.join(" "));
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
 
  
 