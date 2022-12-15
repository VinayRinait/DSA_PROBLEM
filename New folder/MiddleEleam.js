const find_middle_element = (array,n)=>{
    for(let i = 0; i < n; i++){
        let flag = -1;
        for(let j = 0;j< n; j++){
            if(j < i){
                if(array[j] > array[i])flag = 1;
            }
            if(j > i){
                if(array[j] < array[i])flag = 1;
            }
        }
        if(flag === -1)return array[i];
    }
    return -1;
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
  let n = +input[0],array = input[1].trim().split(' ').map(Number);
  console.log(find_middle_element(array, n));
   
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
  
  
  