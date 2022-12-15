function runProgram(input){
   input = input.split("\n")
   var n = +input[0]
   var order = input[1].split(" ").map(Number)
   var ideal = input[2].split(" ").map(Number)
   find(n,order,ideal)
}

function find(n,order,ideal){
   let count = 0
   for(let i=0; i<ideal.length; i++){
       let value = ideal[i]
       while(order[0] !== value){
           let out = order.shift()
           order.push(out)
           count++
       }
       if(order[0] === value){
           order.shift()
           count++
       }
       
   }
   console.log(count)
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
 