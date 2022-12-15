const LowerBound = (array,n,k)=>{
    let low = 0,high = n-1,res = -1;   
    while(low <= high){
        let mid = Math.floor(low + (high - low) / 2);
        if(array[mid] === k){
            res = mid;
            high = mid - 1;
        }
        else if(array[mid] > k)high = mid - 1;
        else low = mid + 1;
    }
    return res;
}
const UpperBound = (array,n,k)=>{
    let low = 0,high = n-1,res = -1;   
    while(low <= high){
        let mid = Math.floor(low + (high - low) / 2);
        if(array[mid] === k){
            res = mid;
            low = mid + 1;
        }
        else if(array[mid] > k)high = mid - 1;
        else low = mid + 1;
    }
    return res;
}

const runProgram = (input)=> {
  input = input.trim().split('\n')
   let [n,k] = input[0].trim().split(' ').map(Number);
   let array = input[1].trim().split(" ").map(Number);
   let lower = LowerBound(array,n,k);
   let Upper = UpperBound(array,n,k);
   console.log((Upper-lower) + 1);
   
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
   