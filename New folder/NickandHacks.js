function runProgram(input){
  // Write code here
  input = input.split(/[\r\n]+/)
  let test = Number(input[0])
  input.shift()
  let go = 0
  while( go < test ){

      let n = Number(input[0])
      if( hackTheMoney( n, 0 ) == 0 ){
          console.log("No")
      }

      input.shift()
      go++
  }
}

function hackTheMoney( n, rem ){
 
  if( n === 1 && rem === 0 ){
      console.log("Yes")
      return 1
  }

  if( n === 0 || rem !== 0){
      return 0
  }

  if( hackTheMoney( Math.floor( n / 10 ), n % 10 ) === 0 ){

     return hackTheMoney( Math.floor( n / 20 ), n % 20 )
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
 