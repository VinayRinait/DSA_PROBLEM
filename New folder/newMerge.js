const part = (array,l,h)=>{
    let pivot = array[l],i = l,j = h;
    while(i < j){
        while(array[i] <= pivot)i++;
        while (array[j] > pivot) j--;
        if(i < j)[array[i], array[j]] = [array[j], array[i]]
    }
    [array[j], array[l]] = [array[l], array[j]]
    return j;
}

const findMerge = (array,l,h)=>{
 if(l < h){
     let pivot = part(array, l, h)
     findMerge(array,l, pivot-1)
     findMerge(array,pivot + 1, h)
 }
}

const runProgram = (input) => {
    input = input.trim().split("\n");
    let array = input[1].trim().split(" ").map(Number);
    findMerge(array,0,array.length-1)
    console.log(array);
  };

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
 