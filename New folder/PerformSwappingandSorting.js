function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number);
    }
   // console.log(input)
   let test=input[0]
   let line=1;
   for(let i=0;i<test;i++)
   {
       const [el,move]=input[line++]
       let arr=input[line++]
      // console.log(el,move,arr)
      let x= rotedArr(arr,el,move)
       console.log(x.join(" "))
   }
function rotedArr(arr,el,move){
   // console.log(arr,el,move)
    for(var i = 0;i<el;i++){
        var pos = i
        for(var j = i+1;j<el;j++){
           // console.log(i,j)
            if((j-i)>move){
                break
            }
            //console.log(arr[j],arr[pos])
            if(arr[j] < arr[pos]){
                pos = j
            }
        }
       // console.log(arr)
        for(var j = pos;j>i;j--){
            var temp = arr[j-1]
            arr[j-1] =arr[j]
            arr[j] = temp
            move--
        }
    }
    return arr

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
 