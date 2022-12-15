function  OCD(n,arr){
    let arr2 = new Array(60).fill(0);
    let count = 0;
    for(let t of arr){
        let ans =t%60
        if (ans===0){
           count += arr2[0] 
        }else{
            count += arr2[60 -ans]
        }arr2[ans]++
    }console.log(count)
}
function runProgram(input){
  input =input.split("\n")
  var t =+input[0]
  let line =1
  for(let i=0;i<t;i++){
      var n =input[line++]
      var arr = input[line++].split(" ").map(Number)
      OCD(n,arr)
     
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
 