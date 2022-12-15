//Enter code here
function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    //console.log(input)
    let test=input[0]
    let line=1;
    for(let i=0;i<test;i++)
    {
        let [el,swap]=input[line++]
        let arr=input[line++]
       // console.log(el,swap,arr)
       swapSort(arr,el,swap)
    }
  }
  function swapSort(arr,el,swap)
  {
      
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
   