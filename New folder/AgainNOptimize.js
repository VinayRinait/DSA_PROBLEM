const findAgain = (weight,value,limit,n)=>{
    if(limit == 0 || n == 0)return 0;
    if(weight[n - 1] > limit)return findAgain(weight,value,limit,n-1);
    else return Math.max(value[n - 1] + findAgain(weight,value,limit- weight[n - 1], n - 1),findAgain(weight,value,limit,n-1))}
const runProgram = (input)=> {
  input = input.trim().split('\n')
   let cases = +input[0],line = 1;
   for(let i = 0; i < cases; i++){
       let [k,n] = input[line++].trim().split(" ").map(Number)
       let weight = [],value = []
       for(let j = 0;j< n; j++){
           let [a,b] = input[line++].trim().split(" ").map(Number)
           weight.push(a),value.push(b)
       }console.log(findAgain(weight,value,k,n)) }
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
   
  
  