function runProgram(input){
    input= input.trim().split('\n')
 
    let N=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
 
 
 
    Make_wave_Array(N,arr)
 
 
 }
 
 function Make_wave_Array(N,arr){
 
 arr.sort((a,b) => a-b);
 
     for(let i=0;i<N;i++){
      if(i%2==0){
          if(arr[i]>arr[i+1]){
              let temp=arr[i]
              arr[i]=arr[i+1]
              arr[i+1]=temp
              
          }
          else{
              if(arr[i]<arr[i+1]){
                  let temp=arr[i];
                  arr[i]=arr[i+1];
                  arr[i+1]=temp;
              }
          }
      }
     }
     console.log(arr.join(" "))
     
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
 