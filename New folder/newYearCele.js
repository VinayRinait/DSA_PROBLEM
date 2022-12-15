function newYC(arr1, arr2){
    // console.log(arr1, arr2);

    var stack = [];
    var top = stack.length-1;
    var queue = [];
    var front = 0;

    for( var i = 0; i < arr1.length; i++){

        if( arr1[i] == 1){
            queue.push(arr2[i]);
        }
        if( arr1[i] == 2){
            stack.push(arr2[i]);
        }
        if( arr1[i] == 3){
            if(queue.length){
                console.log(queue[front]);
            }else{
                console.log("-1");
            }
        }
        if( arr1[i] == 4){
            if( stack.length){
                console.log(stack[stack.length - 1]);
            }else{
                console.log("-1");
            }
        }
        if( arr1[i] == 5){
            stack.push(queue[front]);
            queue.shift()
        }
    }
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var testCases = +input[0];
    var arr1 = [];
    var arr2 = [];
   var line = 1;

   for(var i = 0; i < testCases; i++){
       var arr = input[line].trim().split(" ")

       arr1.push(arr[0]);
       
       arr2.push(arr[1]);
       
       line++;

       
   }
    newYC(arr1, arr2);
   
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
   
   